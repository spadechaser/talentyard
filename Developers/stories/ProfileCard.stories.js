import ProfileCard from '../app/components/landingpage/ProfileCard_comp'
import profileImg from '../public/utba.png'

export default {
  title: 'ProfileCard',
  component: ProfileCard,
}

export const Basic = {
  args: {
    imageUrl: profileImg,
    name: 'utba',
    role: 'web developer',
  },
}

export const WithSkills = {
  args: {
    ...Basic.args,
    skills: [
      { id: 1, language: 'java' },
      { id: 2, language: 'Springboot' },
      { id: 3, language: 'MongoDB' },
    ],
  },
}
