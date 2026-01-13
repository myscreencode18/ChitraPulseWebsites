import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PipelineFooter from "../components/PipelineFooter";
import PipelinePhase from "../components/PipelinePhase";
import PipelineHeader from "../components/PipelineHeader";

gsap.registerPlugin(ScrollTrigger);

export default function PipelineSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* Center line progress */
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
          transformOrigin: "top center",
        }
      );

      /* Phase activation */
      gsap.utils.toArray(".pipeline-phase").forEach((phase) => {
        const icon = phase.querySelector(".phase-icon");

        ScrollTrigger.create({
          trigger: phase,
          start: "top 65%",
          onEnter: () => {
            gsap.to(phase, {
              opacity: 1,
              color: "#ffffff",
              duration: 0.4,
            });

            gsap.to(icon, {
              scale: 1.2,
              color: "#22c55e",
              duration: 0.3,
            });

            icon.innerText = "✅";

              },
          onLeaveBack: () => {
            gsap.to(phase, {
              opacity: 0.5,
              color: "#9ca3af",
              duration: 0.4,
            });

            gsap.to(icon, {
              scale: 1,
              color: "#9ca3af",
              duration: 0.3,
            });
          },
          
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-neutral-500 py-40 px-6"
    >
      <PipelineHeader />

      <div className="relative max-w-6xl mx-auto mt-32">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-neutral-800 -translate-x-1/2" />
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0  w-px bg-red-500 origin-top -translate-x-1/2 z-10"
        style={{ height: "100%",transformOrigin: "top"  }}
        />

        <PipelinePhase
          side="left"
          phase="PHASE 01"
          title="THE SCRIPT"
          subtitle="Discovery"
          icon="⌨️"
          copy="We study your audience, analytics, and voice. Strategy first. Guessing never."
        />

        <PipelinePhase
          side="right"
          phase="PHASE 02"
          title="STORYBOARDING"
          subtitle="Wireframes"
          icon="▢"
          copy="Blueprints before bricks. Every scroll, click, and transition mapped."
        />

        <PipelinePhase
          side="left"
          phase="PHASE 03"
          title="FULL PRODUCTION"
          subtitle="Design & Dev"
          icon="🎬"
          copy="Lights. Camera. Code. Cinematic design, motion, and mobile precision."
        />

        <PipelinePhase
          side="right"
          phase="PHASE 04"
          title="THE PREMIERE"
          subtitle="Launch"
          icon="🚀"
          copy="Domains, hosting, testing, rollout. You post the link. We handle the rest."
        />
      </div>

      <PipelineFooter />
    </section>
  );
}
