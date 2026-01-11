import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll(isModalOpen = false) {


useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
    
  });
  window.lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);

  const raf = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  
  return () => {
    gsap.ticker.remove(raf);
    lenis.destroy();
  };
}, []);

 useEffect(() => {
    if (!window.lenis) return;

    if (isModalOpen) {
      window.lenis.stop(); // ⛔ stop smooth scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

    } else {
      window.lenis.start(); // ▶ resume scroll
        document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isModalOpen]);
}
