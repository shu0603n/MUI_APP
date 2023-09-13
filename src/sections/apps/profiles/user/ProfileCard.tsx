import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Button, Grid, Stack, Typography } from '@mui/material';

// プロジェクトのインポート
import MainCard from 'components/MainCard';
import ProfileRadialChart from './ProfileRadialChart';

// アセット
import BackLeft from 'assets/images/profile/UserProfileBackLeft';
import BackRight from 'assets/images/profile/UserProfileBackRight';

// タイプ
import { ThemeDirection } from 'types/config';

// ==============================|| ユーザープロフィール - トップカード ||============================== //

interface Props {
  focusInput: () => void;
}

const ProfileCard = ({ focusInput }: Props) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard border={false} content={false} sx={{ bgcolor: 'primary.lighter', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-7px',
          left: 0,
          zIndex: 1,
          ...(theme.direction === ThemeDirection.RTL && {
            transform: 'rotate(180deg)',
            top: -7,
            bottom: 'unset'
          })
        }}
      >
        <BackLeft />
      </Box>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ position: 'relative', zIndex: 5 }}>
        <Grid item>
          <Stack direction="row" spacing={matchDownSM ? 1 : 2} alignItems="center">
            <Box sx={{ ml: { xs: 0, sm: 1 } }}>
              <ProfileRadialChart />
            </Box>
            <Stack spacing={0.75}>
              <Typography variant="h5">プロフィールを編集</Typography>
              <Typography variant="body2" color="secondary">
                プロフィールが未完成です。情報管理のため必要な情報を入力してください。
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sx={{ mx: matchDownSM ? 2 : 3, my: matchDownSM ? 1 : 0, mb: matchDownSM ? 2 : 0 }} xs={matchDownSM ? 12 : 'auto'}>
          <Button variant="contained" fullWidth={matchDownSM} component={Link} to="/apps/profiles/user/personal" onClick={focusInput}>
            プロフィールを編集
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          ...(theme.direction === ThemeDirection.RTL && {
            transform: 'rotate(180deg)',
            top: -10,
            bottom: 'unset'
          })
        }}
      >
        <BackRight />
      </Box>
    </MainCard>
  );
};

export default ProfileCard;
