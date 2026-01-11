function PressCard({ quote, author }) {
  return (
    <div className="min-w-[300px] sm:min-w-[380px] p-8 border border-neutral-800 rounded-xl hover:border-yellow-400 transition group">
      
      <div className="mb-4 text-yellow-400">
        🎬 🎬 🎬 🎬 🎬
      </div>

      <p className="font-serif text-lg sm:text-xl group-hover:text-yellow-400 transition">
        {quote}
      </p>

      <p className="mt-4 text-sm text-neutral-400 font-mono">
        — {author}
      </p>
    </div>
  );
}
export default PressCard;