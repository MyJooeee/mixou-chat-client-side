// Core
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// Components
import { Button, Stack, Typography } from '@mui/material';

// ---------------------------------------------------------------------------------
const Body = ({messages}) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('mixouChatUsername');

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
        <Typography sx={{flexGrow: 1}}>Welcome <strong>{username}</strong>. Hangout with friends !</Typography>
        <Button
          variant="contained"
          color='error'
          onClick={handleLeaveChat}>
          LEAVE CHAT
        </Button>
      </Stack>

      <Stack sx={{gap: 2}}>
        {messages.map((message) =>
            message.name === localStorage.getItem('mixouChatUsername') ? (
              <Stack sx={{alignItems: 'flex-end'}}>
                <Typography variant='caption'>You</Typography>
                <Typography>{message.text}</Typography>
              </Stack>
            ) : (
              <Stack sx={{alignItems: 'flex-start'}}>
                <Typography variant='caption'>{message.name}</Typography>
                <Typography>{message.text}</Typography>
              </Stack>
            )
          )}
      </Stack>
    </Stack>
  );
};

Body.propTypes = {
  messages: PropTypes.array
}

export default Body;