import { MockProcess, MockProcess2, MockProcess3, MockProcess4 } from 'mock/param/process';
import { MockEmployeeSkillHistory } from 'mock/param/skill';
import { EmployeeSkill } from 'types/employee/employee_skill';

export const MockEmployeeSkill: EmployeeSkill = {
  employee_skills: MockEmployeeSkillHistory.skills, //社員スキル
  experienct_years: 4, //経験年数
  project_title: '顧客管理システムの修正', //プロジェクト名
  people_number: 8, //プロジェクト規模
  cliant: '株式会社テクノプロ', //顧客ID
  process_list: [MockProcess.process_name, MockProcess2.process_name, MockProcess3.process_name, MockProcess4.process_name] //工程ID
};

export const MockEmployeeSkillAll: EmployeeSkill[] = [MockEmployeeSkill];
