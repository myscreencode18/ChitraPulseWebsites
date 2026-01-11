function FeatureReview() {
  return (
    <div className="container mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* VIDEO */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 aspect-w-16 aspect-h-9">
          <video
            src="/videos/testimonial-sarah.mp4"
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />
          
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center hover:scale-110 transition">
              ▶
            </div>
          </button>
        </div>

        {/* QUOTE */}
        <div>
          <p className="font-serif text-4xl leading-tight">
            “I walked into the meeting with Netflix, pulled up the site,
            and the energy changed instantly.
            <span className="text-yellow-400">
              They didn’t see an influencer anymore.
              They saw a production house.”
            </span>
          </p>

          <p className="mt-6 text-neutral-400 font-mono">
            — SARAH J., Documentary Filmmaker
          </p>
        </div>
      </div>
    </div>
  );
}
export default FeatureReview;