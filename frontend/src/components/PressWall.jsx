import PressCard from "./PressCard";

function PressWall({ marqueeRef }) {
  return (
    <div className="relative overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex gap-6 sm:gap-10 md:gap-12 w-max will-change-transform"
      >
        <PressCard
          quote="A CINEMATIC MASTERPIECE."
          author="Alex M."
        />
        <PressCard
          quote="Deal flow increased by 40%."
          author="Mark T., Tech Reviewer"
        />
        <PressCard
          quote="The confidence boost I needed."
          author="Elena R., Fashion Stylist"
        />
        <PressCard
          quote="Stop using Linktree. This is the future."
          author="The Daily Creator"
        />

        {/* duplicate for seamless loop */}
        <PressCard
          quote="A CINEMATIC MASTERPIECE."
          author="Alex M."
        />
        <PressCard
          quote="Deal flow increased by 40%."
          author="Mark T., Tech Reviewer"
        />
      </div>
    </div>
  );
}
export default PressWall;