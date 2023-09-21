import Image from 'next/image'
import talentyardLogo from '../../../public/talentyard_logo_white.png'

function Footer() {
  return (
    <footer className='flex items-center justify-center w-full px-4 py-3 mt-24 md:px-8 bg-primary h-74'>
      <div className='flex items-center justify-between w-full md:gap-10 lg:gap-32 max-w-7xl'>
        <div className='flex items-center justify-between w-full gap-8 md:w-auto'>
          <Image
            src={talentyardLogo}
            sizes='100vw'
            width={150}
            height={120}
            alt='talentyard logo'
          />
          <span className='text-lg leading-normal text-white'>
            &copy; &nbsp; 2023
          </span>
          <a className='block md:hidden' href='https://www.twitter.com/_talentyard'>
            <Image src='/x-logo-white.png' width={20} height={20} alt='x logo' />
          </a>
        </div>
        <div className='items-center justify-around flex-1 hidden w-full md:flex'>
          <span className='text-base leading-3 text-white'>
            Achieving innovation through collaboration
          </span>
          <a href='https://www.twitter.com/_talentyard'>
            <Image src='/x-logo-white.png' width={20} height={20} alt='x logo' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
