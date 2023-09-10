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

const client: NavItemType = {
  id: 'group-client',
  title: <FormattedMessage id="顧客情報" />,
  icon: icons.IdcardOutlined,
  type: 'group',
  children: [
    {
      id: 'client-list',
      title: <FormattedMessage id="client-list" />,
      type: 'item',
      url: '/client/client-list',
      icon: icons.IdcardOutlined
    },
    {
      id: 'client-detail',
      title: <FormattedMessage id="client-detail" />,
      type: 'item',
      url: '/client/client-detail/basic',
      icon: icons.IdcardOutlined
    }
  ]
};

export default client;
