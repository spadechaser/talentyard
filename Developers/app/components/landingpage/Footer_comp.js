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
          <span className='text-base leading-normal text-white sm:text-lg lg:text-2xl'>
            &copy; &nbsp; 2023
          </span>
        </div>
        <div className='items-center justify-around flex-1 hidden w-full md:flex'>
          <span className='text-base leading-3 text-white lg:text-2xl'>
            Achieving innovation through collaboration
          </span>
          <span className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
            >
              <circle cx='15' cy='15' r='15' fill='#D9D9D9' />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
