import type { ReactNode } from "react";
import { Reveal } from "./motion-primitives";

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-4">
          <p className="label-tech text-primary">{label}</p>
        </Reveal>
        <div className="lg:col-span-8">
          <Reveal>
            <h1 className="display-lg max-w-4xl">{title}</h1>
          </Reveal>
          {children && (
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="label-tech border-t border-foreground/20 pt-4 text-primary">{children}</p>
  );
}
