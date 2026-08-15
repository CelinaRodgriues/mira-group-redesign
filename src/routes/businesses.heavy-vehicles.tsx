import { createFileRoute } from "@tanstack/react-router";
import { StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import equipment from "@/assets/equipment.jpg";

export const Route = createFileRoute("/businesses/heavy-vehicles")({
  head: () => ({
    meta: [
      { title: "Heavy Vehicles & Equipment — Mira Heavy Vehicles" },
      {
        name: "description",
        content:
          "Trucks, dumpers, loaders, JCBs and forklifts for salt cargo handling, container movement and industrial transportation around Kandla–Mundra.",
      },
      { property: "og:title", content: "Heavy Vehicles & Industrial Equipment — Mira Group" },
      {
        property: "og:description",
        content: "Equipment that keeps industrial operations moving across the Kandla–Mundra region.",
      },
    ],
  }),
  component: HeavyPage,
});

function HeavyPage() {
  return (
    <>
      <VerticalHero
        index="03"
        entity="Mira Heavy Vehicles"
        title="Equipment That Keeps Operations Moving"
        image={equipment}
      >
        <p>
          Industrial operations require dependable equipment for loading, handling, movement and
          cargo support.
        </p>
        <p>
          Mira Group provides heavy vehicles and equipment for salt cargo handling, container
          movement and industrial transportation requirements, particularly around the
          Kandla–Mundra region.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Equipment Portfolio"
        items={[
          "Trucks",
          "Dumpers",
          "Loaders",
          "JCBs",
          "Forklifts",
          "Heavy commercial vehicles",
        ]}
      />

      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            Our equipment can be made available for suitable industrial and contractual
            requirements, helping customers access the resources they need without maintaining an
            entire equipment fleet themselves.
          </p>
        </div>
      </section>

      <VerticalCta />
    </>
  );
}
