import Image from 'next/image'

const ProfileCard = ({ imageUrl, name, role, skills }) => {
  return (
    <article className='w-60 h-[300px] bg-white shadow-[-4px_4px_9px_0px_rgba(0,0,0,0.25)] space-y-2 flex flex-col'>
      <div className='relative object-contain w-60 h-[203px] bg-[#D9D9D9] flex-1'>
        <Image src={imageUrl} fill alt={`${name} profile image`} />
        <span className='inline-block w-0 h-0 border-b-[42px] border-b-white border-r-[42px] border-r-transparent bottom-0 left-0 z-50 absolute' />
      </div>
      <div
        className={`flex flex-col ${
          skills ? 'pb-4' : 'pb-7'
        } px-3 leading-normal space-y-[2px]`}
      >
        <span className='capitalize text-2.5xl text-primary font-semibold'>
          {name}
        </span>
        <span className='text-base font-medium capitalize text-[#333]'>
          {role}
        </span>
        <div className='space-x-1'>
          {skills &&
            skills.map((skill, index) => (
              <span key={skill.id} className='text-xs font-light capitalize'>
                {skill.language}
                {index < skills.length - 1 && ','}
              </span>
            ))}
        </div>
      </div>
    </article>
  )
}

export default ProfileCard
