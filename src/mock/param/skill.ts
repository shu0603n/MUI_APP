import { Skill } from 'types/param/skill';
import { MockTechnic, MockTechnic2 } from './technic';

export const MockSkill: Skill = {
  skill_id: 1, //スキルID
  technic: MockTechnic, //技術区分ID
  skill_name: 'JAVA' //スキル名
};
export const MockSkill2: Skill = {
  skill_id: 2, //スキルID
  technic: MockTechnic, //技術区分ID
  skill_name: 'PHP' //スキル名
};
export const MockSkill3: Skill = {
  skill_id: 3, //スキルID
  technic: MockTechnic, //技術区分ID
  skill_name: 'TypeScript' //スキル名
};
export const MockSkill4: Skill = {
  skill_id: 4, //スキルID
  technic: MockTechnic, //技術区分ID
  skill_name: 'JavaScript' //スキル名
};
export const MockSkill5: Skill = {
  skill_id: 5, //スキルID
  technic: MockTechnic, //技術区分ID
  skill_name: 'C' //スキル名
};
export const MockSkill6: Skill = {
  skill_id: 6, //スキルID
  technic: MockTechnic2, //技術区分ID
  skill_name: 'React' //スキル名
};

export const MockSkillAll = [MockSkill, MockSkill2, MockSkill3, MockSkill4, MockSkill5];
