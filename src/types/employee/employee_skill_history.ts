import { Process } from 'types/param/process';
import { Project } from 'types/project/project';

export type EmployeeSkillHistory = {
  employee_skill_history_id: number;
  experienct_years: number; //経験年数
  project: Project; //プロジェクト名
  people_number: number; //プロジェクト規模
  contact: string;
  process_list: Process[]; //工程履歴ID
};
