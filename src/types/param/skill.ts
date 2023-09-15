export type Skill = {
  technic: string; //技術区分
  skill_name: string; //スキル名
};

export type Working = {
  working_status: string; //勤務名
};

export type JobCategory = {
  //[職種区分]
  job_category_name: string; //職種名
};

export type EmployeeSkill = {
  //[社員スキル履歴]
  skills: Skill[]; //スキル
};

export type ProjectType = {
  //[種別]
  project_type_name: string; //種別名
};

export type Position = {
  //[役職]
  position_name: string; //役職名
};

export type Technic = {
  //[技術区分]
  technic_name: string; //技術名
};

export type Contract = {
  //[契約区分]
  contract_name: string; //契約区分名
};

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

export type ProjectSkill = {
  //[社員スキル履歴]
  skills: Skill[]; //スキル
};
