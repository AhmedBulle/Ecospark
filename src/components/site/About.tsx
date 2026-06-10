import teamImg from "@/assets/about-residential.jpg";

const pillars = [
  {
    label: "Our Mission",
    body: "To provide innovative, reliable, and energy-efficient electrical solutions through exceptional service, technical expertise, and an unwavering commitment to safety and environmental responsibility.",
  },
  {
    label: "Our Vision",
    body: "To be the leading partner in electrical innovation, shaping a sustainable energy future that empowers communities and drives industrial growth across Kenya and beyond.",
  },
  {
    label: "Core Values",
    body: "The heart of ECOSPARK ELECTRICALS lies in a set of core values that guide our mission, shape our decisions, and define the quality of service we provide.",
  },
];

const stats = [
  { label: "40% average energy cost reduction" },
  { label: "Zero safety incidents across all project sites" },
  { label: "100% on-time project delivery record" },
];

export function About() {
  return (
    <section id="about" className="relative bg-navy-deep py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
              <span className="h-px w-8 bg-spark" /> About the Company
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Engineering excellence for a connected world
            </h2>
            <p className="mt-6 text-base font-bold leading-relaxed text-foreground/80 lg:text-lg">
              Ecospark Electricals Ltd is a multidisciplinary engineering company
              delivering end-to-end electrical, renewable, and automation
              solutions. Our team of certified engineers combines deep technical
              expertise with a commitment to safety and sustainability — building
              infrastructure that powers tomorrow.
            </p>

            {/* Stats with background image */}
            <div className="mt-8 relative overflow-hidden rounded-2xl">
              <img
                src={teamImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#262262]/50" />
              <div className="relative z-10 space-y-3 p-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/20 border-l-4 border-l-[#d35c3c] bg-[#262262]/40 p-5 backdrop-blur-sm transition-colors hover:bg-[#262262]/60"
                  >
                    <p className="text-sm font-bold leading-relaxed text-white">
  {s.label}
</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — white cards with brand blue text */}
          <div className="space-y-4">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border-l-4 border-l-spark bg-white p-5 shadow-sm transition-colors hover:bg-gray-50"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-spark">
                  {p.label}
                </div>
                <p className="mt-2 text-sm font-bold leading-relaxed text-[#262262]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}