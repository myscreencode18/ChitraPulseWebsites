function ActCard({ icon, title, subtitle, copy, imageSrc,
  imageAlt = "",
  focusText, }) {
  return (
    <div
      className="
      script-act
    relative rounded-2xl
   p-6 md:p-10
    transition-all duration-500
    group-hover:opacity-40
    hover:!opacity-100
    hover:-translate-y-3
      "
    >
      <span className="text-3xl">{icon}</span>

      <h3 className="mt-6 font-serif text-2xl">
        {title}
      </h3>
          {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="mt-4 w-full rounded-xl object-cover"
        />
      )}


      <p className="mt-1 text-sm uppercase tracking-wider text-neutral-500">
        {subtitle}
      </p>

      <p className="mt-6 text-neutral-700 leading-relaxed">
        {copy}
      </p>
    {focusText && (
  <p className="mt-4 text-sm text-neutral-600">
    <strong>Focus:</strong> {focusText}
  </p>
)}
    </div>
  );
}

export default ActCard;