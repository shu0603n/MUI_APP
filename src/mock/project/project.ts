import { MockContract } from 'mock/param/contract';
import { Project } from 'types/project/project';
import { MockProjectSkill } from './project_skill';

export const MockProject: Project = {
  //[案件]
  project_id: 1,
  client: '株式会社テクノプロ', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: 'フロントエンド改修', //案件名
  business_outline: 'Reactを使用し、某メディア媒体のテスト環境を作成する' //業務内容
};

export const MockProject2: Project = {
  project_id: 2,
  //[案件]
  client: '株式会社トライブ', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: 'HP作成', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};

export const MockProject3: Project = {
  project_id: 3,
  //[案件]
  client: '株式会社フィーリスト', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: '請求書業務の保守運用', //案件名
  business_outline: 'Oracle,JAVAを使った保守運用です' //業務内容
};

export const MockProject4: Project = {
  project_id: 4,
  //[案件]
  client: '株式会社トライブ', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: '顧客管理システムの修正', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};

export const MockProject5: Project = {
  project_id: 5,
  //[案件]
  client: 'ほくでん情報株式会社', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: '高圧顧客システムの作成', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};
export const MockProject6: Project = {
  project_id: 6,
  //[案件]
  client: '株式会社富士ソフト', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: 'カーナビテストツール作成', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};
export const MockProject7: Project = {
  project_id: 1,
  //[案件]
  client: '株式会社SKY', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract: MockContract, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: '某メディアサイトのフロントエンド改修', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};

export const MockProjectALL: Project[] = [MockProject, MockProject2, MockProject3, MockProject4, MockProject5, MockProject6, MockProject7];
