import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GoalDetails() {
  const [imageError, setImageError] = useState(false);

  // --- THEME SWITCHER LOGIC ---
  useEffect(() => {
    window.scrollTo(0, 0);

    const root = document.documentElement;
    const body = document.body;
    
    // Save original styles
    const originalBg = body.style.backgroundColor;
    const originalColor = body.style.color;

    // Force Dark Navy Theme
    body.style.backgroundColor = '#0d1021'; 
    body.style.color = '#ffffff';

    // Set Red Bull Brand Colors
    root.style.setProperty('--accent-from', '#DB0A40'); 
    root.style.setProperty('--accent-to', '#FFC906');   

    return () => {
      root.style.setProperty('--accent-from', '#06b6d4'); 
      root.style.setProperty('--accent-to', '#7c3aed');
      body.style.backgroundColor = originalBg;
      body.style.color = originalColor;
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-[#0d1021] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION: BRIGHT SILVER SLASHES --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[150%] bg-gradient-to-b from-white/10 via-gray-400/20 to-transparent -skew-x-12 border-l-2 border-white/20 blur-sm"></div>
        <div className="absolute top-0 right-[25%] w-1 h-full bg-white/30 -skew-x-12 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[80%] bg-gradient-to-t from-gray-200/10 to-transparent -skew-x-12 border-r border-white/10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 mb-12 text-[#FFC906] font-bold tracking-wide hover:underline hover:opacity-80 transition-all">
          &larr; RETURN TO HOME
        </Link>

        {/* --- MAIN CARD --- */}
        <div className="bg-[#15192b]/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#DB0A40] via-gray-200 to-[#FFC906]"></div>

          {/* 1. HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-16">
             
             {/* LOGO HANDLING - ZOOMED IN */}
             {!imageError ? (
                // Wrapper div to control layout position
                <div className="relative w-64 md:w-96 flex justify-center items-center mb-10 mt-4">
                    <img 
                      src="/images/redbull-logo.png" 
                      alt="Red Bull" 
                      // scale-[2.5] zooms the image 2.5x to crop out whitespace.
                      // If it's still too small, try scale-[3.0]. If too big, try scale-[2.0].
                      className="w-full h-auto object-contain scale-[2.5] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      onError={() => setImageError(true)}
                    />
                </div>
             ) : (
                <div className="mb-8">
                    <h2 className="text-6xl font-black italic text-[#DB0A40] tracking-tighter drop-shadow-lg">Red Bull</h2>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">(Logo Image Missing)</p>
                </div>
             )}
             
             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white drop-shadow-lg">
               Student Marketeer
             </h1>
          </div>

          {/* 2. QUOTE & INTRO */}
          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <blockquote className="relative border-l-4 border-[#DB0A40] pl-6 py-4 bg-gradient-to-r from-white/10 to-transparent rounded-r-lg shadow-inner">
              <span className="text-3xl font-light italic text-white block mb-2">"Gives You Wings."</span>
              <span className="text-sm text-gray-300 uppercase tracking-wider font-semibold">— Representing a global energy powerhouse.</span>
            </blockquote>
            
            <p>
              space to be filled
            </p>

            {/* 3. CARDS SECTION */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Card 1 */}
              <div className="bg-[#1a1f3c] p-8 rounded-xl border border-white/10 hover:border-[#DB0A40] transition-colors shadow-lg group hover:bg-[#1f2445]">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#DB0A40]/10 rounded-lg text-[#DB0A40] group-hover:bg-[#DB0A40] group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Strategic Planning</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                 space to be filled
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a1f3c] p-8 rounded-xl border border-white/10 hover:border-[#FFC906] transition-colors shadow-lg group hover:bg-[#1f2445]">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#FFC906]/10 rounded-lg text-[#FFC906] group-hover:bg-[#FFC906] group-hover:text-black transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-wider">Brand Ambassadorship</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  space to be filled
                </p>
              </div>
            </div>

            {/* 4. OPTIONAL BACKGROUND IMAGE */}
            <div className="mt-12 w-full h-80 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group bg-black">
               <img 
                 src="/images/redbull-bg.jpg" 
                 alt="Red Bull Event" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                 onError={(e) => e.target.style.display = 'none'} 
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/10 font-black text-5xl uppercase tracking-[1em] rotate-12 select-none mix-blend-overlay">Energy</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

