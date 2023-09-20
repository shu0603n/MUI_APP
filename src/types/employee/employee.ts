import { Employment } from 'types/param/employment';
import { Position } from 'types/param/position';
import { Project } from 'types/project/project';
import { EmployeeSkillHistory } from './employee_skill_history';
import { JobCategory } from 'types/param/job_category';

export type Employee = {
  employee_id: number; //社員ID
  last_name: string; //性
  first_name: string; //名
  last_name_k: string; //性カナ
  first_name_k: string; //名カナ
  gender: string; //性別
  birthday: string; //生年月日
  job_category: JobCategory; //職種
  client: string; //顧客
  project: Project; //案件
  address: string; //住所
  joining_date: string; //入社日
  retirement_date: string; //退職日
  phone_number: string; //電話番号
  email_address: string; //メールアドレス
  employee_skills: EmployeeSkillHistory; //社員スキルID
  postal_code: string; //郵便番号
  remarks: string; //備考
  position: Position; //役職
  employment: Employment; //雇用
};
