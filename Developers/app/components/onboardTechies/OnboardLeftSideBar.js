import Image from 'next/image'
import React from 'react'

export default function OnboardLeftSideBar() {
    return (
        <div className="flex flex-col w-full min-h-[450px] justify-between lg:h-screen items-start bg-[url('/leftsidebarbackground_mobile.png')] lg:bg-[url('/leftsidebarbackground.png')] bg-center bg-no-repeat bg-cover p-6">
            <Image alt='logo' width={200} height={80} src={"/logo_large_white.png"} />
            <div>
                <h1 className='text-4xl lg:text-5xl text-white w-full leading-snug font-semibold'>Job <span className='text-secondary'>Opportunities</span> in Exciting Projects</h1>
            </div>
            <div>
            </div>
            <div></div>
        </div>
    )
}
