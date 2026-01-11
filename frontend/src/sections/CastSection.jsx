import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CastHeader from "../components/CastHeader";
import IdealClients from "../components/IdealClients";
import NotForYou from "../components/NotForYou";
import SelfSelect from "../components/SelfSelect";

export default function CastSection() {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const [stage, setStage] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;

    const moveSpotlight = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlight, {
        x: x - 150,
        y: y - 150,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", moveSpotlight);
    return () => section.removeEventListener("mousemove", moveSpotlight);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <CastHeader />

      <div className="relative flex flex-col md:flex-row mt-24 md:mt-24">
        <IdealClients spotlightRef={spotlightRef} />
        <NotForYou />
      </div>

      <SelfSelect stage={stage} setStage={setStage} />
    </section>
  );
}
