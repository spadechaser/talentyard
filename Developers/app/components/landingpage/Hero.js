import Image from 'next/image'
import React from 'react'
import HeroCardComp from './HeroCardComp'
import TalentPromptSearch from './TalentPromptSearch'

export default function Hero() {
    return (
        <div className='relative'>
            <div className="min-h-screen lg:min-h-[500px] w-full bg-contain bg-no-repeat flex flex-col justify-center space-y-12 lg:justify-start items-center relative">
                <Image src={'/bg_hero_marble.jpg'} width={500} height={500} className='absolute hidden md:block w-full object-cover top-0 left-0 z-0 h-[500px]' />
                <Image src={'/bg_hero_marble_mobile.jpg'} width={500} height={500} className='absolute block mt-0 md:hidden w-full object-contain top-0 left-0 z-0' />
                <div className=''></div>
                <div className='z-10 mt-24 flex flex-col lg:space-y-24 items-center h-full absolute'>
                    <div className="my-12 md:mt-0 z-10 relative">
                        <TalentPromptSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
