import React from 'react'
import JoinWaitlistCard from '../../components/onboardTechies/JoinWaitlistCard_comp'

export default function JoinWaitlists({ userData }) {
  const data = {
    position: "Virtual Assistant",
    name: "Ifeoma",
    email: "Ifeoma@gmail.com",
  }
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <JoinWaitlistCard data={data} />
    </div>
  )
}
4