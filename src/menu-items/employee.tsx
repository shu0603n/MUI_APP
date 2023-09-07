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
      id: '顧客一覧',
      title: <FormattedMessage id="employee-list" />,
      type: 'item',
      url: '/employee/employee-list',
      icon: icons.IdcardOutlined
    },
    {
      id: '顧客詳細',
      title: <FormattedMessage id="employee-detail" />,
      type: 'item',
      url: '/employee/employee-detail',
      icon: icons.IdcardOutlined
    },
    {
      id: 'top-page',
      title: <FormattedMessage id="top-page" />,
      type: 'item',
      url: '/top/top-page',
      icon: icons.IdcardOutlined
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.UserOutlined,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          url: '/apps/profiles/user/personal',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          url: '/apps/profiles/account/basic'
        }
      ]
    }
  ]
};

export default employee;
