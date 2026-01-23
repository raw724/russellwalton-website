import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects.jsx'; 

// Extend the data with detailed content
const detailedProjectData = projectsData.map(p => {
    // Note: The projectsData array will only have title, slug, desc, and tech 
    // from the Projects.jsx file. We must manually define the unique content here.
    if (p.slug === 'hyrox') {
        return {
            ...p,
            details: (
                <div className="hyrox-details">
                    <p>
                        Hyrox is a global indoor fitness race. It combines functional exercises with running, testing both endurance and strength. My training currently involves a rigorous combination of HIIT, lifting, running, and perfecting the specialized functional movements for the event. 
                    </p>
                    <p className="mt-4">
                        Bi-weekly, I attend a Hyrox-specific class at my gym. After completing the mixed doubles event in Manchester, I am currently pushing my limits to finish my first solo event in London. This level of physical discipline and mental resilience is what drives me to perform at my peak.
                    </p>
                </div>
            ),
            imgUrl: '/images/hyrox.jpg', 
            tags: ['Fitness', 'Endurance', 'Discipline']
        };
    }
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
                      <strong>Teaching Sailing:</strong> My love for sailing encouraged me to pursue gaining certifications that allow me to teach and endorse children and adults in sailing.
                        I have managed to work my way up the ranks and I am now a fully qualified RYA Senior Sailing Instructor. This means overseeing a centers day-to-day operations, ensuring safety and aiding other instructors in running lessons on the water and in the classroom.
                        I thrive in my workplace because everyday provides exciting new challenges to overcome which is rewarding for me and my customers. With such a diverse group of clientele, I enjoy making new connections and turning a standard week of learning into a memorable experience.
                    </p>

                    <p className="mt-4">
                      <strong>Upcoming Plans:</strong> Currently, I am booked to complete my RYA Day Skipper qualification. This is one week of vigorous practical ability aboard a yacht alongside theory work. Following this, I am competing in a new category at the 2026 Hobie Europeans in August. 
                        I will be crewing alongside the current national champion in the spinnaker champion which relies heavily on strength, communication and specific technique which can shake up race! Sounds exciting to me!
                    </p>
                  </div>
                ),
            imgUrl: '/images/sailing.jpg', 
            tags: ['Teamwork', 'Strategy', 'Technical Skill']
        };
    }
    if (p.slug === 'tech') {
        return {
            ...p,
            details: (
                <div className="tech-details>
                    <p>
                        This portfolio itself is an ongoing technical project, built using Vite, React, and Tailwind CSS. My other project area of interest has focused on using Python to solve real-world problems and enhance user experiences. 
                        For example, I created a machine learning and AI based program to predict the likelyhood of rain, depending on historical data called RainCheck (pictured above). 
                        Through my university studies, I am working on many group projects which can be viewed on my GitHub page.
                    </p>
                </div>
                <a ahref="github.com/raw724"> My GitHub portfolio.</a>
            ),
            imgUrl: '/images/raincheck.png', 
            tags: ['Python', 'Web Development', 'Machine Learning']
        };
    }
    return p;
});

export default function ProjectDetails() {
    // 1. Get the slug from the URL
    const { slug } = useParams();
    
    // 2. Find the project data that matches the slug
    const project = detailedProjectData.find(p => p.slug === slug);

    // If project is not found (e.g., bad URL), display a 404-like message
    if (!project) {
        return (
            <div className="min-h-screen pt-40 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4">404 - Project Not Found</h1>
                <p className="text-[--muted] mb-8">
                    We couldn't find a project with the identifier: **{slug}**.
                </p>
                <Link to="/" className="btn btn-primary">Return to Home</Link>
            </div>
        );
    }
    
    // 3. Render the project details
    return (
        <section className="pt-40 pb-20 max-w-6xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="text-[--accent-to] flex items-center gap-2 mb-8 font-semibold">
                &larr; Back to Pursuits
            </Link>

            {/* Title and Image */}
            <h1 className="text-5xl font-extrabold mb-8">{project.title}</h1>
            
            <img 
                src={project.imgUrl} 
                alt={`${project.title} Banner`} 
                className="w-full rounded-xl object-cover mb-10 shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x400/7c3aed/ffffff?text=Image+Placeholder'; }}
            />

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <p className="text-xl leading-relaxed">{project.details}</p>

                    <h3 className="text-2xl font-bold mt-10 mb-4">Key Focus</h3>
                    <p className="text-[--muted]">{project.desc}</p>
                </div>
                
                {/* Sidebar / Key Details Card */}
                <div className="glass p-6 rounded-xl self-start">
                    <h3 className="text-xl font-bold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-600/20 text-[--text]">{tag}</span>
                        ))}
                    </div>

                   
                </div>
            </div>
        </section>
    );
}
