import { useState } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { ContainerOutlined, FileTextOutlined, LockOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

// ==============================|| PROFILE - ACCOUNT ||============================== //

const ClientDetail = () => {
  const { pathname } = useLocation();

  let selectedTab = 0;
  switch (pathname) {
    case '/client/client-detail/personal':
      selectedTab = 1;
      break;
    case '/client/client-detail/my-account':
      selectedTab = 2;
      break;
    case '/client/client-detail/password':
      selectedTab = 3;
      break;
    case '/client/client-detail/role':
      selectedTab = 4;
      break;
    case '/client/client-detail/settings':
      selectedTab = 5;
      break;
    case '/client/client-detail/basic':
    default:
      selectedTab = 0;
  }

  const [value, setValue] = useState(selectedTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainCard border={false} boxShadow>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
          <Tab label="プロフィール" component={Link} to="/client/client-detail/basic" icon={<UserOutlined />} iconPosition="start" />
          <Tab label="個人情報" component={Link} to="/client/client-detail/personal" icon={<FileTextOutlined />} iconPosition="start" />
          <Tab
            label="マイアカウント"
            component={Link}
            to="/client/client-detail/my-account"
            icon={<ContainerOutlined />}
            iconPosition="start"
          />
          <Tab label="パスワード変更" component={Link} to="/client/client-detail/password" icon={<LockOutlined />} iconPosition="start" />
          <Tab label="役割" component={Link} to="/client/client-detail/role" icon={<TeamOutlined />} iconPosition="start" />
          <Tab label="設定" component={Link} to="/client/client-detail/settings" icon={<SettingOutlined />} iconPosition="start" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Outlet />
      </Box>
    </MainCard>
  );
};

export default ClientDetail;
