"use client";

import Image from "next/image";

const frame = [
  {
    id: 1,
    src: "/assets/images/icons/hover-frame-cta1.png",
    height: 42,
    width: 42,
  },
  {
    id: 2,
    src: "/assets/images/icons/hover-frame-cta2.png",
    height: 42,
    width: 42,
  },
  {
    id: 3,
    src: "/assets/images/icons/hover-frame-cta3.png",
    height: 42,
    width: 42,
  },
];
export default function HoverFrameCTA() {
  return (
    <div className="relative flex flex-col mx-auto rounded-3xl w-[360px] h-[417px] drop-shadow-2xl hover:opacity-70">
      <div className="relative [background:linear-gradient(180deg,_#4d90db,_#0066c5_23.27%,_#004b9b)] rounded-t-3xl flex-1">
        <h1 className="mt-[51px] text-center text-slate-100 text-[34px] font-bold font-lexend my-auto">
          Join Talentyard
        </h1>
        <figure className="mt-[28px] flex items-center justify-center space-x-[34px] object-contain pointer-events-none mb-[40px]">
          {frame.map((value) => (
            <Image
              src={value.src}
              height={value.height}
              width={value.width}
              alt="icon"
            />
          ))}
        </figure>
      </div>
      <div className="bg-slate-100 flex-1 rounded-b-3xl">
        <div className=" flex items-center justify-center mx-5 mt-[37px]">
          <p className="text-center text-base font-light font-lexend">
            Join the elite techies, and get access to job opportunities that fit
            your profile and skill set.
          </p>
        </div>
        <div className="flex items-center justify-center mt-[37px] mb-[28px]">
          <button className="px-6 py-2 bg-[#0066C5] text-slate-100 font-lexend rounded-xl text-center hover:opacity-70">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}
