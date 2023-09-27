"use client";

import {
  CommandLineIcon,
  PencilIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

const frame = [
  {
    id: 1,
    src: <CommandLineIcon />,
    height: 42,
    width: 42,
  },
  {
    id: 2,
    src: <PencilIcon />,
    height: 42,
    width: 42,
  },
  {
    id: 3,
    src: <RectangleGroupIcon />,
    height: 42,
    width: 42,
  },
];

export default function HoverFrameCTA({closeHoverFrame}) {
  return (
    <div className="hidden lg:flex flex-col mx-auto fixed bottom-16 right-16 rounded-3xl w-[320px] h-[390px] drop-shadow-2xl  z-50">
      <div className="relative [background:linear-gradient(180deg,_#4d90db,_#0066c5_23.27%,_#004b9b)] rounded-t-3xl flex-1">
        <button type="button" onClick={closeHoverFrame} className="flex w-full justify-end items-center p-6 pb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white hover:text-accentSecondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </button>
        <h1 className=" text-center text-slate-100 text-[34px] font-bold font-lexend my-auto">
          Join Talentyard
        </h1>
        <div className="mt-[10px] flex items-center justify-center space-x-[34px] object-contain mb-[10px]">
          {frame.map((value) => (
            <figure
              style={{ height: `${value.height}px`, width: `${value.width}px` }}
              className="text-slate-100"
              key={value.id}
            >
              {value.src}
            </figure>
          ))}
        </div>
      </div>
      <div className="bg-slate-100 flex-1 rounded-b-3xl">
        <div className=" flex items-center justify-center mx-5 mt-[27px]">
          <p className="text-center text-base font-light font-lexend">
            Join the talent playground, and get access to work opportunities that fit
            your expertise and work mode.
          </p>
        </div>
        <div className="flex items-center justify-center mt-[37px] mb-[28px]">
          <a href="/onboard" className="px-6 py-2 bg-primary text-slate-100 font-lexend rounded-xl text-center hover:bg-dark">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}
