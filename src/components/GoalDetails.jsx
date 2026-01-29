import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GoalDetails() {
  const [imageError, setImageError] = useState(false);

  // --- THEME SWITCHER LOGIC ---
  useEffect(() => {
    // 1. Force the page to scroll to top on load
    window.scrollTo(0, 0);

    const root = document.documentElement;
    const body = document.body;
    
    // Save original styles to restore them later
    const originalBg = body.style.backgroundColor;
    const originalColor = body.style.color;

    // 2. FORCE DARK RED BULL THEME
    // We override the body background immediately to prevent white flashes
    body.style.backgroundColor = '#0d1021'; // Dark Navy/Black
    body.style.color = '#ffffff';

    // Set Brand Colors (Red & Yellow)
    root.style.setProperty('--accent-from', '#DB0A40'); 
    root.style.setProperty('--accent-to', '#FFC906');   

    // Cleanup: Reset everything when leaving the page
    return () => {
      root.style.setProperty('--accent-from', '#06b6d4'); 
      root.style.setProperty('--accent-to', '#7c3aed');
      body.style.backgroundColor = originalBg;
      body.style.color = originalColor;
    };
  }, []);

  return (
    // Force a dark background on the section container just in case
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#0d1021] text-white">
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 mb-12 text-[#FFC906] font-bold tracking-wide hover:underline hover:opacity-80 transition-all">
          &larr; RETURN TO HOME
        </Link>

        {/* --- MAIN CARD --- */}
        {/* Added a glass effect with a dark tint so it pops against the dark background */}
        <div className="bg-[#15192b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DB0A40] to-[#FFC906]"></div>

          {/* 1. HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-12">
             {/* Logo Handling: If image fails, show text instead */}
             {!imageError ? (
                <img 
                  src="/images/redbull-logo.png" 
                  alt="Red Bull Logo" 
                  className="w-48 md:w-64 h-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  onError={() => setImageError(true)}
                />
             ) : (
                <h2 className="text-4xl font-black italic text-[#DB0A40] mb-4">Red Bull</h2>
             )}
             
             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white drop-shadow-lg">
               Student Marketeer
             </h1>
          </div>

          {/* 2. QUOTE & INTRO */}
          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <blockquote className="relative border-l-4 border-[#DB0A40] pl-6 py-2 bg-white/5 rounded-r-lg">
              <span className="text-2xl font-light italic text-white block mb-2">"Gives You Wings."</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">— Representing a global energy powerhouse.</span>
            </blockquote>
            
            <p>
              As a Student Marketeer, I am part of a dynamic team responsible for driving brand image and product understanding on campus and in the region. The goal is to build a loyal consumer base by inviting consumers to try the product in the right moments.
            </p>

            {/* 3. CARDS SECTION */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {/* Card 1 */}
              <div className="bg-[#1a1f3c] p-6 rounded-xl border border-white/10 hover:border-[#DB0A40]/50 transition-colors shadow-lg group">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#DB0A40]/10 rounded-lg text-[#DB0A40]">
                        {/* Target Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Strategic Planning</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Developing strategies to engage students and locals, analyzing territory trends, and executing marketing initiatives with precision.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a1f3c] p-6 rounded-xl border border-white/10 hover:border-[#FFC906]/50 transition-colors shadow-lg group">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#FFC906]/10 rounded-lg text-[#FFC906]">
                        {/* People Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Brand Ambassadorship</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Embodying the Red Bull lifestyle, supporting sales teams, and managing event logistics to ensure premium brand experiences.
                </p>
              </div>
            </div>

            {/* 4. OPTIONAL BACKGROUND IMAGE */}
            <div className="mt-12 w-full h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
               {/* IMPORTANT: If this image is missing, the div will just be dark blue.
                  Make sure 'public/images/redbull-bg.jpg' exists!
               */}
               <img 
                 src="/images/redbull-bg.jpg" 
                 alt="Red Bull Event" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                 onError={(e) => e.target.style.display = 'none'} 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-black text-4xl uppercase tracking-[1em] rotate-12 select-none">Energy</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
