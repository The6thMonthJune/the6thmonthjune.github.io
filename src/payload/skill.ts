import { iSkill } from '../components/Skill/iSkill'

export const skill: iSkill.Payload = {
  list: [
    {
      group: 'Frontend',
      list: ['React', 'React Native', 'TypeScript', 'JavaScript'],
    },
    {
      group: 'Backend',
      list: [
        'Java',
        'Python',
        'Spring Boot',
        'JPA',
        'Mysql',
        'C',
        'C++',
        'Oracle',
      ],
    },
    {
      group: 'Utility',
      list: ['Slack', 'Git', 'Notion', 'Jira', 'Figma'],
    },
    {
      group: 'ETC',
      list: ['Photoshop', 'Premiere Pro']
    },
  ],
}
