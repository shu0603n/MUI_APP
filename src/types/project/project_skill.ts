import { Skill } from 'types/param/skill';

export type ProjectSkill = {
  //[社員スキル履歴]
  project_skill_id: number;
  project_skills: Skill[]; //スキル
};
