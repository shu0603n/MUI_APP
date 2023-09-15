// project import
import top from './top';
import employee from './employee';
import client from './client';
import profile from './profile';
// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [top, employee, client, profile]
};

export default menuItems;
