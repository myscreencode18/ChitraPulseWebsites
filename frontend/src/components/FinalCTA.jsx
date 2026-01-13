function FinalCTA() {
  return (
    <div className="mt-20 md:mt-32 text-center px-4 sm:px-0">
      <h3 className="font-serif text-3xl sm:text-4xl">
        Ready to Greenlight Your Project?
      </h3>

      <div className="relative inline-block mt-12">
        {/* ICON */}
        <span
          className="
            absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full
            border border-yellow-400
            text-yellow-400
            bg-black
            transition-all duration-300
            group-hover:scale-110
          "
        >
          🎬
        </span>

        {/* BUTTON */}
        <button
          className="
            group
            pl-12 pr-8 py-4 sm:pl-16 sm:pr-12 sm:py-5
            rounded-full
            border border-white/20
            text-sm tracking-[0.25em]
            hover:border-yellow-500
            hover:text-yellow-400
            transition-all duration-300
          "
        >
          REQUEST THE FULL TREATMENT
        </button>
      </div>
    </div>
  );
}
export default FinalCTA;