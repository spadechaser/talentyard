import { CommandLineIcon, PencilIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function VettedTalentsCategory() {
    return (
        <div className='flex flex-col text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 my-12'>
            <h1 className='text-5xl font-medium'>Leverage Vetted Talents</h1>
            <p className='font-extralight text-center w-full md:w-3/5 mx-auto'>
                With our vetted talents, we reduce the time to hire, and allow businesses focus more on their business operations.
            </p>
            <div className='flex flex-col lg:flex-row items-center shadow-lg space-y-6 lg:space-y-0'>
                <div className='w-full lg:w-1/3 bg-accentSecondary/30 min-h-[300px] border-r-[1px] border-black flex flex-col justify-start items-start p-6 text-left transition ease-in-out delay-100 hover:-translate-y-1 duration-300 hover:shadow-lg hover:cursor-pointer rounded-l-xl'>
                    <CommandLineIcon width={100} height={100} strokeWidth={0.5} />
                    <h3 className='text-2xl font-light'>Developers</h3>
                    <p className='text-base font-extralight'>Nostrud ex cupidatat nulla culpa exercitation tempor elit. Sit ut enim velit excepteur minim dolore qui labore duis. Nisi fugiat ipsum nulla veniam sint excepteur cupidatat laboris ullamco.</p>
                </div>
                <div className='w-full lg:w-1/3 bg-accentSecondary/30 min-h-[300px] border-r-[0.5px] border-black flex flex-col justify-start items-start p-6 text-left transition ease-in-out delay-100 hover:-translate-y-1 duration-300 hover:shadow-lg hover:cursor-pointer'>
                    <PencilIcon width={100} height={100} strokeWidth={0.5} />
                    <h3 className='text-2xl font-extralight'>Designers</h3>
                    <p className='text-base font-extralight'>Nostrud ex cupidatat nulla culpa exercitation tempor elit. Sit ut enim velit excepteur minim dolore qui labore duis. Nisi fugiat ipsum nulla veniam sint excepteur cupidatat laboris ullamco.</p>
                </div>
                <div className='w-full lg:w-1/3 bg-accentSecondary/30 min-h-[300px] border-l-[0.5px] border-black flex flex-col justify-start items-start p-6 text-left transition ease-in-out delay-100 hover:-translate-y-1 duration-300 hover:shadow-lg hover:cursor-pointer rounded-r-xl'>
                    <RectangleGroupIcon width={100} height={100} strokeWidth={0.5} />
                    <h3 className='text-2xl font-extralight'>Talentyard Team</h3>
                    <p className='text-base font-extralight'>Nostrud ex cupidatat nulla culpa exercitation tempor elit. Sit ut enim velit excepteur minim dolore qui labore duis. Nisi fugiat ipsum nulla veniam sint excepteur cupidatat laboris ullamco.</p>
                </div>
            </div>
        </div>
    )
}
