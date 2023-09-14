import { Skill } from 'types/param/skill';

export type EmployeeSkill = {
  employee_skills: Skill[]; //社員スキルID
  experienct_years: number; //経験年数
  project_title: string; //プロジェクト名
  people_number: number; //プロジェクト規模
  cliant: string; //顧客ID
  process_list: string[]; //工程履歴ID
};
