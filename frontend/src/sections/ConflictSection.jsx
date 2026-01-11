import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ConflictSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TIMELINE — Visual conflict
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(".link-overlay", {
        opacity: 1,
        duration: 1,
      }).to(".disconnect", {
        opacity: 1,
        y: -10,
        duration: 0.5,
      });

      // Subtitle-style text reveal
      gsap.from(".conflict-text > *", {
        opacity: 0,
        y: 40,
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Danger word hover (red flag)
      const dangerWords = gsap.utils.toArray(".danger-word");

      dangerWords.forEach((word) => {
        word.addEventListener("mouseenter", () => {
          gsap.fromTo(
            word,
            { backgroundColor: "rgba(255,0,0,0.4)" },
            { backgroundColor: "transparent", duration: 0.4 }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // 🔥 CLEANUP EVERYTHING
  }, []);

  return (
    <section
      ref={sectionRef}
      id="conflict"
      className="relative min-h-screen w-full bg-static overflow-hidden"
    >
      <div className="container mx-auto grid min-h-screen grid-cols-1 gap-12 px-6 py-32 md:grid-cols-2 md:items-center">

        {/* LEFT — TEXT */}
        <div className="conflict-text space-y-8">
          <h2 className="conflict-headline">
            THE PLOT HOLE <br /> IN YOUR BRAND.
          </h2>

          <p className="conflict-body">
            <span className="bold">You have the followers.</span>{" "}
            <span className="bold">You have the content.</span>{" "}
            But do you have the presence?
            <br /><br />
            When a brand clicks your link, they aren’t looking for a list of URLs.
            They’re looking for a reason to pay you premium rates.
            <br /><br />
            A <span className="danger-word">generic template</span> screams{" "}
            <span className="danger-word">amateur</span>.
            <br />
            It’s a bad ending to a great story.
          </p>
        </div>

        {/* RIGHT — PHONE */}
        <div className="relative flex items-center justify-center">
          <div className="iphone-wrapper">
            <img
              src="/images/creator-video.jpg"
              alt="Creator video"
              className="iphone-video"
            />

            <div className="link-overlay">
              <ul>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Merch Store</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="disconnect">⚠</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConflictSection;
