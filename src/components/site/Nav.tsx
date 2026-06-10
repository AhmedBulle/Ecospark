import { useEffect, useState } from "react";
import logo from "@/assets/ecospark-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_-10px_rgba(15,23,42,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ecospark Electricals"
            width={240}
            height={80}
            className="h-14 w-auto lg:h-20 mix-blend-multiply"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
className="text-base font-semibold text-[#262262] transition-colors hover:text-spark"              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full btn-blue px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            Get Consultation
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-4 bg-spark" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-navy-deep/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-navy-elevated hover:text-spark"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full btn-blue px-5 py-3 text-sm font-semibold"
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
