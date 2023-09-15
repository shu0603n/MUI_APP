import { ProjectSkill } from './project_skill';

export type Project = {
  //[案件]
  client_name: string; //顧客ID
  project_skills: ProjectSkill; //案件スキルID
  hp_posting_flag: boolean; //HP掲載フラグ
  contract_name: string; //契約区分ID
  working_postal_code: string; //就業先郵便番号
  working_address: string; //就業先住所
  working_start_time: string; //就業開始時刻
  working_end_time: string; //就業終了時刻
  holiday: string; //休日
  project_title: string; //案件名
  business_outline: string; //業務内容
};
