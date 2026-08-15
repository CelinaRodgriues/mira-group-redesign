import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal, RevealImage } from "@/components/motion-primitives";

export function VerticalHero({
  index,
  entity,
  title,
  image,
  children,
}: {
  index: string;
  entity: string;
  title: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <span className="numeral text-foreground/12">{index}</span>
            <p className="mt-6 label-tech text-primary">{entity}</p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="display-lg max-w-4xl">{title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <RevealImage src={image} alt={title} className="h-[60vh] w-full" priority />
    </>
  );
}

export function DetailList({
  label,
  items,
}: {
  label: string;
  items: { t: string; d?: string }[];
}) {
  return (
    <section className="border-b border-border">
      <div className="shell grid gap-12 py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="label-tech border-t border-foreground/20 pt-4 text-primary">{label}</p>
        </Reveal>
        <div className="lg:col-span-7 lg:col-start-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-8">
                <span className="font-display text-lg text-foreground/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl">{it.t}</h2>
                  {it.d && <p className="mt-3 text-muted-foreground">{it.d}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StrengthBand({ label, title, items }: { label: string; title?: string; items: string[] }) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="label-tech text-primary">{label}</p>
          {title && <h2 className="display-lg mt-6">{title}</h2>}
        </Reveal>
        <ul className="grid gap-x-12 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
          {items.map((x, i) => (
            <Reveal key={x} delay={i * 0.05}>
              <li className="border-t border-ink-border py-4 text-ink-foreground/70">{x}</li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VerticalCta() {
  return (
    <section className="border-b border-border">
      <div className="shell flex flex-col justify-between gap-8 py-20 lg:flex-row lg:items-end">
        <Reveal>
          <h2 className="display-lg max-w-2xl">Let's Discuss Your Requirement</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="label-tech rule-link text-primary">
            Get in Touch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
