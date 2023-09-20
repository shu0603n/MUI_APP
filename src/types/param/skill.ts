import { Technic } from './technic';

export type Skill = {
  skill_id: number; //スキル名
  skill_name: string; //スキル名
  technic: Technic; //技術区分
};
