function Role({ title, subtitle, desc }) {
  return (
    <div className="group cursor-pointer">
      <h3 className="font-serif text-4xl md:text-5xl transition-all duration-300 group-hover:text-yellow-400">
        {title}
      </h3>

      <p className="mt-2 uppercase tracking-widest text-sm text-neutral-400">
        {subtitle}
      </p>

      <p className="mt-4 max-w-xl text-neutral-300">
        {desc}
      </p>
    </div>
  );
}
export default Role;