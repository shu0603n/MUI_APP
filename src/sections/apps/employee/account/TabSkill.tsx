// material-ui
import {
  Button,
  Chip,
  Divider,
  Grid,
  InputLabel,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import IconButton from 'components/@extended/IconButton';

// プロジェクトのインポート
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// アセット
import { EllipsisOutlined } from '@ant-design/icons';
import SkillTable from './SkillTable';

// テーブルデータ
function createData(name: string, avatar: string, email: string, role: number, status: boolean) {
  return { name, avatar, email, role, status };
}

const avatarImage = require.context('assets/images/users', true);

const rows = [
  createData('Frozen Tek', 'avatar-1.png', 'owner@company.com', 1, true),
  createData('Eclair Dues', 'avatar-3.png', 'manager@company.com', 2, true),
  createData('Schem Lein', 'avatar-2.png', 'sl@company.com', 3, false),
  createData('Jhon Doe', 'avatar-4.png', 'jd@company.com', 3, true),
  createData('Tevoni Wug', 'avatar-5.png', 'tw@company.com', 0, false)
];

// ==============================|| アカウントプロファイル - 役割 ||============================== //

const TabRole = () => {
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
  console.log(skill);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="チームメンバーを招待する" content={false}>
          <Stack spacing={2.5} sx={{ p: 2.5 }}>
            <Typography variant="h4">
              プラン内で利用可能なメンバー：5/10{' '}
              <Typography variant="subtitle1" component="span">
                メンバー招待可能数
              </Typography>
            </Typography>
            <Divider />
            <Stack
              spacing={3}
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ width: { xs: 1, md: '80%', lg: '60%' } }}
            >
              <Stack spacing={1} sx={{ width: `calc(100% - 110px)` }}>
                <InputLabel htmlFor="outlined-email">メールアドレス</InputLabel>
                <TextField fullWidth id="outlined-email" variant="outlined" placeholder="メールアドレスを入力してください" />
              </Stack>
              <Button variant="contained" size="large">
                送信
              </Button>
            </Stack>
          </Stack>
          <TableContainer>
            <Table sx={{ minWidth: 350 }} aria-label="シンプルなテーブル">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 3 }}>メンバー</TableCell>
                  <TableCell>役割</TableCell>
                  <TableCell align="right">ステータス</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow hover key={row.name}>
                    <TableCell sx={{ pl: 3 }} component="th">
                      <Stack direction="row" alignItems="center" spacing={1.25}>
                        <Avatar alt="Avatar 1" src={avatarImage(`./${row.avatar}`)} />
                        <Stack spacing={0}>
                          <Typography variant="subtitle1">{row.name}</Typography>
                          <Typography variant="caption" color="secondary">
                            {row.email}
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {row.role === 1 && <Chip size="small" color="primary" label="オーナー" />}
                      {row.role === 2 && <Chip size="small" variant="light" color="info" label="マネージャー" />}
                      {row.role === 3 && <Chip size="small" variant="light" color="warning" label="スタッフ" />}
                      {row.role === 0 && <Chip size="small" variant="light" color="success" label="カスタマー" />}
                    </TableCell>
                    <TableCell align="right">
                      {!row.status && (
                        <Stack direction="row" alignItems="center" spacing={1.25} justifyContent="flex-end">
                          <Button size="small" color="error">
                            再送信
                          </Button>
                          <Chip size="small" color="info" variant="outlined" label="招待済み" />
                        </Stack>
                      )}
                      {row.status && <Chip size="small" color="success" label="参加済み" />}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" color="secondary">
                        <EllipsisOutlined style={{ fontSize: '1.15rem' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button color="error">キャンセル</Button>
          <Button variant="contained">プロフィールを更新</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <SkillTable />
      </Grid>
    </Grid>
  );
};

export default TabRole;
