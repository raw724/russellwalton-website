import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for navigation

// RENAME and EXPORT the data array so the new ProjectDetails component can access it.
export const projectsData = [
  // 2. Add 'slug' property for use in the URL
  { id: 1, title: 'Hyrox', slug: 'hyrox', tech: 'Fitness, Endurance, Discipline'},
  { id: 2, title: 'High Perfomance Sailing', slug: 'sailing', tech: 'Strategy, Teamwork, Technical Skill'},
  { id: 3, title: 'Technical Projects', slug: 'tech', tech: 'Python, Web Development, Machine Learning'}
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Personal Pursuits</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projectsData.map((p, i) => (
          // 3. Replace <div> with <Link> and set the dynamic destination
          <Link 
            key={i} 
            to={`/project/${p.slug}`} // Links to dynamic path: /project/hyrox
            // Apply card styling and make it look clickable
            className="glass p-6 block cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-[--muted] mt-2">{p.desc}</p>
            <p className="text-sm mt-2">{p.tech}</p>
            {/* Add a visual cue to indicate this navigates */}
            <span className="text-sm text-[--accent-to] mt-3 block font-semibold">Read More &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
