import solar from "@/assets/project-solar.jpg";
import automation from "@/assets/project-automation.jpg";
import infra from "@/assets/project-infrastructure.jpg";

const projects: {
  title: string;
  desc: string;
  image: string;
  meta: string;
}[] = [
  {
    title: "Residential Sector",
    desc: "Safe, modern electrical, solar and smart-home installations for houses, apartments and estates.",
    image: infra,
    meta: "Homes · Apartments · Estates",
  },
  {
    title: "Commercial Sector",
    desc: "End-to-end electrical, lighting, CCTV and structured cabling for offices, retail and hospitality spaces.",
    image: automation,
    meta: "Offices · Retail · Hospitality",
  },
  {
    title: "Industrial Sector",
    desc: "Heavy-duty power distribution, automation and renewable systems engineered for plants and industrial facilities.",
    image: solar,
    meta: "Plants · Factories · Utilities",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-navy-deep py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
              <span className="h-px w-8 bg-spark" /> Featured Work
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Projects that{" "}
              <span className="text-foreground">power industries</span>.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-spark hover:gap-3 transition-all"
          >
            Discuss your project <span>→</span>
          </a>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-navy transition-all hover:border-spark/30 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_260_/_0.55)] via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.meta}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug" style={{ color: "#d35c3c" }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed lg:text-base" style={{ color: "#262262" }}>
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-spark transition-all group-hover:gap-3">
                  View case study <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}