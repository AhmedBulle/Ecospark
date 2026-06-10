import electrical from "@/assets/gallery-electrical.jpg";
import solar from "@/assets/gallery-solar.jpg";
import cctv from "@/assets/gallery-cctv.jpg";
import cabling from "@/assets/gallery-cabling.jpg";

const items = [
  { src: electrical, label: "Electrical Installations", span: "lg:col-span-2 lg:row-span-2" },
  { src: solar, label: "Solar Systems", span: "" },
  { src: cctv, label: "Security Systems", span: "" },
  { src: cabling, label: "Industrial Systems", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-navy-deep py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-2xl font-bold uppercase tracking-[0.25em] text-spark">
              <span className="h-px w-8 bg-spark" /> Field Gallery
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Inside our{" "}
              <span className="text-foreground">engineering work</span>.
            </h2>
          </div>
          <p className="max-w-md text-base font-bold text-foreground lg:text-lg">
            A look at the systems we design, install and maintain — from rooftop
            solar to data-grade structured cabling.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.label}
              className={`group relative overflow-hidden rounded-2xl border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_260_/_0.75)] via-[oklch(0.22_0.06_260_/_0.15)] to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
                <span className="font-display text-sm font-semibold uppercase tracking-wider">
                  {it.label}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-transform group-hover:rotate-45">
                  ↗
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
