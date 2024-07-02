// Core
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// Components
import { Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

// ---------------------------------------------------------------------------------
const Body = ({isMediumDevice, dimensions, messages, lastMessageRef}) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('mixouChatUsername');
  const heightMessages = dimensions.height * 0.48;

  // Handlers -----------------------------------------------------------------------
  const handleLeaveChat = () => {
    localStorage.removeItem('mixouChatUsername');
    navigate('/');
    window.location.reload();
  };

  // Local component
  const LogoutAction = () => {
    if (isMediumDevice) return (
      <IconButton onClick={handleLeaveChat}>
        <LogoutIcon/>
      </IconButton> 
    );

    return (
      <Button
        variant="contained"
        color='error'
        onClick={handleLeaveChat}>
        LEAVE CHAT
      </Button>
    );
  };

  // JSX ----------------------------------------------------------------------------
  return (
    <Stack sx={{gap: 1, p:1}}>
      <Stack 
        direction='row' 
        sx={{
          alignItems: 'center',
          gap: 1
        }}>
        <Typography sx={{flexGrow: 1}}>Welcome <strong>{username}</strong></Typography>
        <LogoutAction />
      </Stack>

      <Divider orientation='horizontal'/>

      <Stack sx={{ height: heightMessages, overflowY: 'scroll', gap: 2}}>
        {messages.map((message) =>
            message.name === localStorage.getItem('mixouChatUsername') ? (
              <Stack key={message.id} sx={{alignItems: 'flex-end'}}>
                <Typography variant='caption'>You</Typography>
                <Typography>{message.text}</Typography>
              </Stack>
            ) : (
              <Stack key={message.id} sx={{alignItems: 'flex-start'}}>
                <Typography variant='caption'>{message.name}</Typography>
                <Typography>{message.text}</Typography>
              </Stack>
            )
          )}
          <Stack ref={lastMessageRef} />
      </Stack>
    </Stack>
  );
};

Body.propTypes = {
  isMediumDevice: PropTypes.bool,
  dimensions: PropTypes.object,
  messages: PropTypes.array,
  lastMessageRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func, 
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Body;