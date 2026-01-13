import { useEffect, useState, useRef } from "react";
import gsap from "../utils/gsapDefaults";
import { Play } from "lucide-react"
export default function HeroScene() {
 
  const [seconds, setSeconds] = useState(0);
const titleRef = useRef(null);
const curtainRef = useRef(null);
const bgVideoRef = useRef(null);
const titleWrapperRef = useRef(null);
const ctaRef = useRef(null);


useEffect(() => {
  const hasPlayed = sessionStorage.getItem("introPlayed");

  if (hasPlayed) {
    gsap.set(".curtain", { display: "none" });
    return;
  }

  sessionStorage.setItem("introPlayed", "true");

  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
  });

  tl.to(".curtain-panel.left", {
    xPercent: -100,
    duration: 1.4,
  })
    .to(
      ".curtain-panel.right",
      {
        xPercent: 100,
        duration: 1.4,
      },
      "<"
    )
    .set(".curtain", { display: "none" });
}, []);


useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".hero-title .line", {
      y: "120%",
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.15,
    });

    gsap.from(
      ".hero-title-video",
      {
        scale: 1.2,
        duration: 2.5,
        ease: "power3.out",
      },
      0
    );
  });

  return () => ctx.revert();
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

  if ("ontouchstart" in window) return;

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.documentElement.style.setProperty("--x", `${x}%`);
    document.documentElement.style.setProperty("--y", `${y}%`);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

useEffect(() => {
  if ("ontouchstart" in window) return;

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(bgVideoRef.current, {
      x: x * 0.6,
      y: y * 0.6,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(titleWrapperRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

useEffect(() => {
  if ("ontouchstart" in window) return;

  const cta = ctaRef.current;

  const handleMouseMove = (e) => {
    const rect = cta.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(cta, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const reset = () => {
    gsap.to(cta, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  cta.addEventListener("mousemove", handleMouseMove);
  cta.addEventListener("mouseleave", reset);
cta.addEventListener("mouseenter", () => {
  gsap.to(bgVideoRef.current, {
    playbackRate: 1.4,
    duration: 0.6,
    ease: "power2.out",
  });
});

cta.addEventListener("mouseleave", () => {
  gsap.to(bgVideoRef.current, {
    playbackRate: 1,
    duration: 0.6,
    ease: "power2.out",
  });
});

  return () => {
    cta.removeEventListener("mousemove", handleMouseMove);
    cta.removeEventListener("mouseleave", reset);
  };
}, []);

const handleCTAClick = () => {
  gsap.to(window, {
    scrollTo: "#showreel",
    duration: 1.6,
    ease: "power4.inOut",
  });
};


  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-bg-primary)]">
      {/* CURTAIN INTRO */}
<div ref={curtainRef} className="curtain fixed inset-0 z-50 flex">
  <div className="curtain-panel left" />
  <div className="curtain-panel right" />
</div>

      {/* Background Video */}
      <video
       ref={bgVideoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src="/videos/abstract-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* VIEWFINDER UI */}
      <Viewfinder />

      {/* TOP BAR */}
      <div className="absolute top-6 left-6 text-sm tracking-widest">
        ChitraPulse
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-2 text-sm">
        <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
        <span className="tracking-widest">REC</span>
      </div>

      {/* CENTER CONTENT */}
      {/* <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="headline leading-none">
          STOP <span className="accent">AUDITIONING</span>.
          <br />
          START DIRECTING.
        </h1>

        <p className="mt-8 max-w-2xl text-sm md:text-base tracking-wider">
          We build the stage. You are the star.
          <br />
          Helping creators look brand-ready before the brands decide.
        </p>

      
        <div className="mt-16">
          <button className="group relative h-24 w-24 rounded-full border border-[var(--color-accent)] text-xs tracking-widest text-[var(--color-accent)] transition-all duration-500 hover:scale-110">
            START
            <span className="block">THE</span>
            PRODUCTION
          </button>
        </div>
      </div> */}
{/* CENTER CONTENT */}
<div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
  
  {/* MASKED TITLE */}
  <div ref={titleWrapperRef} className="hero-title-wrapper relative">
    <video
      className="hero-title-video"
      src="/videos/abstract-bg.mp4"
      autoPlay
      muted
      loop
      playsInline
    />

    <h1 ref={titleRef}  className="hero-title font-[var(--font-display])">
      <span className="line">STOP AUDITIONING.</span>
      <span className="line">START DIRECTING.</span>
    </h1>
  </div>

  {/* SUBTEXT */}
  <p className="mt-10 max-w-2xl text-sm md:text-base tracking-wider text-[var(--color-text-secondary)]">
    We build the stage. You are the star.
    <br />
    Helping creators look brand-ready before the brands decide.
  </p>

  {/* CTA */}
 {/* CTA */}
{/* <div className=" mt-24 absolute bottom-24 left-1/2 z-20 -translate-x-1/2">
  <div
    ref={ctaRef}
    className="cta-circle group relative flex h-12 w-72 cursor-pointer items-center justify-center rounded-4xl border border-accent text-center"
  >
      <Play className="h-5 w-5" />
    <span className="cta-text text-xs uppercase tracking-widest text-accent transition-all duration-300 group-hover:tracking-[0.3em]">
      Start The Production
    </span>
  </div>
</div> */}

{/* CTA */}
<div ref={ctaRef} onClick={handleCTAClick} className="cta-circle group relative mt-12 flex h-12 w-72 cursor-pointer items-center justify-center rounded-4xl border border-accent text-center">
  


  <span className="cta-text text-xs uppercase tracking-widest text-accent transition-all duration-300 group-hover:tracking-[0.3em]">
    Start The Production
  </span>
</div>

</div>

      {/* BOTTOM UI */}
      <div className="absolute bottom-6 left-6 text-xs tracking-widest text-[var(--color-text-secondary)]">
        00:00:{String(seconds).padStart(2, "0")}:00
      </div>

      <div className="absolute bottom-6 right-6 text-xs tracking-widest text-[var(--color-text-secondary)]">
        SCENE 01 ↓
      </div>

{/* MOUSE SPOTLIGHT */}
<div className="spotlight pointer-events-none absolute inset-0 z-10" />


    </section>
  );
}

function Viewfinder() {
  return (
    <>
      {/* Top Left */}
      <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-white/50" />
      {/* Top Right */}
      <span className="absolute right-4 top-4 h-8 w-8 border-r border-t border-white/50" />
      {/* Bottom Left */}
      <span className="absolute left-4 bottom-4 h-8 w-8 border-l border-b border-white/50" />
      {/* Bottom Right */}
      <span className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-white/50" />
    </>
  );
}
