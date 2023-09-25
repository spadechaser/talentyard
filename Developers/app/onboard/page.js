import React from 'react'

import OnboardLeftSideBar from '../components/onboardTechies/OnboardLeftSideBar'
import OnboardMainBar from '../components/onboardTechies/OnboardMainBar';
import { lexend } from "../localFont";

export default function OnboardTechiePage() {
  return (
    <main className={`${lexend.variable}`}>
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
