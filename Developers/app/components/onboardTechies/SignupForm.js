"use client"
import React, { useState } from 'react'
import DataInputSelection from './FormInput'
import { formattedCountries } from '@/app/composables/appdata/countries'
import PasswordInput from './passwordBar'
import { positions } from '@/app/composables/appdata/positions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    location: "",
    position: "",
    fullname: '',
    email: ""
  });
  const submitForm = (e) => {
    e.preventDefault()
    router.push("/onboard/challenge")
  }
  return (
    <form onSubmit={submitForm} className='w-full '>
      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6'>
        <div className='w-full lg:w-1/2 space-y-4'>
          <DataInputSelection data={formattedCountries} />
          <DataInputSelection data={positions} />
          <input name='fullname' id='fullname' type='text' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black' placeholder='Full Name' />
        </div>
        <div className='w-full lg:w-1/2 space-y-4'>
          <input name='email' id='email' type='emaili' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black' placeholder='Email' />
          <PasswordInput />
          <input name='confirmPassword' id='confirmPassword' type='text' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3  placeholder:font-light placeholder:text-black' placeholder='Confirm Password' />
        </div>
      </div>
      <div className='w-full mt-8 flex flex-col items-start justify-center'>
        <button type="submit" className='w-full md:w-3/4 bg-primary hover:bg-dark text-white p-3 rounded-lg hover:shadow-lg shadow-accentSecondary/30 transition delay-150 ease-in-out hover:scale-105 duration-300'>Apply to join TalentYard</button>
        <span className="font-extralight">{"Don't"} have an account?<Link href={"/dashboard/login"} className="ml-1 text-primary hover:underline-offset-4 hover:underline">Login</Link></span>
      </div>
    </form>
  )
}
