import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div >
            <div className="h-screen lg:min-h-[750px] w-full bg-contain bg-no-repeat flex flex-col justify-center lg:justify-start items-center relative">
                <Image src={'/bg_hero_marble.jpg'} width={500} height={500} className='absolute hidden md:block w-full object-contain top-0 left-0 z-0' />
                <Image src={'/bg_hero_marble_mobile.jpg'} width={500} height={500} className='absolute block mt-0 md:hidden w-full object-contain top-0 left-0 z-0' />
                <div></div>
                <div className='h-[300px] w-[600px] bg-neutral z-10 mt-24 hidden lg:flex'>
                </div>
                <button className='bg-primary text-neutral p-3 mt-24 lg:mt-0 rounded-default text-xl z-10'>Hire from Talentyard</button>
                
            </div>
        </div>
    )
}
