import { iInfo } from '../components/info/iInfo'
import { EnvelopeFill, Github, TelephoneFill } from 'react-bootstrap-icons'

const info: iInfo.Payload = {
  profileImage: process.env.PUBLIC_URL + '/profile.jpg',
  name: '정준',
  engName: 'Chung Chwoon',
  contact: [
    {
      content: '010-9141-6322',
      icon: <TelephoneFill />,
    },
    {
      content: 'ttkd16@naver.com',
      icon: <EnvelopeFill />,
      link: 'mailto:ttkd16@naver.com',
    },
    {
      content: 'https://github.com/The6thMonthJun',
      icon: <Github />,
      link: 'https://github.com/The6thMonthJun',
    },
  ],
  // phoneNumber: '010-6342-3413',
  // githubUrl: 'https://github.com/shim99887',
  // email: 'shim99887@gmail.com'
}

export default info
