import React from 'react'

const ProposalForm = () => {
  return (
    <div>
        <h1 className="font-serif text-4xl md:text-6xl mb-6">
  🎬 SUBMIT YOUR PROJECT PROPOSAL
</h1>

<p className="max-w-2xl text-neutral-400 mb-16">
  Due to our boutique capacity, we accept a limited number of projects per quarter.
  <br /><br />
  Your brand presence is the price of entry. We only partner with creators who are
  serious about monetizing their influence and are ready for a major visual overhaul.
  Please answer honestly.
</p>
<section className="mb-20">
  <h3 className="section-title">THE DIRECTOR’S DETAILS</h3>

  <RadioGroup
    label="Your Role"
    options={["Creator", "Manager", "Agent", "Brand"]}
  />

  <Input label="Your Name" required />
  <Input label="Email Address" type="email" required />
  <Input label="Main Platform URL" placeholder="YouTube / Instagram / Website" />

  <Select
    label="Audience Size"
    required
    options={[
      "10k – 50k",
      "50k – 250k",
      "250k – 1M+",
      "5M+",
    ]}
  />
</section>
<section className="mb-20">
  <h3 className="section-title">THE PROJECT SCOPE</h3>

  <CheckboxGroup
    label="Primary goal (select up to 3)"
    options={[
      "Attract High-Tier Brand Deals",
      "Launch a Digital Product/Course",
      "Establish Me as a Thought Leader",
      "Consolidate My Platforms",
    ]}
    max={3}
  />

  <Textarea
    label="Biggest problem with your current digital presence"
    minLength={100}
    hint="This tells us how you think about perception."
    required
  />

  <Input
    label="Describe your desired website feel in one word"
    placeholder="AWE / TRUST / LUXURY"
    required
  />
</section>
<section className="mb-20">
  <h3 className="section-title">BUDGET & TIMELINE</h3>

  <Select
    label="Approved Budget Range"
    required
    options={[
      "₹3L – ₹6L",
      "₹6L – ₹10L (Standard Production)",
      "₹10L – ₹15L+ (Full Cinematic Production)",
    ]}
  />

  <RadioGroup
    label="Do you have an urgent deadline?"
    options={[
      "No, we are flexible",
      "Yes, launch needed in 4 weeks (Rush Fee)",
    ]}
  />
</section>
<Checkbox
  required
  label="I understand this studio focuses on perception, narrative, and custom design. This is not a template-based solution."
/>
<button className="proposal-submit">
  SUBMIT TREATMENT FOR REVIEW
</button>

    </div>
  )
}

export default ProposalForm