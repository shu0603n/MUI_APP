import { Employee } from 'types/employee/employee';
import { MockEmployeeSkill } from './employee_skill';

export const MockEmployee: Employee = {
  employee_id: 1, //社員ID
  last_name: '村井', //性
  first_name: '俊介', //名
  last_name_k: 'ムライ', //性カナ
  first_name_k: 'シュンスケ', //名カナ
  gender: '男', //性別
  birthday: '1994/06/03', //生年月日
  job_category: 'SE', //職種
  client_name: '株式会社テクノプロ', //顧客ID
  project_name: 'フロントエンド改修の案件', //案件
  address: '北海道札幌市豊平区', //住所
  joining_date: '1994/06/03', //入社日
  retirement_date: '1994/06/03', //退職日
  phone_number: '09095219336', //電話番号
  email_address: 'shu0603n@gmail.com', //メールアドレス
  employee_skills: [MockEmployeeSkill], //社員スキルID
  postal_code: '0620907', //郵便番号
  remarks: 'ストレスに弱い', //備考
  position_name: '課長', //役職ID
  employment_name: '正社員' //雇用ID
};
