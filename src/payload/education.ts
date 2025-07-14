import { iEducation } from '../components/education/iEducation'

const ssafy: iEducation.Education = {
  startedAt: '2022.08',
  endedAt: '2023.02',
  title: '엔코아 플레이데이터 - 빅데이터 기반 지능형 SW 및 MLOps 개발자 양성과정 수료(960시간)',
  description:
    'Python, Javascript, React, Java, Spring Boot, 알고리즘에 대한 기본적인 지식 및 실무 프로젝트 3회 수행',
}

const college: iEducation.Education = {
  startedAt: '2015.03',
  endedAt: '2025.02',
  title: '한동대학교',
  description: 'Global Entrepreneurship/컴퓨터공학과(복수전공) 졸업',
}

const highSchool: iEducation.Education = {
  startedAt: '2012.03',
  endedAt: '2015.02',
  title: '포곡고등학교',
  description: '인문계 졸업',
}

export const education: iEducation.Payload = {
  list: [ssafy, college, highSchool],
}
