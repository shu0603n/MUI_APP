import { Skill } from 'types/param/skill';

export type EmployeeSkill = {
  //[社員スキル履歴]
  employee_skill_id: number; //スキル
  employee_skills: Skill[]; //スキル
};
