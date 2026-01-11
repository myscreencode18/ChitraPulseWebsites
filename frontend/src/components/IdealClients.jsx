import Role from "./Role";

function IdealClients({ spotlightRef }) {
  return (
    <div className="relative w-full md:w-[70%] min-h-[600px] md:min-h-[600px] overflow-visible">
      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-black z-10" />

      {/* SPOTLIGHT */}
      <div
        ref={spotlightRef}
        className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-white/10 blur-3xl mix-blend-screen z-20 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-30 p-6 md:p-20 space-y-8 md:space-y-16">
        <Role
          title="THE VISIONARY"
          subtitle="YouTubers & Creators"
          desc="You have a community. You need a headquarters."
        />
        <Role
          title="THE AUTEUR"
          subtitle="Filmmakers & Artists"
          desc="Your work is visual. Your site must match the frame rate."
        />
        <Role
          title="THE VOICE"
          subtitle="Speakers & Thought Leaders"
          desc="You sell expertise. We package it as a premium product."
        />
        <Role
          title="THE MOGUL"
          subtitle="High-End Influencers"
          desc="You are pivoting from sponsorships to ownership."
        />
      </div>
    </div>
  );
}

export default IdealClients;
