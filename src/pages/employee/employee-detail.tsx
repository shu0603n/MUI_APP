import { useState } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { ContainerOutlined, FileTextOutlined, LockOutlined, SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

// ==============================|| PROFILE - ACCOUNT ||============================== //

const EmployeeDetail = () => {
  const { pathname } = useLocation();

  let selectedTab = 0;
  switch (pathname) {
    case '/employee/employee-detail/personal':
      selectedTab = 1;
      break;
    case '/employee/employee-detail/my-account':
      selectedTab = 2;
      break;
    case '/employee/employee-detail/password':
      selectedTab = 3;
      break;
    case '/employee/employee-detail/skill':
      selectedTab = 4;
      break;
    case '/employee/employee-detail/settings':
      selectedTab = 5;
      break;
    case '/employee/employee-detail/basic':
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
          <Tab label="プロフィール" component={Link} to="/employee/employee-detail/basic" icon={<UserOutlined />} iconPosition="start" />
          <Tab label="個人情報" component={Link} to="/employee/employee-detail/personal" icon={<FileTextOutlined />} iconPosition="start" />
          <Tab label="スキル一覧" component={Link} to="/employee/employee-detail/skill" icon={<TeamOutlined />} iconPosition="start" />
          <Tab
            label="請求一覧"
            label="請求一覧"
            component={Link}
            to="/employee/employee-detail/my-account"
            icon={<ContainerOutlined />}
            iconPosition="start"
          />
          <Tab
            label="パスワード変更"
            component={Link}
            to="/employee/employee-detail/password"
            icon={<LockOutlined />}
            iconPosition="start"
          />
          <Tab label="設定" component={Link} to="/employee/employee-detail/settings" icon={<SettingOutlined />} iconPosition="start" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Outlet />
      </Box>
    </MainCard>
  );
};

export default EmployeeDetail;
