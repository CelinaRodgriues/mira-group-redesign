import { createFileRoute } from "@tanstack/react-router";
import { StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import oil from "@/assets/oil.jpg";

export const Route = createFileRoute("/businesses/oil")({
  head: () => ({
    meta: [
      { title: "Oil Transportation — Mira Edible Oil Transport" },
      {
        name: "description",
        content:
          "Dedicated tanker transportation for edible and non-edible oils with safe handling, product integrity and timely delivery.",
      },
      { property: "og:title", content: "Dedicated Liquid Oil Transportation — Mira Group" },
      {
        property: "og:description",
        content: "Reliable transportation for edible and non-edible oils.",
      },
    ],
  }),
  component: OilPage,
});

function OilPage() {
  return (
    <>
      <VerticalHero
        index="04"
        entity="Mira Edible Oil Transport"
        title="Reliable Transportation for Edible & Non-Edible Oils"
        image={oil}
      >
        <p>
          Mira Group provides specialized transportation services for edible and non-edible oils
          using dedicated and contracted tanker capacity.
        </p>
        <p>
          Our operations are designed around safe handling, timely transportation and maintaining
          the integrity of liquid cargo throughout the movement.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Our Strengths"
        items={[
          "Dedicated tanker capacity",
          "Experienced operational team",
          "Reliable scheduling",
          "Safe cargo handling",
          "Customer-focused transportation",
        ]}
      />

      <VerticalCta />
    </>
  );
}
