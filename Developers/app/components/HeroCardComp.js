import Image from "next/image";
import React from "react";

function HeroCardComp({ lightHeaderText, boldHeaderText, description }) {
  return (
    <div className="w-full lg:w-[600px] p-6 h-full relative">
      <Image src={'/card_3d.png'} width={500} height={500} className='absolute hidden md:block w-full object-contain top-0 left-0 z-0' />
      <Image src={'/card_3d.png'} width={500} height={500} className='absolute block w-full object-contain top-0 left-0 z-0' />
      <p className="capitalize text-4xl lg:text-6xl z-10 relative">{lightHeaderText} </p>
      <p className="text-4xl lg:text-6xl font-bold mt-1 mb-2 capitalize relative">{boldHeaderText}</p>
      <p className="text-lg font-light relative">{description}</p>
    </div>
  );
}

export default HeroCardComp;