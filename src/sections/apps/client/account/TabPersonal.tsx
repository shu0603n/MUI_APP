import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';

// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { facebookColor, linkedInColor, twitterColor } from 'config';

// assets
import { FacebookFilled, LinkedinFilled, TwitterSquareFilled, CameraOutlined } from '@ant-design/icons';

// types
import { ThemeMode } from 'types/config';

const avatarImage = require.context('assets/images/users', true);

// styles & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
};

// ==============================|| ACCOUNT PROFILE - PERSONAL ||============================== //

const TabPersonal = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | undefined>(avatarImage(`./default.png`));

  useEffect(() => {
    if (selectedImage) {
      setAvatar(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const [experience, setExperience] = useState('0');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setExperience(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <MainCard title="個人情報">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={2.5} alignItems="center" sx={{ m: 3 }}>
                <FormLabel
                  htmlFor="change-avtar"
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '&:hover .MuiBox-root': { opacity: 1 },
                    cursor: 'pointer'
                  }}
                >
                  <Avatar alt="Avatar 1" src={avatar} sx={{ width: 76, height: 76 }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Stack spacing={0.5} alignItems="center">
                      <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '1.5rem' }} />
                      <Typography sx={{ color: 'secondary.lighter' }} variant="caption">
                        Upload
                      </Typography>
                    </Stack>
                  </Box>
                </FormLabel>
                <TextField
                  type="file"
                  id="change-avtar"
                  placeholder="Outlined"
                  variant="outlined"
                  sx={{ display: 'none' }}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">性</InputLabel>
                <TextField fullWidth defaultValue="Anshan" id="personal-first-name" placeholder="First Name" autoFocus />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">名</InputLabel>
                <TextField fullWidth defaultValue="Handgun" id="personal-first-name" placeholder="Last Name" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-location">国</InputLabel>
                <TextField fullWidth defaultValue="New York" id="personal-location" placeholder="Location" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-zipcode">郵便番号</InputLabel>
                <TextField fullWidth defaultValue="956754" id="personal-zipcode" placeholder="Zipcode" />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-location">自己紹介</InputLabel>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  defaultValue="Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at."
                  id="personal-location"
                  placeholder="Location"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-experience">エンジニア歴</InputLabel>
                <Select fullWidth id="personal-experience" value={experience} onChange={handleChange} MenuProps={MenuProps}>
                  <MenuItem value="0">未経験</MenuItem>
                  <MenuItem value="0.5">半年未満</MenuItem>
                  <MenuItem value="1">1年</MenuItem>
                  <MenuItem value="2">2年</MenuItem>
                  <MenuItem value="3">3年</MenuItem>
                  <MenuItem value="4">4年</MenuItem>
                  <MenuItem value="5">5年</MenuItem>
                  <MenuItem value="6">6年</MenuItem>
                  <MenuItem value="10">10年以上</MenuItem>
                </Select>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="SNS">
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    disableRipple
                    size="small"
                    startIcon={<TwitterSquareFilled style={{ color: twitterColor, fontSize: '1.15rem' }} />}
                    sx={{ color: twitterColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Twitter
                  </Button>
                  <Button color="error">接続</Button>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    disableRipple
                    size="small"
                    startIcon={<FacebookFilled style={{ color: facebookColor, fontSize: '1.15rem' }} />}
                    sx={{ color: facebookColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Facebook
                  </Button>
                  <Typography variant="subtitle1" sx={{ color: facebookColor }}>
                    連携済み
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    disableRipple
                    size="small"
                    startIcon={<LinkedinFilled style={{ color: linkedInColor, fontSize: '1.15rem' }} />}
                    sx={{ color: linkedInColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    LinkedIn
                  </Button>
                  <Button color="error">接続</Button>
                </Stack>
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Contact Information">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-phone">携帯電話</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      {/* <Select defaultValue="1-876">
                        <MenuItem value="91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="36">+36</MenuItem>
                        <MenuItem value="225">(255)</MenuItem>
                        <MenuItem value="39">+39</MenuItem>
                        <MenuItem value="1-876">1-876</MenuItem>
                        <MenuItem value="7">+7</MenuItem>
                        <MenuItem value="254">(254)</MenuItem>
                        <MenuItem value="373">(373)</MenuItem>
                        <MenuItem value="1-664">1-664</MenuItem>
                        <MenuItem value="95">+95</MenuItem>
                        <MenuItem value="264">(264)</MenuItem>
                      </Select> */}
                      <PatternFormat
                        format="###-####-####"
                        mask="_"
                        fullWidth
                        customInput={TextField}
                        placeholder="Phone Number"
                        defaultValue="09095219336"
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-email">メールアドレス</InputLabel>
                    <TextField type="email" fullWidth defaultValue="stebin.ben@gmail.com" id="personal-email" placeholder="Email Address" />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-email">URL</InputLabel>
                    <TextField fullWidth defaultValue="https://anshan.dh.url" id="personal-url" placeholder="Portfolio URL" />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-address">住所</InputLabel>
                    <TextField
                      fullWidth
                      defaultValue="Street 110-B Kalians Bag, Dewan, M.P. New York"
                      id="personal-address"
                      placeholder="Address"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained">Update Profile</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TabPersonal;
