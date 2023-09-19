import React from 'react'
import { Lexend } from 'next/font/google'
import OnboardLeftSideBar from '../components/onboardTechies/OnboardLeftSideBar'
import OnboardMainBar from '../components/onboardTechies/OnboardMainBar';
const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function OnboardTechiePage() {
  return (
    <main className={lexend.className}>
      <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12'>
        <div className='w-full lg:w-[36%]'>
          <OnboardLeftSideBar />
        </div>
        <div className='w-full lg:w-[64%]'>
          <OnboardMainBar />
        </div>
      </div>
    </main>

  )
}
