"use client";
import Navbar from "@/components/Header";
import HomePageBottom from "@/components/HeroPageBottom";
export default function Hero() {
  return (
    <>
      <div
        className="w-full h-[100vh] max-w-[375px] max-h-[812px] max-h-[899px] max-w-[1600px]
  bg-[#F1FF66] flex flex-col justify-between pt-[49px] px-[16px]"
      >
        <Navbar />

        <section className="w-full overflow-hidden">
          <div className=" w-full max-w-[375px]  flex flex-col items-start
          justify-start 
          md:justify-center
          md:items-center md:text-center gap-[24px] md:max-w-[1446px]">
            {/* Heading */}
            <h1 className="font-['Radio_Canada_Big'] font-medium text-[#242424] leading-[110%] tracking-[-0.03em] px-3 md:px-0 text-[50px] md:text-[92px] text-start">
              By Europeans, for Europeans
            </h1>

            {/* Description */}
            <p className="font-['Radio_Canada_Big'] font-normal text-[#242424] leading-[140%] min-w-[284px] text-[22px] text-start md:text-center p-4 md:px-0 md:max-w-[834px] md:text-[24px]">
              Privacy and security that europeans need, demand and expect.
              Without giving other nations control over our our data.
            </p>
          </div>
        </section>
      <HomePageBottom />

      </div>
    </>
  );
}
