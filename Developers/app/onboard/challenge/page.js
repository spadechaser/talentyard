import ChallengePathCard from '@/app/components/onboardTechies/ChallengePathCard';
import { Lexend } from 'next/font/google'
import React from 'react'
const lexend = Lexend({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function OnboardChallengePath() {
    return (
        <div className={lexend.className}>
            <div className='flex flex-col h-screen w-full justify-center items-center space-y-12'>
                <div className='w-full mx-auto'>
                    <h1 className='font-sans text-4xl text-center font-bold'>Choose Evaluation Path</h1>
                </div>
                <div className='flex flex-col lg:flex-row max-w-6xl mx-auto space-y-12 lg:space-y-0 lg:space-x-12 items-center lg:justify-center'>
                    <div className='w-full lg:w-1/3'>
                        <ChallengePathCard title={"Self-Supervised Tests"} description={`Take a tests that evaluates both your technical competence and your people’s skills.`} />
                    </div>
                    <div className='w-full lg:w-1/3'>
                        <ChallengePathCard title={"Take home Project"} description={`You’re given a tasks to complete within 48hours. The goal is to test your ability to work in a team, overall work competence and managing deadlines.`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
