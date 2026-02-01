"use client";
const EmailSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="w-11/12 
          "
      >
        <div
          className="
          w-full
          md:max-w-[1038px]
          md:max-h-[58px]
          flex
          flex-col
          md:flex-row
          justify-center
          md:justify-start
          gap-8
          md:gap-16
          items-center my-[50px]
        "
        >
          {/* Text */}
          <div
            className="min-w-[296px]
          min-h-[60px] flex items-center"
          >
            <p
              className="
            w-full
         font-normal
            text-[28px]
            leading-[110%]
            text-left
          "
            >
              Join the future of data sovereignty
            </p>
          </div>

          {/* Email input */}
          <div
            className="
            min-w-[343px]
            min-h-[49px]
            rounded-[10px]
            bg-[#EBEAE6]
            flex
            items-center
            px-4
          "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              bg-transparent
              outline-none
              font-radio
              text-[14px]
              placeholder:opacity-30
            "
            />
          </div>
        </div>
        <div
          className="w-full h-[80vh]
          flex justify-center items-center
         border-y border-[#242424]/50
"
        >
          <p className="w-full max-w-[343px] max-h-[376px] md:max-w-[1263px] md:max-h-[380px] font-normal text-[43px] md:text-[86px] leading-[110%] tracking-[0%] my-28">
            APURA is an ecosystem dedicated to the privacy and security of their
            users; completely build from scratch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
