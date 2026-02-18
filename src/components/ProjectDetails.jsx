import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects.jsx'; 

// 1. Extend the data with specific HTML details
const detailedProjectData = projectsData.map(p => {
    // HYROX
    if (p.slug === 'hyrox') {
        return {
            ...p,
            details: (
                <div className="hyrox-details">
                    <p>
                        Hyrox is a global indoor fitness race. It combines functional exercises with running, testing both endurance and strength. My training currently involves a rigorous combination of HIIT, lifting, running, and perfecting the specialized functional movements for the event. 
                    </p>
                    <p className="mt-4">
                        Bi-weekly, I attend a Hyrox-specific class at my gym. After completing the mixed doubles event in Manchester, I am currently pushing my limits to finish my first solo event in London. 
                    </p>
                </div>
            ),
            imgUrl: '/images/hyrox.jpg', 
            tags: ['Fitness', 'Endurance', 'Discipline']
        };
    }
    
    // SAILING
    if (p.slug === 'sailing') {
        return {
            ...p,
            details: (
                <div className="sailing-details">
                    <p>
                        Sailing competitively requires precision, quick decision-making, and deep technical knowledge. My sister and I are lucky enough to travel on a regular basis to compete on national, european and world stages including:
                    </p>
                    <ul className="list-disc ml-5 my-4">
                        <li>2025 Hobie 16 Nationals in Poole, England</li>
                        <li>2024 Hobie Europeans in Lake Garda, Italy</li>
                        <li>2022 Hobie 16 Worlds in Costa Brava, Spain</li>
                        <li>2021 Hobie Dragoon Europeans in Costa Brava, Spain</li>
                        <li>2019 Hobie Dragoon Europeans in La Rochelle, France</li>
                    </ul>
                    <p className="mt-4 italic">
                        <strong>Teaching Sailing:</strong> My love for sailing encouraged me to pursue gaining certifications that allow me to teach and endorse children and adults in sailing...
                    </p>
                    <p className="mt-4">
                        <strong>Upcoming Plans:</strong> Currently, I am booked to complete my RYA Day Skipper qualification...
                    </p>
                </div>
            ),
            imgUrl: '/images/sailing.jpg', 
            tags: ['Teamwork', 'Strategy', 'Technical Skill']
        };
    }

    // TECH
    if (p.slug === 'tech') {
        return {
            ...p,
            details: (
                <>
                    <div className="tech-details">
                        <p>
                            This portfolio itself is an ongoing technical project, built using Vite, React, and Tailwind CSS. My other project area of interest has focused on using Python to solve real-world problems and enhance user experiences. 
                        </p>
                        <p className="mt-4">
                            For example, I created a project that makes use of machine learning and AI-based programming to predict the likelihood of rain, depending on historical data called RainCheck (pictured above). I also have work experience at Scientific Games as a game developer. 
                            Aiding the design, coding and logic behind online gambling-based games. Experiences using Java, typescript and commercial IDE and server integration systems.
                        </p>
                    </div>
                    <a 
                        href="https://github.com/raw724" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 underline mt-4 inline-block"
                    >
                        My GitHub portfolio
                    </a>
                </>
            ),
            imgUrl: '/images/raincheck.png', 
            tags: ['Python', 'Web Development', 'Machine Learning']
        };
    }

    return p;
});

export default function ProjectDetails() {
    const { slug } = useParams();
    const project = detailedProjectData.find(p => p.slug === slug);

    // 404 Check
    if (!project) {
        return (
            <div className="min-h-screen pt-40 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-extrabold mb-4">404 - Project Not Found</h1>
                <Link to="/" className="btn btn-primary">Return to Home</Link>
            </div>
        );
    }
    
    return (
        <section className="pt-40 pb-20 max-w-6xl mx-auto px-6">
            {/* Back Button */}
            <Link to="/" className="text-[--accent-to] flex items-center gap-2 mb-8 font-semibold hover:underline">
                &larr; Back to Pursuits
            </Link>
    
            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8">{project.title}</h1>
            
            {/* Banner Image with Safety Check */}
            <img 
                src={project.imgUrl} 
                alt={`${project.title} Banner`} 
                className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-10 shadow-lg"
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.style.display = 'none'; // Hide if image missing
                }}
            />
    
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="text-xl leading-relaxed">
                        {project.details}
                    </div>
                    {/* KEY FOCUS SECTION REMOVED COMPLETELY */}
                </div>
                
                {/* Sidebar Tags */}
                <div className="lg:col-span-1">
                    <div className="glass p-6">
                        <h3 className="text-xl font-bold mb-4">Focus Areas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-[--accent-to]/10 text-[--accent-to] border border-[--accent-to]/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
