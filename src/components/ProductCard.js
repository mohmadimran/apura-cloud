"use client";

import Button from "./Button";

export default function ProductCard({
  title,
  subTitle,
  description,
  btnText,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        group
        max-w-[320px]
        w-full
        md:max-w-[460px]
        h-[569px]
        md:h-[672px]
        rounded-[16px]
        md:rounded-[40px]
        px-6
        py-16
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        cursor-pointer

        ${active ? "bg-[#F1FF66]" : "bg-[#EBEAE6]"}
        md:hover:bg-[#F1FF66]
      `}
    >
      <div>
        <h3 className="text-[28px] md:text-[30px] font-[400] text-[#406354]">
          {title}
        </h3>
        <h4 className="text-[28px] my-4 md:text-[30px] font-[600] text-[#242424]">
          {subTitle}
        </h4>
        <p className="text-[16px] leading-[150%]">{description}</p>
      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4">
        {/* <button
        className="
            inline-flex items-center justify-center
            gap-[10px]
            px-[22px] py-[12px]
            rounded-[6px]
            bg-white
            text-sm font-medium
          "
      >
        Read more
      </button> */}
        <Button
          btnText="Read more"
          bgColor="bg-white"
          textColor="text-black"
        />
        <Button btnText={btnText} bgColor="bg-[#242424]" textColor="text-white"/>
        {/* <button
          className={`inline-flex items-center justify-center
            gap-[10px]
            px-[22px] py-[12px]
            rounded-[6px]
            bg-[#242424]
            text-white
            text-sm font-medium
            transition-all duration-300

          ${
            active
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }

          md:group-hover:opacity-100
          md:group-hover:pointer-events-auto`}
        >
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
