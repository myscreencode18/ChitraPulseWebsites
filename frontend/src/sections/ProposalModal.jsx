import { useEffect } from "react";
import { gsap } from "gsap";
import ProposalForm from "./ProposalForm";

export default function ProposalModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".proposal-modal",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/70">
      <div className="proposal-modal w-full h-full bg-black text-white overflow-y-auto px-6 md:px-24 py-20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xs tracking-widest opacity-60 hover:opacity-100"
        >
          EXIT PROPOSAL
        </button>

        <ProposalForm />
      </div>
    </div>
  );
}
