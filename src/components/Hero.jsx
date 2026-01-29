import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-7xl lg:text-8xl font-extrabold leading-tight text-[--text] tracking-tight"
  style={{ fontFamily: "'Saira', sans-serif" }}>Russell Walton.</h1>
          <p className="mt-4 text-lg text-[--muted] max-w-xl">
            Computer Science undergraduate at the University of Exeter. Driven by energy, milestones and vibes.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn btn-primary">View Personal Pursuits</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        {/* UPDATED LINK HERE */}
        <a 
          href="/goal-details" 
          className="p-8 rounded-2xl border-2 border-[--accent-to] shadow-lg 
                     bg-gradient-to-br from-[--accent-to]/10 to-[--accent-from]/10 
                     hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 
                     cursor-pointer block"
        >
          <div className="text-center">
            {/* 2. RED BULL THEME: Use a rocket icon and accent color for the header */}
            <h3 className="text-2xl font-black mb-3 flex items-center justify-center gap-3 text-[--accent-to]">
                MY NEXT GOAL 🚀
            </h3>
            
            <p className="text-xl font-bold text-[--text] mt-2 max-w-xs mx-auto">
              Red Bull Student Marketeer
            </p>
            
            {/* Slightly enlarged the supporting line */}
            <p className="text-[--muted] text-base mt-2 max-w-xs mx-auto">
              This job was made for me
            </p>
            
            {/* 3. CALL TO ACTION */}
            <div className="mt-4">
               <span className="btn btn-primary text-sm shadow-md">
                   Click to Find Out More
               </span>
            </div>
            
          </div>
        </a>
        {/* END OF EDITED RIGHT BLOCK */}
      </div>
    </section>
  );
}
