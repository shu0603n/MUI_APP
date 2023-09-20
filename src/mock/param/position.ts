import { Position } from 'types/param/position';

export const MockPosition: Position = {
  position_id: 1, //役職名
  position_name: '支店長' //役職名
};
export const MockPosition2: Position = {
  position_id: 2, //役職名
  position_name: '副支店長' //役職名
};
export const MockPosition3: Position = {
  position_id: 3, //役職名
  position_name: 'マネージャー' //役職名
};
export const MockPosition4: Position = {
  position_id: 4, //役職名
  position_name: 'エリアマネージャー' //役職名
};
export const MockPosition5: Position = {
  position_id: 5, //役職名
  position_name: 'なし' //役職名
};

export const MockPositionAll: Position[] = [MockPosition, MockPosition2, MockPosition3, MockPosition4, MockPosition5];
