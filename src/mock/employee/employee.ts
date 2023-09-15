import { MockEmployment } from 'mock/param/employment';
import { MockJobCategory } from 'mock/param/job_category';
import { MockPosition3, MockPosition5 } from 'mock/param/position';
import { MockProject, MockProject2, MockProject3, MockProject4 } from 'mock/project/project';
import { Employee } from 'types/employee/employee';
import { MockEmployeeSkill, MockEmployeeSkill2, MockEmployeeSkill3, MockEmployeeSkill4 } from './employee_skill_history';

export const MockEmployee: Employee = {
  employee_id: 1, //社員ID
  last_name: '村井', //性
  first_name: '俊介', //名
  last_name_k: 'ムライ', //性カナ
  first_name_k: 'シュンスケ', //名カナ
  gender: '男', //性別
  birthday: '1994/06/03', //生年月日
  job_category: MockJobCategory.job_category_name, //職種
  client_name: '株式会社テクノプロ', //顧客ID
  project_name: MockProject.project_title, //案件
  address: '北海道札幌市豊平区', //住所
  joining_date: '1994/06/03', //入社日
  retirement_date: '1994/06/03', //退職日
  phone_number: '09095219336', //電話番号
  email_address: 'shu0603n@gmail.com', //メールアドレス
  employee_skills: MockEmployeeSkill, //社員スキルID
  postal_code: '0620907', //郵便番号
  remarks: 'ストレスに弱い', //備考
  position_name: MockPosition3.position_name, //役職ID
  employment_name: MockEmployment.employment_name //雇用ID
};
export const MockEmployee2: Employee = {
  employee_id: 2, //社員ID
  last_name: '森', //性
  first_name: '琴音', //名
  last_name_k: 'モリ', //性カナ
  first_name_k: 'コトネ', //名カナ
  gender: '女', //性別
  birthday: '1999/02/10', //生年月日
  job_category: MockJobCategory.job_category_name, //職種
  client_name: '株式会社フィーリスト', //顧客ID
  project_name: MockProject2.project_title, //案件
  address: '北海道札幌市豊平区', //住所
  joining_date: '1994/06/03', //入社日
  retirement_date: '1994/06/03', //退職日
  phone_number: '09095219336', //電話番号
  email_address: 'shu0603n@gmail.com', //メールアドレス
  employee_skills: MockEmployeeSkill2, //社員スキルID
  postal_code: '0620907', //郵便番号
  remarks: 'ストレスに弱い', //備考
  position_name: MockPosition5.position_name, //役職ID
  employment_name: MockEmployment.employment_name //雇用ID
};
export const MockEmployee3: Employee = {
  employee_id: 3, //社員ID
  last_name: '真浦', //性
  first_name: '健斗', //名
  last_name_k: 'マウラ', //性カナ
  first_name_k: 'ケント', //名カナ
  gender: '男', //性別
  birthday: '1994/06/01', //生年月日
  job_category: MockJobCategory.job_category_name, //職種
  client_name: '株式会社トライブ', //顧客ID
  project_name: MockProject3.project_title, //案件
  address: '北海道札幌市豊平区', //住所
  joining_date: '1994/06/03', //入社日
  retirement_date: '1994/06/03', //退職日
  phone_number: '09095219336', //電話番号
  email_address: 'shu0603n@gmail.com', //メールアドレス
  employee_skills: MockEmployeeSkill3, //社員スキルID
  postal_code: '0620907', //郵便番号
  remarks: 'ストレスに弱い', //備考
  position_name: MockPosition3.position_name, //役職ID
  employment_name: MockEmployment.employment_name //雇用ID
};
export const MockEmployee4: Employee = {
  employee_id: 4, //社員ID
  last_name: '山田', //性
  first_name: '太郎', //名
  last_name_k: 'ヤマダ', //性カナ
  first_name_k: 'タロウ', //名カナ
  gender: '男', //性別
  birthday: '1994/06/03', //生年月日
  job_category: MockJobCategory.job_category_name, //職種
  client_name: '株式会社テクノプロ', //顧客ID
  project_name: MockProject4.project_title, //案件
  address: '北海道札幌市豊平区', //住所
  joining_date: '1994/06/03', //入社日
  retirement_date: '1994/06/03', //退職日
  phone_number: '09095219336', //電話番号
  email_address: 'shu0603n@gmail.com', //メールアドレス
  employee_skills: MockEmployeeSkill4, //社員スキルID
  postal_code: '0620907', //郵便番号
  remarks: 'ストレスに弱い', //備考
  position_name: MockPosition3.position_name, //役職ID
  employment_name: MockEmployment.employment_name //雇用ID
};

export const MockEmployeeALL: Employee[] = [MockEmployee, MockEmployee2, MockEmployee3, MockEmployee4];
