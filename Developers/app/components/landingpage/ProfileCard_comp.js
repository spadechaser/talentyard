"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ProfileCard = ({ imageUrl, name, role, skills }) => {
  const [reveal, setReveal] = useState(false);
  const startcount = Math.random() * 10
  useEffect(() => {
    setTimeout(() => {
      setReveal(true)
    }, startcount * 100);
  }, [startcount]);
  return (
    <div className={reveal ? 'w-60 h-[300px] bg-white shadow-[-4px_4px_9px_0px_rgba(0,0,0,0.25)] space-y-2 flex flex-col hover:cursor-pointer delay-50 ease-in hover:scale-105 duration-300 transition-opacity opacity-100' : 'w-60 h-[300px] bg-white shadow-[-4px_4px_9px_0px_rgba(0,0,0,0.25)] space-y-2 flex flex-col hover:cursor-pointer delay-150 ease-out hover:scale-105 duration-300 transition-opacity opacity-0'}>
      <div className='relative object-contain w-60 h-[203px] bg-[#D9D9D9] flex-1'>
        <Image src={imageUrl} fill className=' object-right object-cover' alt={`${name} profile image`} />
        <span className='inline-block w-0 h-0 border-b-[42px] border-b-white border-r-[42px] border-r-transparent bottom-0 left-0 z-50 absolute' />
      </div>
      <div
        className={`flex flex-col ${skills.length > 0 ? 'pb-4' : 'pb-7'
          } px-3 leading-normal space-y-[2px]`}
      >
        <div className='flex justify-between w-full relative items-center'>
          <span className='capitalize text-[24px] text-primary font-semibold'>
            {name}
          </span>
          <div className='animate-ping w-4 flex items-center justify-center h-4 rounded-full bg-primary/30 bg-opacity-50'>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </div>
        </div>
        <span className='text-base font-medium capitalize text-[#333]'>
          {role}
        </span>
        <div className='space-x-1 w-60'>
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <span key={index} className='text-xs font-light capitalize'>
                {skill}
                {index < skills.length - 1 && ','}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
