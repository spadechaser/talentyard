'use client'
import Link from 'next/link'
import { useState } from 'react'

function Referral({ referralLink }) {
  const [copySuccess, setcopySuccess] = useState(null)

  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(text)
    } else {
      document.execCommand('copy', true, text)
    }
  }

  const handleClick = async (text) => {
    try {
      await copyTextToClipboard(text)
      setcopySuccess('copied!')
      setTimeout(() => setcopySuccess(null), 2000)
    } catch (error) {
      setcopySuccess('try again')
      setTimeout(() => setcopySuccess(null), 2000)
    }
  }

  return (
    <div className='p-4 md:p-8 border border-solid space-y-5 md:space-y-8 rounded-3xl border-secondary max-w-[950px] bg-white shadow-[0px_4px_4px_0px_rgba(77,144,219,0.21)] text-black text-base md:text-xl tracking-normal font-light'>
      <div>
        <h2 className='text-2xl font-semibold md:text-3xl'>Refer a friend</h2>
        <p>
          Do you know techies looking for their next opportunity? Refer them to
          our community and you could earn a $150 bonus.
        </p>
      </div>
      <div>
        <h3 className='text-lg font-medium md:text-2xl'>How it works</h3>
        <ul className='pl-6 font-light list-disc list-outside'>
          <li>Give your unique referral link to your friends.</li>
          <li>Any successful referrals earn you a $150 bonus</li>
        </ul>
      </div>
      <div className='flex flex-col space-y-2 font-medium text-black md:space-y-0 md:space-x-6 md:flex-row md:text-lg lg:text-xl'>
        <span className='items-center'>Referral Link</span>
        <div className='flex items-center justify-between flex-1 space-x-1'>
          <Link
            href='#'
            className={`text-left max-w-[200px] truncate md:max-w-none border-solid sm:w-auto text-secondary hover:underline`}
          >
            {referralLink}
          </Link>
          <div className='relative text-sm font-normal md:text-base text-primary'>
            <button
              onClick={() => handleClick(referralLink)}
              className='border-b border-solid border-b-primary'
            >
              Copy link
            </button>
            {copySuccess && (
              <span className='absolute top-[-30px] left-0 bg-neutral py-1 px-2 rounded text-black'>
                {copySuccess}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Referral
