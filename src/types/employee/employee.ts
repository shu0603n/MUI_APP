import { EmployeeSkill } from './employee_skill';

export type Employee = {
  employee_id: number; //社員ID
  last_name: string; //性
  first_name: string; //名
  last_name_k: string; //性カナ
  first_name_k: string; //名カナ
  gender: string; //性別
  birthday: string; //生年月日
  job_category: string; //職種
  client_name: string; //顧客
  project_name: string; //案件
  address: string; //住所
  joining_date: string; //入社日
  retirement_date: string; //退職日
  phone_number: string; //電話番号
  email_address: string; //メールアドレス
  employee_skills: EmployeeSkill[]; //社員スキルID
  postal_code: string; //郵便番号
  remarks: string; //備考
  position_name: string; //役職
  employment_name: string; //雇用
};
