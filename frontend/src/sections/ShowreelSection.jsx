// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     id: 1,
//     client: "@alex_fitnesspro",
//     vibe: "NEO-CYBERPUNK",
//     genre: "High-Performance Fitness",
//     result: "🚀 Landed 6-Figure Nike Deal",
//     video: "/videos/project-1.mp4",
//     size: "lg",
//   },
//   {
//     id: 2,
//     client: "@studio_mira",
//     vibe: "MINIMAL-FUTURE",
//     genre: "Creative Studio",
//     result: "300% Higher Media Kit Views",
//     video: "/videos/project-2.mp4",
//     size: "md",
//   },
//   {
//     id: 3,
//     client: "@dailyvlogs",
//     vibe: "VAPOR-VLOGGER",
//     genre: "Lifestyle Creator",
//     result: "YouTube Brand Partnership",
//     video: "/videos/project-3.mp4",
//     size: "sm",
//   },
// ];

// export default function ShowreelSection() {
//   const sectionRef = useRef(null);
//   const sound = new Audio("/sounds/swoosh.mp3");
//   sound.volume = 0.15;

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       /* ACTION FLASH */
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//         },
//       })
//         .fromTo(
//           ".action-text",
//           { opacity: 0, scale: 0.9 },
//           { opacity: 1, scale: 1, duration: 0.2 }
//         )
//         .to(".action-text", {
//           opacity: 0,
//           scale: 1.1,
//           duration: 0.3,
//           delay: 0.2,
//         });

//       /* GRID REVEAL */
//       gsap.from(".showreel-item", {
//         y: 80,
//         opacity: 0,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".showreel-grid",
//           start: "top 80%",
//         },
//       });

//       /* SUBTLE SCROLL DEPTH */
//       gsap.utils.toArray(".showreel-item").forEach((item, i) => {
//         gsap.to(item, {
//           y: i % 2 === 0 ? -40 : 40,
//           scrollTrigger: {
//             trigger: item,
//             start: "top bottom",
//             scrub: true,
//           },
//         });
//       });

//       /* SOUND ON ENTER */
//       gsap.utils.toArray(".showreel-item").forEach((item) => {
//         ScrollTrigger.create({
//           trigger: item,
//           start: "top 70%",
//           once: true,
//           onEnter: () => {
//             if (!window.__soundMuted) {
//               sound.currentTime = 0;
//               sound.play();
//             }
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-black px-4 sm:px-6 py-24 sm:py-32 text-white"
//     >
//       {/* ACTION FLASH */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-50">
//         <h1
//           className="action-text font-serif tracking-wide text-white text-center"
//           style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
//         >
//           ACTION.
//         </h1>
//       </div>

//       {/* HEADER */}
//       <div className="mb-12 sm:mb-20 text-center sm:text-left">
//         <h2 className="text-3xl sm:text-4xl font-serif">🎬 THE DIRECTOR’S CUT</h2>
//         <p className="mt-2 text-neutral-400 text-sm sm:text-base">
//           We don’t just design sites. We launch careers.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="showreel-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className={`showreel-item relative overflow-hidden rounded-xl 
//               ${project.size === "lg"
//                 ? "sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2"
//                 : project.size === "md"
//                 ? "sm:col-span-2 md:col-span-1 md:row-span-2"
//                 : ""
//             }`}
//           >
//             <video
//               src={project.video}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full aspect-[16/9] object-cover showreel-video"
//               onMouseEnter={(e) => (e.currentTarget.playbackRate = 1.35)}
//               onMouseLeave={(e) => (e.currentTarget.playbackRate = 1)}
//             />

//             <div className="absolute inset-0 cinematic-grade pointer-events-none" />

//             {/* OVERLAY */}
//             <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity p-4 sm:p-6 flex flex-col justify-end">
//               <p className="text-xs sm:text-sm text-neutral-400">CLIENT</p>
//               <h3 className="text-sm sm:text-lg">{project.client}</h3>

//               <p className="mt-1 sm:mt-2 font-serif text-lg sm:text-xl">{project.vibe}</p>
//               <p className="text-xs sm:text-sm text-neutral-300">{project.genre}</p>

//               <p className="mt-2 sm:mt-4 text-accent text-sm sm:text-base">{project.result}</p>

//               <span className="mt-2 sm:mt-4 inline-block text-xs sm:text-sm underline">
//                 View Full Production →
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FOOTER NOTE */}
//       <p className="mt-8 sm:mt-16 text-center sm:text-right text-xs text-neutral-500">
//         More productions available upon request.
//       </p>
//     </section>
//   );
// }

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "react-masonry-css"; // Masonry library

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: "@alex_fitnesspro",
    vibe: "NEO-CYBERPUNK",
    genre: "High-Performance Fitness",
    result: "🚀 Landed 6-Figure Nike Deal",
    video: "/videos/project-1.mp4",
    size: "lg",
  },
  {
    id: 2,
    client: "@studio_mira",
    vibe: "MINIMAL-FUTURE",
    genre: "Creative Studio",
    result: "300% Higher Media Kit Views",
    video: "/videos/project-2.mp4",
    size: "md",
  },
  {
    id: 3,
    client: "@dailyvlogs",
    vibe: "VAPOR-VLOGGER",
    genre: "Lifestyle Creator",
    result: "YouTube Brand Partnership",
    video: "/videos/project-3.mp4",
    size: "sm",
  },
  // Add more projects if needed
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
    <section
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

              <span className="mt-2 sm:mt-4 inline-block text-xs sm:text-sm underline">
                View Full Production →
              </span>
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
