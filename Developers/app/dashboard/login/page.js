import React from 'react'
import OnboardLeftSideBar from '@/app/components/onboardTechies/OnboardLeftSideBar';
import OnboardMainBar from '@/app/components/onboardTechies/OnboardMainBar';
import { lexend } from '@/app/localFont';

export default function LoginPage() {
    return (
        <main className={`${lexend.className}`}>
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
