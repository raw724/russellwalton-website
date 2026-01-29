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
      
      {/* --- BACKGROUND DECORATION: BRIGHTER SILVER SLASHES --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Slash 1: Massive Bright Silver Diagonal */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[150%] bg-gradient-to-b from-white/10 via-gray-400/20 to-transparent -skew-x-12 border-l-2 border-white/20 blur-sm"></div>
        
        {/* Slash 2: Sharp White Accent Line */}
        <div className="absolute top-0 right-[25%] w-1 h-full bg-white/30 -skew-x-12 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        
        {/* Slash 3: Bottom Metallic Block */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[80%] bg-gradient-to-t from-gray-200/10 to-transparent -skew-x-12 border-r border-white/10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 mb-12 text-[#FFC906] font-bold tracking-wide hover:underline hover:opacity-80 transition-all">
          &larr; RETURN TO HOME
        </Link>

        {/* --- MAIN CARD --- */}
        <div className="bg-[#15192b]/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Top Metallic Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#DB0A40] via-gray-200 to-[#FFC906]"></div>

          {/* 1. HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-16">
             {/* LOGO HANDLING - NOW MUCH LARGER */}
             {!imageError ? (
                <img 
                  src="/images/redbull-logo.png" 
                  alt="Red Bull" 
                  // INCREASED SIZE HERE: w-64 on mobile, w-96 on desktop
                  className="w-64 md:w-96 h-auto mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
                  onError={() => setImageError(true)}
                />
             ) : (
                // FALLBACK TEXT
                <div className="mb-8">
                    <h2 className="text-6xl font-black italic text-[#DB0A40] tracking-tighter drop-shadow-lg">Red Bull</h2>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">(Logo Image Missing
