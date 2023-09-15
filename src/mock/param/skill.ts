import {
  Contract,
  EmployeeSkill,
  JobCategory,
  Position,
  Project,
  ProjectSkill,
  ProjectType,
  Skill,
  Technic,
  Working
} from 'types/param/skill';

export const MockWorking: Working = {
  working_status: '勤務中' //勤務名
};
export const MockWorking2: Working = {
  working_status: '退勤' //勤務名
};

export const MockWorking3: Working = {
  working_status: '予定休' //勤務名
};
export const MockWorking4: Working = {
  working_status: '当日休' //勤務名
};

export const MockJobCategory: JobCategory = {
  job_category_name: 'SE' //職種名
};
export const MockJobCategory2: JobCategory = {
  job_category_name: 'CC' //職種名
};
export const MockJobCategory3: JobCategory = {
  job_category_name: 'TA' //職種名
};
export const MockJobCategory4: JobCategory = {
  job_category_name: '事務' //職種名
};

export const MockProjectType: ProjectType = {
  project_type_name: 'WBアプリケーション' //種別名
};
export const MockProjectType2: ProjectType = {
  project_type_name: '顧客管理システム' //種別名
};
export const MockProjectType3: ProjectType = {
  project_type_name: 'HP' //種別名
};
export const MockProjectType4: ProjectType = {
  project_type_name: 'コンソール' //種別名
};

export const MockPosition: Position = {
  position_name: '支店長' //役職名
};
export const MockPosition2: Position = {
  position_name: '副支店長' //役職名
};
export const MockPosition3: Position = {
  position_name: 'マネージャー' //役職名
};
export const MockPosition4: Position = {
  position_name: 'エリアマネージャー' //役職名
};
export const MockPosition5: Position = {
  position_name: 'なし' //役職名
};

export const MockTechnic: Technic = {
  technic_name: '言語' //技術名
};
export const MockTechnic2: Technic = {
  technic_name: 'ライブラリ' //技術名
};
export const MockTechnic3: Technic = {
  technic_name: 'DataBase' //技術名
};
export const MockTechnic4: Technic = {
  technic_name: 'Server' //技術名
};
export const MockTechnic5: Technic = {
  technic_name: 'ツール' //技術名
};
export const MockTechnic6: Technic = {
  technic_name: 'OS' //技術名
};
export const MockContract: Contract = {
  contract_name: '派遣' //契約区分名
};
export const MockContract2: Contract = {
  contract_name: '紹介予定派遣' //契約区分名
};
export const MockContract3: Contract = {
  contract_name: '業務委託' //契約区分名
};
export const MockContract4: Contract = {
  contract_name: '準委任契約' //契約区分名
};
export const MockContract5: Contract = {
  contract_name: '受託開発' //契約区分名
};
export const MockContract6: Contract = {
  contract_name: '自社開発' //契約区分名
};

export const MockSkill: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'JAVA' //スキル名
};
export const MockSkill2: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'PHP' //スキル名
};
export const MockSkill3: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'TypeScript' //スキル名
};
export const MockSkill4: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'JavaScript' //スキル名
};
export const MockSkill5: Skill = {
  technic: MockTechnic.technic_name, //技術区分ID
  skill_name: 'C' //スキル名
};
export const MockSkill6: Skill = {
  technic: MockTechnic2.technic_name, //技術区分ID
  skill_name: 'React' //スキル名
};

export const MockSkillAll = [MockSkill, MockSkill2, MockSkill3, MockSkill4, MockSkill5];

export const MockEmployeeSkill: EmployeeSkill = {
  skills: [MockSkill, MockSkill2]
};
export const MockEmployeeSkill2: EmployeeSkill = {
  skills: [MockSkill, MockSkill2]
};
export const MockProjectSkill: ProjectSkill = {
  //[案件]
  skills: [MockSkill, MockSkill2]
};
export const MockProjectSkill2: ProjectSkill = {
  //[案件]
  skills: [MockSkill3, MockSkill4]
};
export const MockProjectSkill3: ProjectSkill = {
  //[案件]
  skills: [MockSkill5, MockSkill6]
};

export const MockProject: Project = {
  //[案件]
  client_name: '株式会社テクノプロ', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract_name: MockContract.contract_name, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: 'フロントエンド改修', //案件名
  business_outline: 'Reactを使用し、某メディア媒体のテスト環境を作成する' //業務内容
};

export const MockProject2: Project = {
  //[案件]
  client_name: '株式会社テクノプロ', //顧客ID
  project_skills: MockProjectSkill, //案件スキルID
  hp_posting_flag: true, //HP掲載フラグ
  contract_name: MockContract.contract_name, //契約区分ID
  working_postal_code: '0010005', //就業先郵便番号
  working_address: '北海道札幌市中央区1-5', //就業先住所
  working_start_time: '9:00', //就業開始時刻
  working_end_time: '18:00', //就業終了時刻
  holiday: '土日祝', //休日
  project_title: 'バックエンド改修', //案件名
  business_outline: 'Flaskを使ったRestAPIの作成' //業務内容
};
