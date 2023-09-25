import React from 'react'
import SignupForm from './SignupForm'

export default function OnboardMainBar() {
    return (
        <div className='flex flex-col justify-start lg:justify-center h-screen items-center p-3 lg:p-6'>
            <div className='flex flex-col w-full mx-auto text-center font-extralight space-y-1 p-3'>
                <h1 className='text-4xl font-light'>Apply to Join</h1>
                <h1 className='text-4xl font-light'>TalentYard Community</h1>
                <div >
                    <p className='font-light'>TalentYard is community of talented developers, designers, analysts, and assistants.</p>
                    <p className='font-light'>We connect you with exciting projects and opportunities across the globe.</p>
                </div>
            </div>
            <div className='mt-12 w-full'>
                <SignupForm />
            </div>
        </div>
    )
}
