// material-ui
import { Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material';

// ==============================|| PROGRESS - LINEAR WITH LABEL ||============================== //

export default function LinearWithLabelYear({ value, ...others }: LinearProgressProps) {
  // 年数をパーセント表示に変換する
  let data = 0;
  if (value) {
    if (10 <= value) {
      // 10年以上の場合は100固定
      data = 100;
    } else {
      // 10年未満の場合は年数に10を掛けてパーセント表記に変換する
      data = value * 10;
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={data} {...others} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value!)}年`}</Typography>
      </Box>
    </Box>
  );
}
