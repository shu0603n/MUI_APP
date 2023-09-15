import { Project } from 'types/project/project';

export type EmployeeSkillHistory = {
  experienct_years: number; //経験年数
  project: Project; //プロジェクト名
  people_number: number; //プロジェクト規模
  contact: string;
  process_list: string[]; //工程履歴ID
};
