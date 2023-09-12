import React from "react";

function HeroCardComp({lightHeaderText, boldHeaderText, description}) {
  return (
    <div className="bg-white w-[560px] p-4">
      <p className="capitalize text-6xl">{lightHeaderText} </p>
      <p className="text-6xl font-bold mt-1 mb-2 capitalize">{boldHeaderText}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default HeroCardComp;