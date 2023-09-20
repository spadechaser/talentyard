"use client"
import { Lexend } from 'next/font/google'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function JoinWaitlistCard({ data }) {
  const router = useRouter()
  useEffect(() => {
    if (data === undefined) {
      router.push("/onboard")
    }
  }, [data])
  return (
    <div className={lexend.className}>
      <div className="flex flex-col items-center justify-center mx-auto p-6 lg:p-0">
        <div className="border-2 border-secondary shadow-lg shadow-secondary/25 rounded-3xl mx-auto overflow-hidden pb-12">
          <h1 className=" text-[52px] text-center mt-[35.5px] font-semibold text-slate-950">
            Join Waitlist
          </h1>
          <div className="flex items-center justify-center mt-4">
            <p className="text-center text-slate-950  text-[21px] font-extralight max-w-[557px]">
              {`We’re`} not currently onboarding <span className='text-secondary font-semibold'>{data.position}</span>. You can join
              the waitlist, or delete your account for now.
            </p>
          </div>
          <div className="mt-16 flex flex-col lg:flex-row  items-center justify-center space-y-4 lg:space-y-0 lg:space-x-[46px]">
            <button className="px-6 py-2 border border-red-500 rounded-xl  text-lg font-light hover:bg-accentSecondary/40">
              Delete Account
            </button>
            <button className="px-6 py-2 text-lg font-light bg-primary text-slate-100 rounded-xl hover:drop-shadow-xl hover:bg-dark">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
