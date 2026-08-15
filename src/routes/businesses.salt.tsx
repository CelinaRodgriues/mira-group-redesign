import { createFileRoute } from "@tanstack/react-router";
import { DetailList, StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import salt from "@/assets/salt.jpg";

export const Route = createFileRoute("/businesses/salt")({
  head: () => ({
    meta: [
      { title: "Salt & Minerals — Mira Salt Works, Kutch" },
      {
        name: "description",
        content:
          "Raw, industrial, refined free-flow, iodized and edible salt from Kutch-based salt operations at Adesar, Rapar.",
      },
      { property: "og:title", content: "Sea Salt & Industrial Salt — Mira Salt Works" },
      {
        property: "og:description",
        content: "Quality salt from the heart of Kutch for food and industrial applications.",
      },
    ],
  }),
  component: SaltPage,
});

function SaltPage() {
  return (
    <>
      <VerticalHero
        index="05"
        entity="Mira Salt Works"
        title="Quality Salt from the Heart of Kutch"
        image={salt}
      >
        <p>
          Mira's salt operations began in 1997 with the objective of manufacturing and supplying
          edible and industrial salt.
        </p>
        <p>
          Operating from Kutch, one of India's important salt-producing regions, Mira Salt Works
          serves customers requiring different salt grades for food and industrial applications.
        </p>
      </VerticalHero>

      <DetailList
        label="Our Salt Portfolio"
        items={[
          {
            t: "Raw Salt",
            d: "Natural salt suitable for further processing and industrial applications.",
          },
          {
            t: "Industrial Salt",
            d: "Salt grades developed for diverse industrial requirements.",
          },
          {
            t: "Refined Free Flow Salt",
            d: "Refined salt designed for applications requiring consistent quality and free-flowing characteristics.",
          },
          {
            t: "Iodized Salt",
            d: "Processed salt supplied for edible applications with iodine requirements.",
          },
          {
            t: "Edible Salt",
            d: "Food-grade salt available in different specifications and packaging formats.",
          },
        ]}
      />

      <section className="border-b border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12">
          <p className="label-tech border-t border-foreground/20 pt-4 text-primary lg:col-span-4">
            Packaging
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            Depending on the product and customer requirement, packaging options can include bulk
            and retail-oriented formats.
          </p>
        </div>
      </section>

      <StrengthBand
        label="Our Focus"
        items={[
          "Consistent quality",
          "Multiple grades",
          "Reliable supply",
          "Customer-specific specifications",
          "Domestic and export-oriented requirements",
        ]}
      />

      <VerticalCta />
    </>
  );
}
