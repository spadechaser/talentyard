import Image from 'next/image'
import React from 'react'
import HeroCardComp from '../HeroCardComp'

export default function Hero() {
    return (
        <div >
            <div className="min-h-[500px] lg:min-h-[670px] w-full bg-contain bg-no-repeat flex flex-col justify-center space-y-12 lg:justify-start items-center relative">
                <Image src={'/bg_hero_marble.jpg'} width={500} height={500} className='absolute hidden md:block w-full object-contain top-0 left-0 z-0' />
                <Image src={'/bg_hero_marble_mobile.jpg'} width={500} height={200} className='absolute block mt-0 md:hidden w-full object-contain top-0 left-0 z-0' />
                <div className=''></div>
                <div className='z-10 mt-24 flex flex-col lg:space-y-24 items-center h-full absolute'>
                    <div className=''>
                        <HeroCardComp boldHeaderText={"Hire Talent"} lightHeaderText={"Fastest way to"} description={"Nulla mollit esse deserunt velit veniam amet adipisicing."} />
                    </div>
                    <div className='z-10'>
                        <button className='bg-primary text-neutral p-3 mt-24 lg:mt-0 rounded-default text-xl z-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-dark duration-300'>Hire from Talentyard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
