import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ja from 'date-fns/locale/ja';
// third-party
import { PatternFormat } from 'react-number-format';

// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

// assets
import { CameraOutlined } from '@ant-design/icons';

// types
import { ThemeMode } from 'types/config';
import { MockEmployeeALL } from 'mock/employee/employee';
import { useParams } from 'react-router';
import { Employee } from 'types/employee/employee';
import { MockPositionAll } from 'mock/param/position';
import { MockEmploymentAll } from 'mock/param/employment';

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
  const { id } = useParams();
  const mock: Employee = MockEmployeeALL[Number(id) - 1];
  const mockPositionAll = MockPositionAll;
  const mockEmploymentAll = MockEmploymentAll;

  const [birthday, setBirthday] = useState<Date | null>(new Date(mock.birthday));
  const [gender, setGender] = useState(mock.gender);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MainCard title="基本情報">
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
                  <InputLabel htmlFor="personal-last_name">性</InputLabel>
                  <TextField fullWidth defaultValue={mock.last_name} id="last_name" placeholder="last_name" autoFocus />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-first_name">名</InputLabel>
                  <TextField fullWidth defaultValue={mock.first_name} id="first_name" placeholder="first_name" />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-last_name_k">性（カナ）</InputLabel>
                  <TextField fullWidth defaultValue={mock.last_name_k} id="last_name_k" placeholder="last_name_k" />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-first_name_k">名（カナ）</InputLabel>
                  <TextField fullWidth defaultValue={mock.first_name_k} id="first_name_k" placeholder="first_name_k" />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-gender">性別</InputLabel>
                  <Select fullWidth id="personal-experience" value={gender} onChange={handleChange} MenuProps={MenuProps}>
                    <MenuItem value="男">男</MenuItem>
                    <MenuItem value="女">女</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-birthday">生年月日</InputLabel>
                  <DatePicker value={birthday} onChange={(newValue) => setBirthday(newValue)} format="yyyy/MM/dd" />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1.25}>
                  <InputLabel htmlFor="personal-remarks">備考</InputLabel>
                  <TextField fullWidth multiline rows={3} defaultValue={mock.remarks} id="personal-remarks" placeholder="remarks" />
                </Stack>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard title="連絡先情報">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-phone_number">携帯電話</InputLabel>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <PatternFormat
                          format="###-####-####"
                          mask="_"
                          fullWidth
                          customInput={TextField}
                          placeholder="phone_number"
                          defaultValue={mock.phone_number}
                          onBlur={() => {}}
                          onChange={() => {}}
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-email">メールアドレス</InputLabel>
                      <TextField
                        type="email"
                        fullWidth
                        defaultValue={mock.email_address}
                        id="personal-email_address"
                        placeholder="email_address"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-postal_code">郵便番号</InputLabel>
                      <PatternFormat
                        format="###-####"
                        mask="_"
                        fullWidth
                        customInput={TextField}
                        placeholder="postal_code"
                        defaultValue={mock.postal_code}
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-address">住所</InputLabel>
                      <TextField fullWidth defaultValue={mock.address} id="personal-address" placeholder="address" />
                    </Stack>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="入社情報">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-location">入社日</InputLabel>
                      <DatePicker value={birthday} onChange={(newValue) => setBirthday(newValue)} format="yyyy/MM/dd" />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-location">退職日</InputLabel>
                      <DatePicker value={birthday} onChange={(newValue) => setBirthday(newValue)} format="yyyy/MM/dd" />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-employment_name">雇用形態</InputLabel>
                      <Select
                        fullWidth
                        id="personal-employment_name"
                        value={mock.employment.employment_id.toString()}
                        onChange={handleChange}
                        MenuProps={MenuProps}
                      >
                        {mockEmploymentAll.map((val) => {
                          return <MenuItem value={val.employment_id}>{val.employment_name}</MenuItem>;
                        })}
                      </Select>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="personal-employment_name">役職</InputLabel>
                      <Select
                        fullWidth
                        id="personal-employment_name"
                        value={mock.position.position_id.toString()}
                        onChange={handleChange}
                        MenuProps={MenuProps}
                      >
                        {mockPositionAll.map((val) => {
                          return <MenuItem value={val.position_id}>{val.position_name}</MenuItem>;
                        })}
                      </Select>
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
              キャンセル
            </Button>
            <Button variant="contained">更新</Button>
          </Stack>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default TabPersonal;
