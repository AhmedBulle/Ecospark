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

            <div className="mt-8 space-y-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border border-l-4 border-l-spark bg-navy-elevated p-5 transition-colors hover:bg-navy"
                >
                  <p className="text-sm font-bold leading-relaxed text-foreground/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA removed — links exist elsewhere on the page */}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={teamImg}
                alt="Modern residential apartment complex with pool and courtyard"
                className="h-64 w-full object-cover lg:h-72"
              />
            </div>

            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border border-border border-l-4 border-l-spark bg-navy-elevated p-5 transition-colors hover:bg-navy"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-spark">
                  {p.label}
                </div>
                <p className="mt-2 text-sm font-bold leading-relaxed text-foreground/80">
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
