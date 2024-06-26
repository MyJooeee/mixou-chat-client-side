// Core
import { useNavigate } from 'react-router-dom';
// Components
import { Button, Stack, Typography } from '@mui/material';

// ---------------------------------------------------------------------------------
const Body = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('mixouChatUsername');
    navigate('/');
    window.location.reload();
  };

  return (
    <Stack sx={{gap: 5, p:1}}>
      <Stack 
        direction='row' 
        sx={{
          alignItems: 'baseline',
          gap: 1
        }}>
        <Typography sx={{flexGrow: 1}}>Hangout with friends !</Typography>
        <Button
          variant="contained"
          color='error'
          onClick={handleLeaveChat}>
          LEAVE CHAT
        </Button>
      </Stack>

      <Stack sx={{gap: 2}}>
        {/*This shows messages sent from you*/}
        <Stack sx={{ alignItems: 'flex-start'}}>
          <Typography variant='caption'>You</Typography>
          <Typography>Hello there</Typography>
        </Stack>

        {/*This shows messages received by you*/}
        <Stack sx={{ alignItems: 'flex-end'}}>
          <Typography variant='caption'>Other</Typography>
            <Typography>Hey, I'm good, you?</Typography>
        </Stack>
      </Stack>

    </Stack>
  );
};

export default Body;