import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;
export default function ProjectProposalForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);



  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    platform: "",
    audienceSize: "",
    goals: [],
    problem: "",
    feeling: "",
    budget: "",
    deadline: "",
    agreed: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "goals") {
      setFormData((prev) => ({
        ...prev,
        goals: prev.goals.includes(value)
          ? prev.goals.filter((g) => g !== value)
          : [...prev.goals, value],
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();

   setError(null); 

if (formData.budget === "Not Yet Defined") {
   setError("Please select an approved budget range to continue.");
  return;
}
 setLoading(true);


  try {
    const res = await fetch(
      `${API_URL}/api/proposals`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Submission failed");
    }

    setSubmitted(true);
  } catch (err) {
    console.error("Proposal submit error:", err);
     setError("Submission failed. Please try again.");
  }finally {
    setLoading(false);
  }
};


  /* ----------------------------------
     CONFIRMATION STATE
  ---------------------------------- */
  if (submitted) {
    return (
     <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
      <div className="h-[100dvh] overflow-y-auto px-6">
        <div className="mx-auto w-full max-w-[720px] 2xl:max-w-[840px] py-16 sm:py-24 text-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
            PROPOSAL RECEIVED.
          </h2>
          <p className="text-white/70 leading-relaxed">
            Your submission is now in review.  
            We evaluate proposals every 24–48 hours.  
            If aligned, you’ll receive a personal invitation for a discovery call.
          </p>

          <button
            onClick={onClose}
            className="mt-12 text-sm tracking-widest text-white/50 hover:text-white transition"
          >
            CLOSE
          </button>
        </div>
        </div>
      </div>
    );
  }

  /* ----------------------------------
     FORM
  ---------------------------------- */
  return (
<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl "  onWheel={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()} style={{ overscrollBehavior: "contain" }}>

    <button
  onClick={onClose}
  aria-label="Close"
  className="modal-close"
>
  ✕
</button>

  <div className="h-full overflow-y-auto overscroll-contain px-6">
    <div className="mx-auto w-full max-w-[720px] py-24 text-white">
        {/* HEADER */}
        <header className="mb-20">
          <h2 className=" text-white text-4xl md:text-5xl font-serif mb-6">
            🎬 SUBMIT YOUR PROJECT PROPOSAL
          </h2>
          <p className="text-white/70 max-w-xl">
            Due to our boutique capacity, we accept a limited number of projects.
            This submission determines alignment.
          </p>
        </header>

        <form onSubmit={handleSubmit} className={`space-y-20 ${loading ? "pointer-events-none" : ""}`}>

          {/* SECTION 1 */}
          <section>
            <h3 className="text-xl font-semibold mb-8">
              THE DIRECTOR’S DETAILS
            </h3>

            <div className="space-y-10">
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="input-cinematic"
              >
                <option value="">Your Role</option>
                <option>Creator</option>
                <option>Manager</option>
                <option>Agent</option>
                <option>Brand</option>
              </select>

              <input
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input-cinematic"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input-cinematic"
              />

              <input
                type="url"
                name="platform"
                required
                placeholder="Primary Platform URL"
                value={formData.platform}
                onChange={handleChange}
                className="input-cinematic"
              />

              <select
                name="audienceSize"
                required
                value={formData.audienceSize}
                onChange={handleChange}
                className="input-cinematic"
              >
                <option value="">Audience Size</option>
                <option>10k–50k</option>
                <option>50k–250k</option>
                <option>250k–1M</option>
                <option>1M-5M+</option>
              </select>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* SECTION 2 */}
          <section>
            <h3 className="text-xl font-semibold mb-8">
              PROJECT SCOPE
            </h3>

            <div className="space-y-10">
              <div className="space-y-3">
                {[
                  "Attract High-Tier Brand Deals",
                  "Launch and Sell a Digital Product",
                  "Establish Thought Leadership",
                  "Consolidate Platforms",
                ].map((goal) => (
                  <label key={goal} className="flex items-center gap-4 text-white/80">
                    <input
                      type="checkbox"
                      name="goals"
                      value={goal}
                      onChange={handleChange}
                      checked={formData.goals.includes(goal)}
                      className="accent-yellow-500 scale-125"
                    />
                    {goal}
                  </label>
                ))}
              </div>

              <textarea
                name="problem"
                minLength={100}
                required
                placeholder="Describe your biggest problem with your current digital presence."
                value={formData.problem}
                onChange={handleChange}
                className="input-cinematic h-32 resize-none"
              />

              <input
                name="feeling"
                required
                placeholder="If your website could feel like one word…"
                value={formData.feeling}
                onChange={handleChange}
                className="input-cinematic"
              />
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* SECTION 3 */}
          <section>
            <h3 className="text-xl font-semibold mb-8">
              BUDGET & TIMELINE
            </h3>

            <div className="space-y-10">
              <select
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="input-cinematic"
              >
                <option value="">Approved Budget Range</option>
                <option>$3,000 – $6,000</option>
                <option>$6,000 – $10,000 (Standard)</option>
                <option>$10,000 – $15,000+ (Full Production)</option>
                <option>Not Yet Defined</option>
              </select>

              <div className="flex flex-col gap-4">
                {["No, we are flexible", "Yes, launch within 4 weeks"].map(
                  (label) => (
                    <label key={label} className="flex items-center gap-4 text-white/80">
                      <input
                        type="radio"
                        name="deadline"
                        value={label}
                        onChange={handleChange}
                        checked={formData.deadline === label}
                        className="accent-yellow-500 scale-125"
                        required
                      />
                      {label}
                    </label>
                  )
                )}
              </div>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* AGREEMENT */}
          <label className="flex items-start gap-4 text-white/70 text-sm">
            <input
              type="checkbox"
              name="agreed"
              required
              checked={formData.agreed}
              onChange={handleChange}
              className="accent-yellow-500 scale-125 mt-1"
            />
            I understand this is a custom, narrative-driven production —
            not a template-based service.
          </label>

          {/* CTA */}
       <button
  type="submit"
    disabled={loading}
  className="
    w-full
    mt-8 sm:mt-20
    py-2 sm:py-6
    text-sm sm:text-lg
    tracking-wide sm:tracking-widest
    cta-final
    hover:scale-[1.03]
    transition-transform duration-300
  "
>
   {loading ? "SENDING TREATMENT…" : "SUBMIT TREATMENT FOR REVIEW"}
</button>
{error && (
  <p className="text-red-400 text-sm mt-4 text-center">
    {error}
  </p>
)}


        </form>
      </div>
      </div>
    </div>
  );
}
