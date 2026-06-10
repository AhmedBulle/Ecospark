import {
  ShieldCheck,
  Award,
  Leaf,
  Cpu,
  Headset,
  BadgeCheck,
  CalendarCheck,
  Users,
  Percent,
} from "lucide-react";
import { HoverSlideshow } from "./HoverSlideshow";
import electrical from "@/assets/gallery-electrical.jpg";
import solar from "@/assets/gallery-solar.jpg";
import cctv from "@/assets/gallery-cctv.jpg";
import cabling from "@/assets/gallery-cabling.jpg";
import automation from "@/assets/project-automation.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import power from "@/assets/hero-power.jpg";

const points = [
  {
    icon: BadgeCheck,
    title: "Professional Expertise",
    desc: "IEE, NICEIC and IEC-trained specialists across every engineering discipline.",
    images: [electrical, power],
    stat: "100%",
    statLabel: "Certified Team",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous QA protocols, documented testing and sign-off on every deliverable.",
    images: [infrastructure, electrical],
    stat: "99%",
    statLabel: "Quality Pass Rate",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    desc: "Renewable-first designs that reduce carbon and operating costs.",
    images: [solar, power],
    stat: "40%",
    statLabel: "Energy Savings",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "Smart automation, IoT monitoring and predictive analytics built-in.",
    images: [automation, cctv, cabling],
    stat: "24/7",
    statLabel: "IoT Monitoring",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Project Delivery",
    desc: "Disciplined planning and milestone tracking keep projects on schedule, every time.",
    images: [infrastructure, cabling],
    stat: "98%",
    statLabel: "On-Time Rate",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Tailored solutions, transparent communication and partnership from brief to handover.",
    images: [automation, electrical],
    stat: "95%",
    statLabel: "Client Satisfaction",
  },
  {
    icon: Award,
    title: "Engineering Standards Compliance",
    desc: "Strict adherence to IEC, NEC and ISO 9001 quality frameworks.",
    images: [infrastructure, cabling, electrical],
    stat: "100%",
    statLabel: "Compliance Rate",
  },
  {
    icon: Headset,
    title: "Reliable Support",
    desc: "24/7 response with documented SLAs and on-site engineering teams.",
    images: [cctv, infrastructure],
    stat: "99.8%",
    statLabel: "Uptime SLA",
  },
];

const stats = [
  { v: "150+", l: "Completed Projects", percent: false },
  { v: "15+", l: "Years of Engineering", percent: false },
  { v: "15+", l: "Certified Engineers", percent: false },
  { v: "99.8%", l: "Uptime Delivered", percent: true },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-16 lg:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-spark/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
            <span className="h-px w-8 bg-spark" /> Why Choose Ecospark
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Trusted by industry leaders for{" "}
            <span className="text-foreground">mission-critical</span> work.
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-navy-deep p-8">
              <div className="flex items-center gap-2">
                <div className="font-display text-4xl font-bold text-spark lg:text-5xl">
                  {s.v}
                </div>
                {s.percent && (
                  <Percent className="h-6 w-6 text-spark" strokeWidth={2} />
                )}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Points */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-border bg-navy-deep transition-colors hover:border-spark/40"
              >
                <HoverSlideshow images={p.images} alt={p.title} className="h-36 w-full" interval={1200} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <Icon className="h-7 w-7 text-spark" strokeWidth={1.6} />
                    <div className="text-right">
                      <div className="font-display text-2xl font-bold text-spark leading-none">
                        {p.stat}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                        {p.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug" style={{ color: "#d35c3c" }}>
                    {p.title}
                  </h3>
                 <p className="mt-3 text-sm leading-relaxed text-foreground/90 lg:text-base">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
