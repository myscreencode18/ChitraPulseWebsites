function SelfSelect({ stage, setStage }) {
  return (
    <div className="mt-12 md:mt-24 text-center px-4 sm:px-0">
      <p className="font-mono tracking-widest mb-4 md:mb-6 text-sm md:text-base">
        WHAT DESCRIBES YOUR CURRENT STAGE?
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8">
        <button
          onClick={() => setStage("exploring")}
          className="px-4 py-2 sm:px-6 sm:py-3 border border-neutral-700 hover:border-neutral-400 text-sm sm:text-base rounded-md"
        >
          I’m just starting
        </button>

        <button
          onClick={() => setStage("dominate")}
          className="px-4 py-2 sm:px-6 sm:py-3 border border-white hover:bg-white hover:text-black text-sm sm:text-base rounded-md"
        >
          I’m ready to dominate
        </button>
      </div>

      {stage === "exploring" && (
        <p className="mt-4 md:mt-6 text-neutral-400 text-sm md:text-base">
          Start with our free resources.
        </p>
      )}

      {stage === "dominate" && (
        <p className="mt-4 md:mt-6 text-white font-semibold text-sm md:text-base">
          Let’s talk.
        </p>
      )}
    </div>
  );
}

export default SelfSelect;
