import React from 'react'
import DataInputSelection from './FormInput'
import { formattedCountries } from '@/app/composables/appdata/countries'
import PasswordInput from './passwordBar'

export default function SignupForm() {
  return (
    <form className='w-full '>
      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6'>
        <div className='w-full lg:w-1/2 space-y-4'>
          <DataInputSelection data={formattedCountries} />
          <DataInputSelection data={formattedCountries} />
          <input name='fullname' id='fullname' type='text' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black' placeholder='Full Name' />
        </div>
        <div className='w-full lg:w-1/2 space-y-4'>
          <input name='fullname' id='fullname' type='emaili' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3 placeholder:font-light placeholder:text-black' placeholder='Email' />
          <PasswordInput />
          <input name='fullname' id='fullname' type='text' className='relative w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 p-3  placeholder:font-light placeholder:text-black' placeholder='Confirm Password' />
        </div>
      </div>
      <div className='w-full mt-8 flex'>
        <button className='w-full md:w-3/4 mx-auto bg-primary hover:bg-dark text-white p-3 rounded-lg hover:shadow-lg shadow-accentSecondary/30 transition delay-150 ease-in-out hover:scale-105 duration-300'>Apply to join TalentYard</button>
      </div>
    </form>
  )
}
