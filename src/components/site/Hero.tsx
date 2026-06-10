import heroImg from "@/assets/hero-electrical.jpg";
import logo from "@/assets/ecospark-logo.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[70vh] lg:min-h-[85vh] overflow-hidden bg-navy-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="High-voltage electrical substation at dusk"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center sm:object-right opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

      </div>

      {/* Vertical spark bar */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="h-24 w-px bg-gradient-to-b from-transparent to-spark" />
        <span className="h-2 w-2 rounded-full bg-spark animate-spark-pulse" />
        <div className="h-24 w-px bg-gradient-to-t from-transparent to-spark" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] lg:min-h-[85vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-8 inline-flex items-center rounded-full border border-border bg-white/80 px-5 py-2 backdrop-blur shadow-sm">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-spark">
              Powering the Future, Delivering Excellence, Regardless.
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground lg:text-6xl">
            Engineering Reliable Electrical & Energy Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-base font-bold leading-relaxed text-foreground lg:text-lg">
            Professional electrical engineering, renewable energy, automation,
            and infrastructure solutions tailored for modern industries and
            businesses.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full spark-gradient px-7 py-4 text-base font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-[0_20px_50px_-15px_var(--spark)]"
            >
              Explore Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full btn-blue px-7 py-4 text-base font-semibold backdrop-blur transition-transform hover:scale-[1.03]"
            >
              Get Consultation
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-10">
            {[
              { v: "12+", l: "Years of Excellence" },
              { v: "150+", l: "Projects Delivered" },
              { v: "24/7", l: "Engineering Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-spark lg:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
