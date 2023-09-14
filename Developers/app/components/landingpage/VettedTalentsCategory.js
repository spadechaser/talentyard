import React from 'react'

export default function VettedTalentsCategory() {
    return (
        <div className='flex flex-col text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 my-12'>
            <h1 className='text-5xl font-medium'>Leverage Vetted Talents</h1>
            <p className='font-light text-center w-full md:w-3/5 mx-auto'>
                With our vetted talents, we reduce the time to hire, and allow businesses focus more on their business operations.
            </p>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-1/3 bg-accentSecondary/30 min-h-[300px] border-r-2 border-black'></div>
                <div className='w-1/3 bg-accentSecondary/30 min-h-[300px] border-r-[1px] border-black'></div>
                <div className='w-1/3 bg-accentSecondary/30 min-h-[300px] border-l-[1px] border-black'></div>
            </div>
        </div>
    )
}
