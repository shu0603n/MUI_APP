// project import
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import other from './other';
import pages from './pages';
import top from './top';
import employee from './employee';
import client from './client';
import profile from './profile';
// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [top, employee, client, profile, widget, applications, formsTables, chartsMap, pages, other]
};

export default menuItems;
