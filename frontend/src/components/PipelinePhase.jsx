function PipelinePhase({ side, phase, title, subtitle, icon, copy }) {
  return (
    <div
      className={`
        pipeline-phase relative flex items-center mb-40 opacity-30
       ${side === "left" ? "justify-start pr-4 md:pr-20" : "justify-end pl-4 md:pl-20"}

      `}
    >
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4">
          <span className="phase-icon text-xl">{icon}</span>
          <span className="font-mono text-xs tracking-widest">
            {phase}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-white">
          {title}
        </h3>

        <p className="text-sm uppercase tracking-wider text-neutral-400">
          {subtitle}
        </p>

        <p className="mt-6 leading-relaxed max-w-md">
          {copy}
        </p>
      </div>
    </div>
  );
}
export default PipelinePhase;