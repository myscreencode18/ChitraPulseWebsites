import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import ProjectProposalForm from "./ProjectProposalForm";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function CurtainCall() {
  const sectionRef = useRef(null);
  const questionRef = useRef(null);
  const ctaRef = useRef(null);
const [showForm, setShowForm] = useState(false);

useSmoothScroll(showForm);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(questionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.9,
        delay: 0.4,
        duration: 1,
        ease: "power3.out",
      });

      // Subtle pulse on question mark
      gsap.to(".pulse-q", {
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 max-w-[1600px] mx-auto"
    >
      {/* FINAL QUESTION */}
      <h2
        ref={questionRef}
        className="font-serif text-center text-4xl sm:text-5xl md:text-8xl leading-tight mb-16 md:mb-24"
      >
        READY TO CHANGE <br />
        HOW THE WORLD SEES YOU
        <span className="pulse-q">?</span>
      </h2>

      {/* FINAL CTA */}
      <div ref={ctaRef} className="mb-16 sm:mb-24 md:mb-32 flex justify-center">
        <button className="cta-final px-6 sm:px-10 py-4 text-sm sm:text-base md:text-lg rounded-full" onClick={() => setShowForm(true)}>
          BOOK A CREATIVE SESSION
        </button>
      </div>

      {/* FOOTER / CREDITS */}
      <footer className="absolute bottom-10 w-full flex flex-col items-center text-xs font-mono text-neutral-500 gap-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
          <span>INSTAGRAM (THE DAILY CUTS)</span>
          <span>YOUTUBE (BEHIND THE SCENES)</span>
          <span>LINKEDIN (THE STUDIO)</span>
        </div>

       <div className="text-[10px] sm:text-xs text-center leading-relaxed px-4">
  © 2026 ChitraPulse
  <br className="sm:hidden" />
  <span className="hidden sm:inline"> — </span>
  INQUIRIES: hello@chitrapulse.com
</div>

      </footer>
      {showForm && <ProjectProposalForm onClose={() => setShowForm(false)} />}
    </section>
    
  );
}
