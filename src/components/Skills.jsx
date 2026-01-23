import React from 'react';

const coreSkills = [
  {
    title: 'Leadership & Management',
    icon: '⚡', // Lightning icon for energy/activation
    description: 'Experience as Manager on Duty at Pizza Express and Senior Dinghy Instructor, covering staff management, operational flow, shift leadership, problem-solving, and mentoring new instructors.',
  },
  {
    title: 'Customer Engagement & Communication',
    icon: '💬', // Speech bubble icon for communication
    description: 'Excellent front-of-house skills and clear, confident communication with diverse audiences. Proven ability to effectively represent and uphold an organisation’s brand standards.',
  },
  {
    title: 'Brand / Experience Activation',
    icon: '✨', // Sparkle icon for experience
    description: 'Adept at setting up and producing quality deliverables under a brand’s specific vibe. Through experience delivering engaging sailing lessons and schemes whilst ensuring customer experiences are consistently positive, memorable, and aligned with organization specific goals.',
  },
  {
    title: 'Self-Improvement & Initiative',
    icon: '📈', // Growth icon for development
    description: 'A continuous learner, constantly looking for ways to develop, adapt, and innovate—whether through rigorous training regimes, pursuing new qualifications, or seeking mentorship.',
  },
  {
    title: 'Resilience & Energy',
    icon: '💪', // Flexed arm for strength/resilience
    description: 'Comfortable working under pressure, able to efficiently juggle multiple high-priority responsibilities, and highly motivated by both physical and mental effort in dynamic scenarios.',
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h3 className="text-2xl font-bold mb-8">Core Strengths & Skills</h3>
      
      {/* Grid Layout: 2 columns on medium/large screens, responsive down to 1 column */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreSkills.map((skill, index) => (
          <div 
            key={index} 
            className="glass p-6 transition-all duration-300 transform hover:scale-[1.02] 
                       border-b-4 border-[--accent-to]/50 hover:border-[--accent-to] group"
          >
            <div className="text-3xl mb-3 group-hover:animate-bounce transition duration-500 origin-bottom-left">
                {skill.icon}
            </div>
            <h4 className="font-bold text-lg mb-2 text-[--text]">{skill.title}</h4>
            <p className="text-sm text-[--muted]">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
