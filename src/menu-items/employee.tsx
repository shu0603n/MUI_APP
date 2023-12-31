// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { LineChartOutlined, IdcardOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  LineChartOutlined,
  IdcardOutlined,
  DatabaseOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const employee: NavItemType = {
  id: 'group-employee',
  title: <FormattedMessage id="社員情報" />,
  icon: icons.IdcardOutlined,
  type: 'group',
  children: [
    {
      id: '社員一覧',
      title: <FormattedMessage id="employee" />,
      type: 'item',
      url: '/employee',
      icon: icons.IdcardOutlined
    }
  ]
};

export default employee;
