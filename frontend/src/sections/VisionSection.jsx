import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionVision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".vision-panel");
      const track = document.querySelector(".vision-track");
  let scrollTween;

      /* Horizontal scroll */
      if (window.innerWidth > 768) {
       scrollTween = gsap.to(track, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".vision-pin",
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + window.innerWidth * panels.length,
        },
      });

      gsap.utils.toArray(".parallax-bg").forEach((bg) => {
        gsap.to(bg, {
          x: -120,
          scrollTrigger: {
            scrub: true,
            containerAnimation: scrollTween,
          },
        });
      });
    }
      /* Philosophy text transition */
      gsap.timeline({
        scrollTrigger: {
          trigger: ".vision-intro",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
        .to(".vision-text.primary", { opacity: 0, y: -40 })
        .fromTo(
          ".vision-text.secondary",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0 },
          "<"
        );

      /* Parallax depth */
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="vision-section">
      {/* FRAME 1 — PHILOSOPHY */}
      <div className="vision-intro">
        <h1 className="vision-text primary">WEBSITES INFORM.</h1>
        <h1 className="vision-text secondary">EXPERIENCES IMMERSE.</h1>
        <p className="vision-sub">
          Stop building pages. Start building feelings.
        </p>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div className="vision-pin">
        <div className="vision-track">

          {/* SCENE A */}
          <article className="vision-panel">
            <div className="panel-media parallax-bg">
              <video
                src="/videos/silk.mp4"
                muted
                loop
                autoPlay
                playsInline
                onMouseEnter={(e) => (e.target.playbackRate = 1.25)}
                onMouseLeave={(e) => (e.target.playbackRate = 1)}
              />
            </div>
            <div className="panel-copy">
              <h2>More Than Movement.</h2>
              <p>
                Animation isn’t decoration — it’s body language.  
                We choreograph attention, pace, and emotion.
              </p>
            </div>
          </article>

          {/* SCENE B */}
          <article className="vision-panel">
            <div className="panel-copy">
              <h2>The Psychology of “Expensive.”</h2>
              <p>
                Humans judge quality by feeling, not logic.  
                We engineer atmosphere before words are read.
              </p>
            </div>
            <div className="panel-media split parallax-bg">
              <img src="/images/before.jpg" alt="Before" />
              <img src="/images/after.jpg" className="cinematic" alt="After" />
            </div>
          </article>

          {/* SCENE C */}
          <article className="vision-panel">
            <div className="panel-media parallax-bg">
              <img src="/images/storyboard-ui.png" alt="Narrative UI" />
            </div>
            <div className="panel-copy">
              <h2>The Narrative Arc.</h2>
              <p>
                Your career is a story.  
                Your website should be the adaptation.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
