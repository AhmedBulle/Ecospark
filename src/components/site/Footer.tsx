const cols = [
  {
    title: "Company",
    links: ["About", "Mission & Vision", "Careers", "News"],
  },
  {
    title: "Services",
    links: [
      "Intelligent Infrastructure",
      "Energy Intelligence & Sustainability",
      "Asset Assurance",
      "Security & Safety",
    ],
  },
  {
    title: "Resources",
    links: ["Projects", "Gallery", "Compliance", "Support"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#262262] border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-md font-display text-base font-semibold leading-snug lg:text-lg">
              We specialize in comprehensive electrical designs and
              installation services tailored to meet the diverse needs of
              residential, commercial, and industrial projects.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "X", "f", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full border text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ color: "#ffffff", borderColor: "#ffffff" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug" style={{ color: "#d35c3c" }}>
                    {c.title}
                  </h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm font-semibold transition-opacity hover:opacity-80"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
          <h3 className="mt-6 font-display text-2xl font-semibold leading-snug" style={{ color: "#d35c3c" }}>
                    Contact
                  </h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold">
              <li>+254 700 000 000</li>
              <li>info@ecospark.co</li>
              <li>Industrial Area, Nairobi</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs font-semibold sm:flex-row sm:items-center" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
          <div>© 2025 Ecospark Electricals Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
