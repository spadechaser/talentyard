import { Lexend } from 'next/font/google'
import React from 'react'
const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export default function ChallengePathCard({ title, description, onButtonPressed }) {
    return (
        <div className={lexend.className}>
            <button type='button' onClick={onButtonPressed} className='p-3 border-2 border-blue-200 rounded-[24px] shadow-lg shadow-blue-100 bg-white flex flex-col justify-start items-center hover:cursor-pointer hover:bg-blue-100 space-y-4 min-h-[180px] focus:shadow-sm active:shadow-sm '>
                <span className='text-2xl font-light'>{title}</span>
                <span className='text-base text-center font-extralight'>{description}</span>
            </button>
        </div>
    )
}
