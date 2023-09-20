import { MockProcess, MockProcess2, MockProcess3, MockProcess4 } from 'mock/param/process';
import { MockProject, MockProject2, MockProject3, MockProject4, MockProject5, MockProject6 } from 'mock/project/project';
import { EmployeeSkillHistory } from 'types/employee/employee_skill_history';

export const MockEmployeeSkill: EmployeeSkillHistory = {
  employee_skill_history_id: 1,
  experienct_years: 4, //経験年数
  project: MockProject, //プロジェクト名
  people_number: 8, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkill2: EmployeeSkillHistory = {
  employee_skill_history_id: 2,
  experienct_years: 1, //経験年数
  project: MockProject2, //プロジェクト名
  people_number: 3, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkill3: EmployeeSkillHistory = {
  employee_skill_history_id: 3,
  experienct_years: 1, //経験年数
  project: MockProject3, //プロジェクト名
  people_number: 3, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkill4: EmployeeSkillHistory = {
  employee_skill_history_id: 4,
  experienct_years: 4, //経験年数
  project: MockProject4, //プロジェクト名
  people_number: 3, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkill5: EmployeeSkillHistory = {
  employee_skill_history_id: 5,
  experienct_years: 5, //経験年数
  project: MockProject5, //プロジェクト名
  people_number: 3, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkill6: EmployeeSkillHistory = {
  employee_skill_history_id: 6,
  experienct_years: 8, //経験年数
  project: MockProject6, //プロジェクト名
  people_number: 3, //プロジェクト規模
  contact: 'PG',
  process_list: [MockProcess, MockProcess2, MockProcess3, MockProcess4] //工程ID
};

export const MockEmployeeSkillAll: EmployeeSkillHistory[] = [MockEmployeeSkill, MockEmployeeSkill2];
