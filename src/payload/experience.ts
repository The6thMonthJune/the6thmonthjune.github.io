import { iExperience } from '../components/Experience/iExperience'

const WeSee: iExperience.Experience = {
  startedAt: '2023.12',
  endedAt: '2024.06',
  company: '위씨',
  description: '(인턴) 프론트엔드 & 앱 기획/개발자',
  techStack: ['TypeScript', 'React', 'React Native', 'Firebase'],
  contribute: [
    '당사 메인 서비스 "국시플래너(앱)"의 v2 기획/개발 참여',
    '"국시플래너"의 간호조무사 서비스 출시를 위한 기획, 데스크리서치, 가설 설립, 사용자 테스트 실행',
    'React Native와 Typescript를 사용한 개발 v2 및 출시',
    'React와 Typescript를 사용한 "국시플래너" 랜딩페이지 제작',
    '랜딩페이지에 대한 검색 엔진 최적화(SEO) 진행',
    'Python과 OpenAI API를 사용한 프롬프트 엔지니어링 도중 인턴기간 종료',
  ],
}

export const experience: iExperience.Payload = {
  list: [WeSee],
}
