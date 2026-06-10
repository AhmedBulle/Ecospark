import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const channels = [
  { icon: Phone, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
  { icon: Mail, label: "Email", value: "info@ecospark.co", href: "mailto:info@ecospark.co" },
  { icon: MapPin, label: "Office", value: "Industrial Area, Nairobi", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-16 lg:py-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-ember/15 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-spark/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
              <span className="h-px w-8 bg-spark" /> Let's Build
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Ready to power your{" "}
              <span className="text-foreground">next project</span>?
            </h2>
            <h3 className="mt-6 font-display text-2xl font-bold text-spark">
              Our Engineering Services
            </h3>
            <p className="mt-3 max-w-xl text-base font-bold leading-relaxed text-foreground lg:text-lg">
              We offer expert support across renewable energy, power systems,
              and facility management — covering feasibility studies, design,
              installation, energy audits, system optimisation, renovations,
              and maintenance for residential, commercial, and industrial
              clients.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-spark lg:text-xl">
              Get in touch with our team today.
            </p>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full btn-blue px-7 py-4 text-base font-semibold transition-transform hover:scale-[1.03] shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid gap-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-navy-deep/70 p-6 backdrop-blur transition-all hover:border-spark/40 hover:bg-navy-elevated"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-navy transition-colors group-hover:border-spark group-hover:bg-spark/10">
                    <Icon className="h-6 w-6 text-spark" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">
                      {c.value}
                    </div>
                  </div>
                  <span className="text-spark opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
