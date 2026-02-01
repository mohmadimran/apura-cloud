"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";

const products = [
  {
    title: "Run safely.",
    subTitle: "Apura IaaS.",
    description:
      "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
    btn: "Read more",
    btnText: "Book demo",
  },
  {
   title: "Work privately.",
    subTitle: "Apura Workspace.",
    description:
      "Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy.",
    btn: "Read more",
    btnText: "Book demo",
  },
  {
   title: "Share confidently.",
    subTitle: "Apura Socials.",
    description:
      "Is our introduction of social media applications that are essential to us these days.",
    btn: "Read more",
    btnText: "Book demo",
  },
];

export default function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-[100vh] md:max-w-[1440px] flex flex-col items-center px-4">
      {/* Heading */}
      <div className="w-full md:px-[90px] mb-4 mt-16">
        <h2 className="font-normal text-[24px] md:text-[40px] leading-[160%]">
          Our products
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          w-full
          flex
          md:h-[100vh]
          gap-6
          overflow-x-auto
          overflow-y-hidden
          snap-x snap-mandatory
          px-4
          md:px-[90px]
          md:grid
          md:grid-cols-3
          md:overflow-visible
        "
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="snap-center shrink-0 md:shrink"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <ProductCard
              {...product}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
