import { Cpu, Sun, Wrench, ShieldCheck } from "lucide-react";
import { HoverSlideshow } from "./HoverSlideshow";
import electrical from "@/assets/gallery-electrical.jpg";
import solar from "@/assets/gallery-solar.jpg";
import cctv from "@/assets/gallery-cctv.jpg";
import cabling from "@/assets/gallery-cabling.jpg";
import automation from "@/assets/project-automation.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import power from "@/assets/hero-power.jpg";

const services = [
  {
    icon: Cpu,
    title: "Intelligent Infrastructure",
    desc: "Electrical installations, smart automation and structured cabling — engineered for modern, connected facilities.",
    images: [electrical, automation, cabling],
  },
  {
    icon: Sun,
    title: "Energy Intelligence & Sustainability",
    desc: "Solar PV, hybrid inverters, battery storage and energy audits that cut carbon and operating costs.",
    images: [solar, projectSolar],
  },
  {
    icon: Wrench,
    title: "Asset Assurance",
    desc: "Preventive maintenance, thermographic surveys and compliance inspections that keep systems running.",
    images: [infrastructure, power],
  },
  {
    icon: ShieldCheck,
    title: "Security & Safety",
    desc: "IP CCTV, intrusion detection and remote monitoring tailored to enterprise security requirements.",
    images: [cctv, automation],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-navy py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
            <span className="h-px w-8 bg-spark" /> What We Do
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Service pillars built on{" "}
            <span className="text-foreground">engineering rigor</span>.
          </h2>
          <p className="mt-6 text-base font-bold leading-relaxed text-foreground lg:text-lg">
            Four core disciplines, one integrated team delivering intelligent
            infrastructure, sustainable energy, asset assurance and security
            solutions engineered for long-term performance.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <div className="h-16 w-1 spark-gradient" />
            <div>
              <div className="font-display text-3xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">
                Core engineering disciplines
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-navy-deep transition-all duration-300 hover:-translate-y-1 hover:border-spark/40 hover:shadow-elevated"
              >
                <HoverSlideshow
                  images={s.images}
                  alt={s.title}
                  className="h-40 w-full"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-navy transition-colors group-hover:border-spark group-hover:bg-spark/10">
                      <Icon className="h-5 w-5 text-spark" strokeWidth={1.6} />
                    </div>
                    <span className="font-display text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug" style={{ color: "#d35c3c" }}>
                    {s.title}
                  </h3>
                 <p className="mt-3 text-sm leading-relaxed text-foreground/90 lg:text-base">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-spark opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <span>→</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-spark to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
