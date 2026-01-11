import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ActsGrid from "../components/ActsGrid";
import FinalCTA from "../components/FinalCTA";

gsap.registerPlugin(ScrollTrigger);

export default function ScriptSection() {
const sectionRef = useRef(null);
const typingRef = useRef(null);
const textRef = useRef(""); // 🔒 persists text safely
const hasPlayed = useRef(false); // 🔒 prevents double run

useLayoutEffect(() => {
  if (hasPlayed.current) return;

  const ctx = gsap.context(() => {
    const section = sectionRef.current;
    const typingEl = typingRef.current;

    if (!section || !typingEl) return;

    // Store text ONCE
    if (!textRef.current) {
      textRef.current = typingEl.textContent;
    }

    const fullText = textRef.current;
    typingEl.textContent = "";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 65%",
        once: true,
      },
      onComplete: () => {
        hasPlayed.current = true;
      },
    });

    tl.from(".script-headline", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.to(
      { i: 0 },
      {
        i: fullText.length,
        duration: fullText.length * 0.035,
        ease: "none",
        onUpdate: function () {
          typingEl.textContent = fullText.slice(
            0,
            Math.floor(this.targets()[0].i)
          );
        },
      },
      "+=0.15"
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="relative script-section bg-black text-white py-20 md:py-32 px-4 sm:px-8 "
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="script-headline font-serif text-5xl md:text-6xl">
          📝 THE SCRIPT
        </h2>

        <p
          ref={typingRef}
          className="mt-6 text-sm tracking-widest text-neutral-500"
        >
          THREE ACTS TO BRAND DOMINATION.
        </p>
      </div>

      {/* Acts */}
      <ActsGrid/>

      {/* CTA */}
      <FinalCTA />
    </section>
  );
}

