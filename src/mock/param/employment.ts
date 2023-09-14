import { Employment } from 'types/param/employment';

export const MockEmployment: Employment = {
  employment_name: '正社員' //雇用区分名
};
export const MockEmployment2: Employment = {
  employment_name: '派遣社員' //雇用区分名
};
export const MockEmployment3: Employment = {
  employment_name: '登録者' //雇用区分名
};
export const MockEmployment4: Employment = {
  employment_name: 'アルバイト' //雇用区分名
};
export const MockEmployment5: Employment = {
  employment_name: 'フリーランス' //雇用区分名
};

export const MockEmploymentArray: Employment[] = [MockEmployment, MockEmployment2, MockEmployment3, MockEmployment4, MockEmployment5];
