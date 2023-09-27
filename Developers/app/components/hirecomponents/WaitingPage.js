import Image from 'next/image'
import React from 'react'

export default function WaitingPage() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Image alt='Working animation' loading='lazy' width={450} height={450} src={"/still_working.png"} />
            <h1 className='text-3xl text-primary'>Automating Hiring Process...</h1>
            <span className='text-gray-500 font-extralight text-lg text-center'>Please check back in or send an email <a href='mailto:info@talentsyard.com?subject=Hire Talent' target='_blank' rel='noreferrer' className='underline underline-offset-4'>here</a></span>
        </div>
    )
}
