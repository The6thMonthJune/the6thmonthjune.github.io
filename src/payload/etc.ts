import { iEtc } from '../components/Etc/iEtc'

const germany: iEtc.Etc = {
  startedAt: '2003.04',
  endedAt: '2011.3',
  title: '독일 거주',
  description: '독일 현지 학교에서 초등학교 1학년 ~ 중학교 2학년 과정 수료',
}

const opic: iEtc.Etc = {
  startedAt: '2025.04',
  title: 'Opic(영어)',
  description: 'Intermediate High 취득',
}

const toeicSpeaking: iEtc.Etc = {
  startedAt: '2024.07',
  title: 'Toeic Speaking(영어)',
  description: 'Advanced Low 취득',
}

export const etc: iEtc.Payload = {
  list: [germany, opic, toeicSpeaking],
}
