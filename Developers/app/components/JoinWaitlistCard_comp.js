"use client";

const info = {
  title: "Join Waitlist",

  message: `We’re not currently onboarding {position}. You can join
  the waitlist, or delete your account for now.`,
};

export default function JoinWaitlistCard() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-[612px] h-[400px] bg-slate-100 rounded-3xl mx-auto overflow-hidden">
        <h1 className="font-lexend text-[52px] text-center mt-[35.5px] font-semibold text-slate-950">
          {info["title"]}
        </h1>
        <div className="flex items-center justify-center mt-[33px]">
          <p className="text-center text-slate-950 font-lexend text-[21px] font-extralight max-w-[557px]">
            {info["message"]}
          </p>
        </div>
        <div className="mt-[84px] flex items-center justify-center space-x-[46px] mb-[35.5px]">
          <button className="px-6 py-2 border border-red-500 rounded-xl font-lexend text-lg font-semibold hover:bg-accentSecondary hover:text-slate-100 hover:border-none">
            Delete Account
          </button>
          <button className="px-6 py-2 font-lexend text-lg font-semibold bg-blue-500 text-slate-100 rounded-xl hover:opacity-70 hover:drop-shadow-xl">
            {info["title"]}
          </button>
        </div>
      </div>
    </div>
  );
}
