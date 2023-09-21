import React from 'react'

export default function TalentPromptSearch() {
    return (
        <div className='flex flex-col text-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4 mb-12'>
            <div></div>
            <h1 className='text-4xl font-bold'>Work with Great Talents all over the World</h1>
            <div className='w-full flex flex-col lg:flex-row space-y-4'>
                <form className='rounded-large flex  w-full h-[80px] shadow-lg bg-neutral px-4 space-y-4'>
                    <div className='flex w-full items-center justify-between '>
                        <input placeholder='What would you like to achieve?' className='flex w-3/4  lg:rounded-large bg-neutral focus:outline-none p-3 font-light' />
                        <button type='submit' className='hidden lg:block bg-accent text-neutral hover:bg-accentSecondary p-3 rounded-default'>Search for Talent</button>
                    </div>
                </form>
                <button type='button' className='lg:hidden bg-primary text-neutral hover:bg-dark p-3 rounded-default font-extralight transition ease-in-out delay-100 hover:scale-110 hover:-translate-y-1  duration-300'>Search for Talent</button>
            </div>
            <div className='text-left space-x-2'><span className='font-semibold text-xl'>Prompt:</span><span className='font-light'>To help you get what you need</span></div>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-12'>
                <button className='w-full lg:w-1/3 h-[100px] bg-white hover:bg-accentSecondary shadow-lg  flex items-center justify-center font-light rounded-default transition ease-in-out delay-200 hover:-translate-y-1 duration-300 hover:text-neutral border-[0.2px] border-gray-200'>
                    I want a team of 4 developers and 1 designer
                </button>
                <button className='w-full lg:w-1/3 h-[100px] bg-white hover:bg-accentSecondary shadow-lg border-[0.2px] border-gray-200 flex items-center justify-center font-light rounded-default transition ease-in-out delay-200 hover:-translate-y-1 duration-300 hover:text-neutral'>
                    Vue.js Developer with 6 years of
                    experience and 2years PHP
                    experience
                </button>
                <button className='w-full lg:w-1/3 h-[100px] bg-white hover:bg-accentSecondary shadow-lg  border-[0.2px] border-gray-200 flex items-center justify-center font-light rounded-default transition ease-in-out delay-200 hover:-translate-y-1 duration-300 hover:text-neutral'>
                    Java Developer with 12 years of
                    experience.
                </button>
            </div>
        </div>
    )
}
