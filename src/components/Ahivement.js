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
                p-3
                my-3
                w-full
                flex
                flex-col md:flex-row md:gap-16
                gap-3
                justify-start
                items-start
                md:justify-between items-start
                rounded-[16px]
                transition-all
                duration-300
                cursor-pointer
                ${isActive ? "bg-[#F1FF66]" : "bg-transparent"}
                md:hover:bg-[#F1FF66]
              `}
            >
              {/* Stage */}
              <h2 className="flex-1 text-[14px] font-semibold text-[#242424]">
                {item.stage}
              </h2>

              {/* Status */}
              {/* <p className="mt-2 text-sm font-medium text-[#242424]">
                  {isActive ? "Coming soon" : "In Pilot"}
                </p> */}
              {/* Title */}
              <h3 className="flex-1 text-[22px] font-medium text-[#242424] mt-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-[16px] leading-[150%] text-[#242424]/80">
                {item.description}
              </p>

              {/* CTA */}
              <div className="flex flex-1 w-full justify-between items-center gap-3">
                <div>
                  {isActive ? (
                    <button className="inline-flex items-center justify-center px-5 py-2 transition-opacity duration-200 group-hover:opacity-100 rounded bg-white text-black text-[18px]">
                      Try It
                    </button>
                  ) : (
                    <button className="bg-transparent inline-flex items-center justify-center px-[22px] py-[12px] border border-black rounded text-sm overflow-hidden">
                      Book Demo
                    </button>
                  )}
                </div>

                <div>
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AchivmentComponent;
