import React from "react";

function OnboardingQuoteCard() {
  return (
    <div className="px-4 pt-4 pb-8 bg-dark rounded-3xl flex flex-col h-full">
      <div className="text-white text-xl md:text-3xl font-semibold space-y-4">
        <span>TalentYard is a <span className="text-accentSecondary">playground</span>{" "}
          for innovative talents.</span>
        <div className="flex space-x-2">
          <div className="text-7xl md:text-[92px] text-secondary -mt-2">"</div>
          <p className="font-light text-white text-sm md:text-lg">
            The goal of TalentYard is not just about connecting talents with
            work opportunities, {`it’s`} about fostering a community of innovative
            and disruptive minds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuoteCard;
