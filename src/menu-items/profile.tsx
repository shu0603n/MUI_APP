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

const profile: NavItemType = {
  id: 'group-employee',
  title: <FormattedMessage id="profile" />,
  icon: icons.IdcardOutlined,
  type: 'group',
  children: [
    {
      id: 'user-profile',
      title: <FormattedMessage id="user-profile" />,
      type: 'item',
      icon: icons.UserOutlined,
      url: '/apps/profiles/user/personal',
      breadcrumbs: false
    },
    {
      id: 'account-profile',
      title: <FormattedMessage id="account-profile" />,
      type: 'item',
      icon: icons.UserOutlined,
      url: '/apps/profiles/account/basic'
    }
  ]
};

export default profile;
