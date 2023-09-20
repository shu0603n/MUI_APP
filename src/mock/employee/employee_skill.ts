import { MockSkill, MockSkill2 } from 'mock/param/skill';
import { EmployeeSkill } from 'types/employee/employee_skill';

export const MockEmployeeSkill: EmployeeSkill = {
  employee_skill_id: 1,
  employee_skills: [MockSkill, MockSkill2]
};
export const MockEmployeeSkill2: EmployeeSkill = {
  employee_skill_id: 2,
  employee_skills: [MockSkill, MockSkill2]
};
