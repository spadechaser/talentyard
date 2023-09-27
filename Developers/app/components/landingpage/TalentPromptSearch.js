'use client'
import React, { useEffect, useState } from 'react'

export default function TalentPromptSearch() {
    const [prompt, setPrompt] = useState('')

    const [reveal, setReveal] = useState(false);
    const startcount = Math.random() * 10
    useEffect(() => {
        setTimeout(() => {
            setReveal(true)
        }, startcount * 100);
    }, [startcount]);
    return (
        <div className='flex flex-col text-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4 mb-12'>
            <div></div>
            <h1 className='text-4xl font-bold'>Work with Great Talents all over the World</h1>
            <div className='w-full flex flex-col lg:flex-row space-y-4'>
                <form className='rounded-large flex  w-full h-[80px] shadow-lg bg-neutral px-4 space-y-4'>
                    <div className='flex w-full items-center justify-between '>
                        <input placeholder='What would you like to achieve?' value={prompt} onChange={setPrompt} className='flex w-3/4  lg:rounded-large bg-neutral focus:outline-none p-3 font-light caret-primary' />
                        <button type='submit' className='hidden lg:block bg-black text-neutral hover:bg-gray-700 p-3 rounded-default transition ease-in-out delay-200 hover:scale-110 duration-300 animate-bounce hover:animate-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 -rotate-45">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </button>
                    </div>
                </form>
                <button type='button' className='lg:hidden bg-primary text-neutral hover:bg-dark p-3 rounded-default font-extralight transition ease-in-out delay-100 hover:scale-110 hover:-translate-y-1  duration-300'>Search for Talent</button>
            </div>
            <div className='text-left space-x-2'><span className='font-semibold text-xl'>Prompt:</span><span className='font-light'>Select the right prompt to quick start</span></div>
            <div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-12'>
                <button type='button' onClick={() => {
                    setPrompt("I want a team of 4 developers and 1 designer")
                }} className={reveal ? 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-gray-600 shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-200 opacity-100 hover:-translate-y-1 duration-300 hover:transition hover:duration-700 hover:ease-in-out hover:text-neutral border-[0.2px] border-gray-200' : 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-gray-600 shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-200 opacity-0 hover:-translate-y-1 duration-300 hover:text-neutral border-[0.2px] border-gray-200'}>
                    I want a team of 4 Web developers and 1 designer
                </button>
                <button type='button' onClick={() => {
                    setPrompt(" Vue.js Developer with 6 years of experience and 2years PHP experience")
                }} className={reveal ? 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-gray-600 shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-300 opacity-100 hover:-translate-y-1 duration-300 hover:transition hover:duration-700 hover:ease-in-out hover:text-neutral border-[0.2px] border-gray-200' : 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-gray-600 shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-200 opacity-0 hover:-translate-y-1 duration-300 hover:text-neutral border-[0.2px] border-gray-200'}>
                    Vue.js Developer with 6 years of
                    experience and 2years PHP
                    experience
                </button>
                <button type='button' onClick={() => {
                    setPrompt("Java Developer with 12 years of experience.")
                }} className={reveal ? 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-gray-600 shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-500 opacity-100 hover:-translate-y-1 duration-300 hover:transition hover:duration-700 hover:ease-in-out hover:text-neutral border-[0.2px] border-gray-200' : 'w-full lg:w-1/3 h-[100px] bg-white hover:bg-accentSecondary shadow-lg  flex items-center justify-center font-light rounded-default transition-opacity ease-in delay-200 opacity-0 hover:-translate-y-1 duration-300 hover:text-neutral border-[0.2px] border-gray-200'}>
                    Java Developer with 12 years of experience.
                </button>
            </div>
        </div>
    )
}
