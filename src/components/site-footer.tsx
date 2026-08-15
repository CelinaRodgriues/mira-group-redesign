import { Link } from "@tanstack/react-router";
import { businessLinks } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell border-b border-ink-border py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src="/mira-logo.png" alt="Mira Group" className="h-14 w-14 object-contain" />
            <h2 className="mt-6 font-display text-3xl">MIRA GROUP</h2>
            <p className="mt-2 text-ink-foreground/70">Moving Industries. Delivering Reliability.</p>
            <p className="mt-6 max-w-sm text-sm text-ink-foreground/50">
              Specialized Transportation | Water Supply | Heavy Vehicles | Oil Transportation | Sea
              Salt
            </p>
          </div>

          <div>
            <p className="label-tech text-primary">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/businesses", label: "Our Businesses" },
                { to: "/infrastructure", label: "Infrastructure" },
                { to: "/quality-safety", label: "Quality & Safety" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tech text-primary">Business Verticals</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {businessLinks.map((b) => (
                <li key={b.to}>
                  <Link to={b.to} className="transition-colors hover:text-primary">
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tech text-primary">Contact</p>
            <address className="mt-6 space-y-3 text-sm not-italic text-ink-foreground/70">
              <p>
                207, TM Tower, Near UCO Bank,
                <br />
                Gandhidham, Kutch, Gujarat, India
              </p>
              <p>
                <a href="tel:+912836223377" className="hover:text-primary">
                  +91 2836 223377
                </a>
              </p>
              <p>
                <a href="tel:+919925225555" className="hover:text-primary">
                  +91 99252 25555
                </a>{" "}
                /{" "}
                <a href="tel:+919909459999" className="hover:text-primary">
                  +91 99094 59999
                </a>
              </p>
              <p>
                <a href="mailto:logistics@miragroup.in" className="hover:text-primary">
                  logistics@miragroup.in
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 py-6 label-tech text-ink-foreground/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Mira Group of Companies</span>
        <span>Gandhidham — Kutch — India</span>
      </div>
    </footer>
  );
}
