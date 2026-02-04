import EuropeMap from "@/components/youropeMap";
import StarsCircle from "@/components/starCircle";
import Button from "@/components/Button";

export default function AboutEurope() {
  return (
    <section className="bg-[#1f1f1f] rounded-[32px] p-20 flex justify-between items-center max-w-[1200px] mx-auto overflow-hidden my-20 md:my-32 lg:mb-24 lg:mt-64">
      {/* LEFT */}
      <div className="max-w-[520px]">
        <span className="text-[14px] text-[#bdbdbd]">About us</span>
        <h1 className="text-[43px] md:text-[64px] leading-[1.1] text-[#eaff6a] my-6 font-semibold">
          By Europeans,
          <br />
          for Europeans
        </h1>

        <p className="text-[#d0d0d0] max-w-[420px] leading-[1.6] mb-8">
          Our vision is to empower governments, organizations and individuals
          with control and independence in the online realm.
        </p>
        <Button btnText="Read more about us" bgColor="bg-[#eaff6a]" />
      
      </div>

      {/* RIGHT */}
      <div className="relative w-[520px] h-[420px]">
        <EuropeMap className="w-full h-full opacity-[0.9]" />
        <StarsCircle />
      </div>
    </section>
  );
}
