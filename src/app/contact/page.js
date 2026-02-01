"use client";
export default function HomePage() {
  return (
    <>
      <div className="bg-[#EBEAE6] w-full flex flex-col justify-center items-center py-20 px-3">
        <p className="text-start font-normal text-[28px] leading-[110%]">
          Become a supporter and help us on our Journey{" "}
        </p>
        <button className="max-w-[343px] h-[50px] rounded-[6px] border border-solid px-[22px] py-[12px] opacity-100 my-10">
          Read more about how to
        </button>
      </div>
      {/* email section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#F1FF66] px-3 md:px-28 py-20">
       <div>
         <h2 className="text-start text-[28px] fount-normal">Subscribe to our Newsletter</h2>
        <p className="my-10 text-start text-[16px]">
          If you want to follow our progress on developing what Europeans want
          and need, done by Europeans.
        </p>
       </div>
       <div>
         <input
          type="text"
          placeholder="Enter your email"
          className="
    w-[343px]
    h-[55px]
    rounded-[10px]
    border
    border-black
    px-4
    text-[16px]
    outline-none
  "
        />
       </div>
      </div>
    </>
  );
}
