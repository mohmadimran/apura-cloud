"use client";

const Item = ({ title, desc }) => (
  <div className="flex flex-col gap-1 min-w-[160px] text-center border-t border-[#242424] py-2">
    <h6 className="font-['Radio_Canada_Big'] font-bold text-[13px] leading-[100%] text-[#242424]">
      {title}
    </h6>
    <p className="font-['Radio_Canada_Big'] font-medium text-[13px] leading-[100%] text-[#242424]">
      {desc}
    </p>
  </div>
);

const HomePageBottom = () => {
  return (
    <section className="w-full overflow-hidden mb-8">
      <div
        className="
          mx-auto
          w-full
          min-w-[375px]
          px-[16px]
          flex flex-row
          md:gap-[50px]
         justify-evenly        "
      >
        {/* Mobile-visible */}
        <Item title="No interference" desc="No third-party interference" />

        <Item title="1st cloud platform" desc="
To allow data control and ownership" />

        {/* Desktop-only */}
        <div className="hidden md:flex gap-[64px]">
          <Item
            title="1st cloud infrastructure"
            desc="
To provide transparency over your data streams"
          />
        </div>
        <div className="hidden md:flex gap-[64px]">
          <Item
            title="Dynamic infrastructure"
            desc="
Cloud, hybrid, or on-prem form"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageBottom;
