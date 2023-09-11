// material-ui
import { Theme } from '@mui/material/styles';
import {
  useMediaQuery,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Stack,
  Typography
} from '@mui/material';

// third-party
// import { PatternFormat } from 'react-number-format';

// project import
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
import { AimOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import LinearWithLabelYear from 'components/@extended/progress/LinearWithLabelYear';
import { PatternFormat } from 'react-number-format';
import { calculateAge } from 'components/AgeCalculator';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //

const TabProfile = () => {
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const data = {
    employee_id: 1,
    last_name: '田中',
    first_name: '太郎',
    last_name_k: 'タナカ',
    first_name_k: 'タロウ',
    gender: '男',
    birthday: '1994/06/03',
    job_category_name: 'システムエンジニア',
    client_name: '株式会社TEST',
    project_name: '顧客管理システムの作成',
    postal_code: '0010001',
    address: '北海道札幌市中央区1丁目1-1',
    joining_date: '2019/4/1',
    retirement_date: '',
    phone_number: '08011112222',
    email_address: 'test@test.co.jp',
    remarks: '手足に不自由有。',
    employment_name: '正社員',
    position_name: '課長'
  };

  const skill = [
    {
      experience_years: 15,
      technic_name: '言語',
      skill_name: 'JAVA'
    },
    {
      experience_years: 4,
      technic_name: '言語',
      skill_name: 'Ptyhon'
    },
    {
      experience_years: 0,
      technic_name: '言語',
      skill_name: 'TypeScript'
    },
    {
      experience_years: 1.5,
      technic_name: 'DataBase',
      skill_name: 'Oracle'
    },
    {
      experience_years: 5,
      technic_name: 'DataBase',
      skill_name: 'postgreSQL'
    },
    {
      experience_years: 1.5,
      technic_name: 'library',
      skill_name: 'React'
    },
    {
      experience_years: 10,
      technic_name: 'library',
      skill_name: 'Flask'
    }
  ];
  console.log(data, skill);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={4} xl={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="flex-end">
                    <Chip label={data.employment_name} size="small" color="primary" />
                  </Stack>
                  <Stack spacing={2.5} alignItems="center">
                    <Avatar alt="Avatar 1" size="xl" src={avatarImage(`./default.png`)} />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{`${data.last_name} ${data.first_name}`}</Typography>
                      <Typography color="secondary">{data.position_name}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{calculateAge(data.birthday)}</Typography>
                      <Typography color="secondary">年齢</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{calculateAge(data.joining_date)}</Typography>
                      <Typography color="secondary">勤続年数</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">4.5K</Typography>
                      <Typography color="secondary">Members</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <ListItem>
                      <ListItemIcon>
                        <MailOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{data.email_address}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">
                          <PatternFormat value={data.phone_number} displayType="text" type="text" format="###-####-####" />
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AimOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{data.address}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Skills">
              <Grid container spacing={1.25}>
                {skill.map((val) => (
                  <Fragment>
                    <Grid item xs={6}>
                      <Typography color="secondary">{val.skill_name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <LinearWithLabelYear value={val.experience_years} />
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8} xl={9}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="個人情報">
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">氏名</Typography>
                        <Typography>{`${data.first_name} ${data.last_name}`}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">フリガナ</Typography>
                        <Typography>{`${data.first_name_k} ${data.last_name_k}`}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">性別</Typography>
                        <Typography>{data.gender}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">生年月日</Typography>
                        <Typography>{data.birthday}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">電話番号</Typography>
                        <Typography>
                          <PatternFormat value={data.phone_number} displayType="text" type="text" format="###-####-####" />
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">メールアドレス</Typography>
                        <Typography>anshan.dh81@gmail.com</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">郵便番号</Typography>
                        <Typography>062-0078</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Stack spacing={0.5}>
                    <Typography color="secondary">住所</Typography>
                    <Typography>北海道札幌市豊平区豊平7-8-5</Typography>
                  </Stack>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="備考">
              <Typography color="secondary">{data.remarks}</Typography>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TabProfile;
