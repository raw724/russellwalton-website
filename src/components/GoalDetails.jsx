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
        <div className="bg-[#15192b]/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col items-center">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#DB0A40] via-gray-200 to-[#FFC906]"></div>

          {/* 1. HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-12">
             
             {/* LOGO HANDLING - ZOOMED IN */}
             {!imageError ? (
                <div className="relative w-64 md:w-96 flex justify-center items-center mb-8 mt-4">
                    <img 
                      src="/images/redbull-logo.png" 
                      alt="Red Bull" 
                      className="w-full h-auto object-contain scale-[2.5] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      onError={() => setImageError(true)}
                    />
                </div>
             ) : (
                <div className="mb-8 mt-4">
                    <h2 className="text-6xl font-black italic text-[#DB0A40] tracking-tighter drop-shadow-lg">Red Bull</h2>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">(Logo Image Missing)</p>
                </div>
             )}
             
             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white drop-shadow-lg">
                Student Marketeer
             </h1>
          </div>

          {/* 2. PORTRAIT VIDEO PLACEHOLDER */}
          {/* aspect-[9/16] forces a standard mobile video ratio */}
          <div className="w-full max-w-sm aspect-[9/16] bg-black/50 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              {/* Subtle gradient overlay to make it look less plain */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#DB0A40]/10 pointer-events-none"></div>
              
              <p className="text-gray-400 font-bold uppercase tracking-widest z-10 animate-pulse text-center px-6">
                Video Dropping Soon
              </p>
          </div>

        </div>
      </div>
    </section>
  );
}
