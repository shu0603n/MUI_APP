import { MockSkillArray } from 'mock/param/skill';
import { EmployeeSkill } from 'types/employee/employee_skill';

export const MockEmployeeSkill: EmployeeSkill = {
  employee_skills: MockSkillArray, //社員スキル
  experienct_years: 4, //経験年数
  project_title: '顧客管理システムの修正', //プロジェクト名
  people_number: 8, //プロジェクト規模
  cliant: '株式会社テクノプロ', //顧客ID
  process_list: ['基本設計', '詳細設計'] //工程ID
};

export const MockEmployeeSkillArray: EmployeeSkill[] = [MockEmployeeSkill];
