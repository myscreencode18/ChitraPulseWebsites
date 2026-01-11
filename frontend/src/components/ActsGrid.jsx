import ActCard from "./ActCard";

function ActsGrid() {
  return (
    <div className="
      group
      mt-28 max-w-7xl mx-auto 
      grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14
    ">
      <ActCard
        icon="🎬"
        title="ACT I: The Origin Story"
        subtitle="Your Documentary Intro"
        copy="Ditch the boring bio. We craft a narrative-driven landing experience that presents your history, values, and vision as a compelling documentary. Built to establish instant credibility."
         imageSrc="/images/origin-story.jpg"
        focusText="Every brand has a story; we make yours unforgettable."
      />

      <ActCard
        icon="📈"
        title="ACT II: The Media Kit"
        subtitle="Negotiation Power"
        copy="Never email a static PDF again. Your interactive, on-site media kit proves reach, professionalism, and ROI to brand decision-makers."
          imageSrc="/images/media-kit.jpg"
        focusText="Your media kit becomes a conversion tool, not just a document."
   
        
      />

      <ActCard
        icon="🛒"
        title="ACT III: The Offer"
        subtitle="Seamless Commerce"
        copy="Revenue streams are integrated into the brand story. We design high-converting pathways that feel natural, not salesy."
        imageSrc="/images/offer.jpg"
        focusText="Sales should feel like part of the story, not an interruption."
    
      />
    </div>
  );
}
export default ActsGrid;