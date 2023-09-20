import React from "react";

function OnboardingQuoteCard() {
  return (
    <div className="px-4 pt-4 pb-8 bg-dark rounded-3xl space-y-4">
      <p className="text-white text-xl md:text-3xl font-semibold">
        TalentYard is a <span className="text-accentSecondary">playground</span>{" "}
        for innovative talents
        <div className="flex space-x-2">
          <div className="text-7xl md:text-[92px] text-secondary -mt-2">"</div>
          <p className="font-light text-white text-sm md:text-xl">
            The goal of TalentYard is not just about connecting talents with
            work opportunities, it’s about fostering a community of innovative
            and disruptive minds.
          </p>
        </div>
      </p>
    </div>
  );
}

export default OnboardingQuoteCard;
