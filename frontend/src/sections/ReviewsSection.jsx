import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ReviewsHeader from "../components/ReviewsHeader";
import FeatureReview from "../components/FeatureReview";
import PressWall from "../components/PressWall";

export default function ReviewsSection() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;

      const tween = gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 30,
      });

      marquee.addEventListener("mouseenter", () => tween.pause());
      marquee.addEventListener("mouseleave", () => tween.resume());
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-black text-white py-40 sm:py-32 md:py-40 lg:py-48 overflow-hidden">
      <ReviewsHeader />
      <FeatureReview />
      <PressWall marqueeRef={marqueeRef} />
    </section>
  );
}
