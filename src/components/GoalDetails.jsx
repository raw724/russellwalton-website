import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GoalDetails() {

  // --- THEME SWITCHER LOGIC ---
  useEffect(() => {
    const root = document.documentElement;

    // 1. Set Red Bull Brand Colors (Red & Yellow/Gold)
    root.style.setProperty('--accent-from', '#DB0A40'); // Red Bull Red
    root.style.setProperty('--accent-to', '#FFC906');   // Red Bull Yellow/Gold

    // Optional: Force dark mode or custom background if desired
    // document.body.style.backgroundColor = '#0E1120';

    // 2. Cleanup: Reset to Default Colors (Cyan & Purple) when leaving this page
    return () => {
      root.style.setProperty('--accent-from', '#06b6d4'); 
      root.style.setProperty('--accent-to', '#7c3aed');
      // document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <section className="pt-40 pb-20 min-h-screen max-w-5xl mx-auto px-6">
      
      {/* Back Button */}
      <Link to="/" className="text-[--accent-to] flex items-center gap-2 mb-12 font-semibold hover:underline">
        &larr; Back to Home
      </Link>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="glass p-8 md:p-12 border-t-4 border-[--accent-from]">
        
        {/* 1. Large Graphic Logo Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Ensure you have this image in public/images/ */}
          <img 
            src="/images/redbull-logo.png" 
            alt="Red Bull Logo" 
            className="w-48 md:w-72 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <h1 className="mt-6 text-3xl md:text-5xl font-black uppercase tracking-widest text-center text-white">
            Student Marketeer
          </h1>
        </div>

        {/* 2. Intro Text & Quote */}
        <div className="space-y-8 text-lg leading-relaxed text-gray-200">
          <blockquote className="border-l-4 border-[--accent-from] pl-6 py-4 italic font-light text-2xl bg-white/5 rounded-r-lg">
            "Gives You Wings." <br/>
            <span className="text-sm text-gray-400 not-italic">— Representing a global energy powerhouse on the ground.</span>
          </blockquote>
          
          <p>
            As a Student Marketeer, I am part of a dynamic team responsible for driving brand image and product understanding on campus and in the region. The goal is to build a loyal consumer base by inviting consumers to try the product in the right moments.
          </p>

          {/* 3. The Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-[#1a1f3c] p-8 rounded-2xl border border-blue-900/30 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-[--accent-from] font-bold mb-3 uppercase tracking-wider">Strategic Planning</h3>
              <p className="text-gray-400 text-sm">
                Developing strategies to engage students and locals, analyzing territory trends, and executing marketing initiatives with precision.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1a1f3c] p-8 rounded-2xl border border-blue-900/30 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-[--accent-from] font-bold mb-3 uppercase tracking-wider">Brand Ambassadorship</h3>
              <p className="text-gray-400 text-sm">
                Embodying the Red Bull lifestyle, supporting sales teams, and managing event logistics to ensure premium brand experiences.
              </p>
            </div>
          </div>

          {/* 4. Background Image (Optional Visual) */}
          <div className="mt-12 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
             <img 
               src="/images/redbull-bg.jpg" 
               alt="Red Bull Event" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">Live. Experience. Activate.</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
