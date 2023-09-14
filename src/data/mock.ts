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

export type EmployeeSkill = {
  employee_skills: Skill[]; //社員スキルID
  experienct_years: number; //経験年数
  project_title: string; //プロジェクト名
  people_number: number; //プロジェクト規模
  cliant: string; //顧客ID
  process_list: string[]; //工程履歴ID
};

export type Skill = {
  technic: string; //技術区分
  skill_name: string; //スキル名
};

const MockSkill: Skill = {
  technic: '言語', //技術区分ID
  skill_name: 'JAVA' //スキル名
};
const MockSkill2: Skill = {
  technic: '言語', //技術区分ID
  skill_name: 'JAVA' //スキル名
};

export const MockEmployeeSkill: EmployeeSkill = {
  employee_skills: [MockSkill, MockSkill2], //社員スキル
  experienct_years: 4, //経験年数
  project_title: '顧客管理システムの修正', //プロジェクト名
  people_number: 8, //プロジェクト規模
  cliant: '株式会社テクノプロ', //顧客ID
  process_list: ['基本設計', '詳細設計'] //工程ID
};
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
