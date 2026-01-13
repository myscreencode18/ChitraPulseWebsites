

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "react-masonry-css"; // Masonry library

gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     id: 1,
//     client: "@alex_fitnesspro",
//     vibe: "NEO-CYBERPUNK",
//     genre: "High-Performance Fitness",
//     result: "🚀 Landed 6-Figure Nike Deal",
//     video: "/videos/project-1.mov",
//     size: "lg",
//   },
//   {
//     id: 2,
//     client: "@studio_mira",
//     vibe: "MINIMAL-FUTURE",
//     genre: "Creative Studio",
//     result: "300% Higher Media Kit Views",
//     video: "/videos/project-2.mov",
//     size: "md",
//   },
//   {
//     id: 3,
//     client: "@dailyvlogs",
//     vibe: "VAPOR-VLOGGER",
//     genre: "Lifestyle Creator",
//     result: "YouTube Brand Partnership",
//     video: "/videos/project-3.mov",
//     size: "sm",
//   },
//   // Add more projects if needed
// ];
const projects = [
  {
    id: 1,
    client: "@anjali.style",
    vibe: "EDITORIAL-LUXE",
    genre: "Editorial Fashion Identity",
    result: "Brand Collabs + Paid Campaign Ready",
    video: "/videos/project-1.mov",
    size: "lg",
    liveUrl: "https://aanya-style.vercel.app",
  },
  {
    id: 2,
    client: "@roamwithaarav",
    vibe: "CINEMATIC-WANDER",
    genre: "Cinematic Travel Brand",
    result: "Turned Reels into Bookable Brand Deals",
    video: "/videos/project-2.mov",
    size: "md",
    liveUrl: "https://travelinfluencersitefrontend.onrender.com/",
  },
  {
    id: 3,
    client: "Rahul Gupta",
    vibe: "DEV × CINEMA",
    genre: "Creator-to-Brand System",
    result: "Positioned for High-Value Creative Clients",
    video: "/videos/project-3.mov",
    size: "sm",
    liveUrl: "https://devframe-client.onrender.com/",
  },
];

export default function ShowreelSection() {
  const sectionRef = useRef(null);
  const sound = new Audio("/sounds/swoosh.mp3");
  sound.volume = 0.15;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ACTION FLASH */
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      })
        .fromTo(
          ".action-text",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.2 }
        )
        .to(".action-text", {
          opacity: 0,
          scale: 1.1,
          duration: 0.3,
          delay: 0.2,
        });

      /* GRID ITEMS ANIMATION */
      gsap.utils.toArray(".showreel-item").forEach((item, i) => {
        // Slight parallax + subtle 3D rotation
    
gsap.to(item, {
  y: i % 2 === 0 ? 0 : 0, // start neutral
  rotateY: 0,
  rotateX: 0,
  scrollTrigger: {
    trigger: item,
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      item.style.transform = `translateY(${progress * (i % 2 === 0 ? -20 : 20)}px)
                              rotateY(${progress * (i % 2 === 0 ? 2 : -2)}deg)
                              rotateX(${progress * (i % 3 === 0 ? 2 : -2)}deg)`;
    },
  },
});

        // Sound on enter
        ScrollTrigger.create({
          trigger: item,
          start: "top 70%",
          once: true,
          onEnter: () => {
            if (!window.__soundMuted) {
              sound.currentTime = 0;
              sound.play();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section id="showreel"
      ref={sectionRef}
      className="relative min-h-screen bg-black px-4 sm:px-6 py-24 sm:py-32 text-white"
    >
      {/* ACTION FLASH */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-50">
        <h1
          className="action-text font-serif tracking-wide text-center"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
        >
          ACTION.
        </h1>
      </div>

      {/* HEADER */}
      <div className="mb-12 sm:mb-20 text-left">
        <h2 className="text-3xl sm:text-4xl font-serif">🎬 THE DIRECTOR’S CUT</h2>
        <p className="mt-2 text-neutral-400 text-sm sm:text-base">
          We don’t just design sites. We launch careers.
        </p>
      </div>

      {/* MASONRY GRID */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="showreel-grid flex w-auto gap-4 sm:gap-6"
        columnClassName="showreel-column"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`showreel-item relative overflow-hidden rounded-xl mb-4 
              ${project.size === "lg" ? "h-[450px] sm:h-[500px]" :
                project.size === "md" ? "h-[300px] sm:h-[350px]" :
                "h-[200px] sm:h-[250px]"
              }`}
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover showreel-video"
              onMouseEnter={(e) => (e.currentTarget.playbackRate = 1.35)}
              onMouseLeave={(e) => (e.currentTarget.playbackRate = 1)}
            />

            {/* Cinematic color grade */}
            <div className="absolute inset-0 cinematic-grade pointer-events-none" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity p-4 sm:p-6 flex flex-col justify-end">
              <p className="text-xs sm:text-sm text-neutral-400">CLIENT</p>
              <h3 className="text-sm sm:text-lg font-bold">{project.client}</h3>

              <p className="mt-1 sm:mt-2 font-serif text-lg sm:text-xl font-bold">{project.vibe}</p>
              <p className="text-xs sm:text-sm text-neutral-300">{project.genre}</p>

              <p className="mt-2 sm:mt-4 text-accent text-sm sm:text-base">{project.result}</p>
<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-2 sm:mt-4 inline-flex items-center gap-1 
             text-xs sm:text-sm underline hover:text-accent transition-all"
>
  View Full Production
  <span className="inline-block transition-transform group-hover:translate-x-1">
    →
  </span>
</a>


            </div>
          </div>
        ))}
      </Masonry>

      {/* FOOTER NOTE */}
      <p className="mt-8 sm:mt-16 text-right text-xs text-neutral-500">
        More productions available upon request.
      </p>
    </section>
  );
}
