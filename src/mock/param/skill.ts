import { Skill } from 'types/param/skill';
import { MockTechnic, MockTechnic2 } from './technic';

export const MockSkill: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'JAVA' //スキル名
};
export const MockSkill2: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'PHP' //スキル名
};
export const MockSkill3: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'TypeScript' //スキル名
};
export const MockSkill4: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'JavaScript' //スキル名
};
export const MockSkill5: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'C' //スキル名
};
export const MockSkill6: Skill = {
  technic: MockTechnic2.technic_name, //技術区分ID
  skill_name: 'React' //スキル名
};

export const MockSkillAll = [MockSkill, MockSkill2, MockSkill3, MockSkill4, MockSkill5];
