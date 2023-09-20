import { MockSkill, MockSkill2, MockSkill3, MockSkill4, MockSkill5, MockSkill6 } from 'mock/param/skill';
import { ProjectSkill } from 'types/project/project_skill';

export const MockProjectSkill: ProjectSkill = {
  //[案件]
  project_skill_id: 1,
  project_skills: [MockSkill, MockSkill2]
};
export const MockProjectSkill2: ProjectSkill = {
  //[案件]
  project_skill_id: 2,
  project_skills: [MockSkill3, MockSkill4]
};
export const MockProjectSkill3: ProjectSkill = {
  //[案件]
  project_skill_id: 3,
  project_skills: [MockSkill5, MockSkill6]
};
