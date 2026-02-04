"use client";
import { useState } from "react";
import { achievementsData } from "@/utils/achivementData";

const AchivmentComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // Mobile-only activation
    if (window.innerWidth < 768) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="w-full px-3">
      <h1 className="text-center p-8 md:px-28 text-[43px] md:text-[86px] font-normal">
        Our Road to Creating Data Ownership and Security
      </h1>

      <hr />

      <div className="flex flex-col px-3 py-5">
        {achievementsData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                group
                p-6
                rounded-[16px]
                transition-all
                duration-300
                cursor-pointer
                ${isActive ? "bg-[#F1FF66]" : "bg-transparent"}
                md:hover:bg-[#F1FF66]
              `}
            >
              <div className="flex justify-between items-center">
                {/* Stage */}
                <h2 className="text-[14px] font-semibold text-[#242424]">
                  {item.stage}
                </h2>

                {/* Status */}
                <p className="mt-2 text-sm font-medium text-[#242424]">
                  {isActive ? "Coming soon" : "In Pilot"}
                </p>
              </div>
              {/* Title */}
              <h3 className="text-[22px] font-medium text-[#242424] mt-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] leading-[150%] text-[#242424]/80 mt-3">
                {item.description}
              </p>

              {/* CTA */}
              <div className="w-full flex justify-between items-center mt-6">
                <button
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    px-[22px]
                    py-[12px]
                    rounded-[6px]
                    bg-[#242424]
                    text-white
                    text-sm
                    overflow-hidden
                  "
                >
                  {/* Desktop hover text */}
                  <span className="hidden md:inline transition-opacity duration-200 group-hover:opacity-0">
                    Book demo
                  </span>
                  <span className="hidden md:inline absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    Try it
                  </span>

                  {/* Mobile tap text */}
                  <span className="md:hidden">
                    {isActive ? "Try it" : "Book demo"}
                  </span>
                </button>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              {index !== achievementsData.length - 1 && (
                <hr className="mt-8 border-[#242424]/20" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchivmentComponent;
