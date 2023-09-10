import { useState } from 'react';

// material-ui
import { Button, Checkbox, Divider, Grid, List, ListItem, ListItemText, Stack, Switch, Typography } from '@mui/material';

// プロジェクトのインポート
import MainCard from 'components/MainCard';

// ==============================|| アカウントプロファイル - 設定 ||============================== //

const TabSettings = () => {
  const [checked, setChecked] = useState(['en', 'email-1', 'email-3', 'order-1', 'order-3']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="メール設定">
              <Stack spacing={2.5}>
                <Typography variant="subtitle1">メール通知の設定</Typography>
                <List sx={{ p: 0, '& .MuiListItem-root': { p: 0, py: 0.25 } }}>
                  <ListItem>
                    <ListItemText id="switch-list-label-en" primary={<Typography color="secondary">メール通知</Typography>} />
                    <Switch
                      edge="end"
                      onChange={handleToggle('en')}
                      checked={checked.indexOf('en') !== -1}
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-en'
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      id="switch-list-label-sctp"
                      primary={<Typography color="secondary">個人メールへのコピーを送信</Typography>}
                    />
                    <Switch
                      edge="end"
                      onChange={handleToggle('sctp')}
                      checked={checked.indexOf('sctp') !== -1}
                      inputProps={{
                        'aria-labelledby': 'switch-list-label-sctp'
                      }}
                    />
                  </ListItem>
                </List>
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="システム通知からの更新">
              <Stack spacing={2.5}>
                <Typography variant="subtitle1">何についてメールを送信しますか？</Typography>
                <List sx={{ p: 0, '& .MuiListItem-root': { p: 0, py: 0.25 } }}>
                  <ListItem>
                    <ListItemText primary={<Typography color="secondary">PCT-themes製品と機能の更新情報</Typography>} />
                    <Checkbox defaultChecked />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={<Typography color="secondary">PCT-themesの最大限の活用方法に関するヒント</Typography>} />
                    <Checkbox defaultChecked />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={<Typography color="secondary">PCT-themesに最後にログインしてからの不明な情報</Typography>} />
                    <Checkbox />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={<Typography color="secondary">製品とその他のサービスに関する情報</Typography>} />
                    <Checkbox />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={<Typography color="secondary">ビジネス製品に関するヒントと文書</Typography>} />
                    <Checkbox />
                  </ListItem>
                </List>
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <MainCard title="アクティビティに関連するメール">
          <Stack spacing={2.5}>
            <Typography variant="subtitle1">いつメールを送信しますか？</Typography>
            <List sx={{ p: 0, '& .MuiListItem-root': { p: 0, py: 0.25 } }}>
              <ListItem>
                <ListItemText id="switch-list-label-email-1" primary={<Typography color="secondary">新しい通知がある場合</Typography>} />
                <Switch
                  edge="end"
                  onChange={handleToggle('email-1')}
                  checked={checked.indexOf('email-1') !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-email-1'
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-email-2"
                  primary={<Typography color="secondary">直接メッセージが送信された場合</Typography>}
                />
                <Switch
                  edge="end"
                  onChange={handleToggle('email-2')}
                  checked={checked.indexOf('email-2') !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-email-2'
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-email-3"
                  primary={<Typography color="secondary">誰かがあなたを接続として追加した場合</Typography>}
                />
                <Switch
                  edge="end"
                  onChange={handleToggle('email-3')}
                  checked={checked.indexOf('email-3') !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-email-3'
                  }}
                />
              </ListItem>
            </List>
            <Divider />
            <Typography variant="subtitle1">メールをエスカレートするタイミングは？</Typography>
            <List sx={{ p: 0, '& .MuiListItem-root': { p: 0, py: 0.25 } }}>
              <ListItem>
                <ListItemText
                  id="switch-list-label-order-1"
                  primary={<Typography color="secondary.light">新しい注文がある場合</Typography>}
                />
                <Switch
                  edge="end"
                  onChange={handleToggle('order-1')}
                  checked={checked.indexOf('order-1') !== -1}
                  disabled
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-order-1'
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText id="switch-list-label-order-2" primary={<Typography color="secondary.light">新しい会員承認</Typography>} />
                <Switch
                  edge="end"
                  disabled
                  onChange={handleToggle('order-2')}
                  checked={checked.indexOf('order-2') !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-order-2'
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText id="switch-list-label-order-3" primary={<Typography color="secondary">会員登録</Typography>} />
                <Switch
                  edge="end"
                  onChange={handleToggle('order-3')}
                  checked={checked.indexOf('order-3') !== -1}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-order-3'
                  }}
                />
              </ListItem>
            </List>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button variant="outlined" color="secondary">
            キャンセル
          </Button>
          <Button variant="contained">プロフィールを更新</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TabSettings;
