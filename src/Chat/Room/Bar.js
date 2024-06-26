// Components
import { Stack, Typography } from '@mui/material';

const Bar = () => {
  return (
    <Stack sx={{gap: 5, p:1}}>
      <Typography variant='h5'>Mixou Chat</Typography>
      <Stack sx={{gap: 2}}>
        <Typography variant='h6'>Active users</Typography>
        <Stack>
          <Typography variant='body2'>Active users</Typography>
          <Typography variant='body2'>Active users</Typography>
          <Typography variant='body2'>Active users</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Bar;