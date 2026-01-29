import React from 'react';
import { Link } from 'react-router-dom';

export const projectsData = [
  { id: 1, title: 'Hyrox', slug: 'hyrox', tech: 'Fitness, Endurance, Discipline', desc: "" },
  { id: 2, title: 'High Performance Sailing', slug: 'sailing', tech: 'Strategy, Teamwork, Technical Skill', desc: "" },
  { id: 3, title: 'Technical Projects', slug: 'tech', tech: 'Python, Web Development, Machine Learning', desc: "" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Personal Pursuits</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.map((p, i) => (
          <Link 
            key={i} 
            to={`/project/${p.slug}`} 
            // ADDED: 'min-h-[200px]' makes it taller. 'flex flex-col justify-between' pushes the "Read More" to the bottom.
            className="glass p-8 block cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
          >
            <div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                {/* We removed the desc, so we just show the tech tags now */}
                <p className="text-sm text-[--muted] leading-relaxed">{p.tech}</p>
            </div>
            
            {/* The arrow will now stick to the bottom of the box */}
            <span className="text-sm text-[--accent-to] mt-4 font-bold flex items-center gap-2">
                Read More <span className="text-lg">&rarr;</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
