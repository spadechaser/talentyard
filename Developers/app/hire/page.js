"use client"
import React, { useState } from 'react'
import NavBar from '../components/landingpage/NavBar'
import { lexend } from '../localFont'
import WaitingPage from '../components/hirecomponents/WaitingPage'
import HoverFrameCTA from '../components/landingpage/HoverFrameCTA_comp'

export default function HireTalentPage() {
    const [isSeen, setIsSeen] = useState(false);
    return (
        <main className={`${lexend.className}`}>
            {!isSeen && <HoverFrameCTA closeHoverFrame={() => {
                setShowHoverFrame(false)
                setIsSeen(true)
            }} />}
            <div className="snap-center">
                <NavBar />
            </div>
            <div className='w-full justify-center flex items-start'>
                <WaitingPage />
            </div>
        </main>
    )
}
