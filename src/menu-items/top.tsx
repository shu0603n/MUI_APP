// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { LineChartOutlined, IdcardOutlined, DatabaseOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  LineChartOutlined,
  IdcardOutlined,
  DatabaseOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const top: NavItemType = {
  id: 'group-top',
  title: <FormattedMessage id="トップ" />,
  icon: icons.IdcardOutlined,
  type: 'group',
  children: [
    {
      id: 'top-page',
      title: <FormattedMessage id="top-page" />,
      type: 'item',
      url: '/top/top-page',
      icon: icons.IdcardOutlined
    }
  ]
};

export default top;
