import { Process } from 'types/param/process';

export const MockProcess: Process = {
  process_id: 1, //工程区分名
  process_name: '要件定義' //工程区分名
};
export const MockProcess2: Process = {
  process_id: 2, //工程区分名
  process_name: '基本設計' //工程区分名
};
export const MockProcess3: Process = {
  process_id: 3, //工程区分名
  process_name: '詳細設計' //工程区分名
};
export const MockProcess4: Process = {
  process_id: 4, //工程区分名
  process_name: '製造' //工程区分名
};
export const MockProcess5: Process = {
  process_id: 5, //工程区分名
  process_name: '単体テスト' //工程区分名
};
export const MockProcess6: Process = {
  process_id: 6, //工程区分名
  process_name: '結合テスト' //工程区分名
};

export const MockProcessAll: Process[] = [MockProcess, MockProcess2, MockProcess3, MockProcess4, MockProcess5, MockProcess6];
