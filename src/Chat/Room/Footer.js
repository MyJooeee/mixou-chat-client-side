// Core
import PropTypes from 'prop-types';
import { useState } from 'react';
// Components
import { Button, IconButton, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// ---------------------------------------------------------------------------------
const Footer = ({isMediumDevice, socket}) => {

  const [message, setMessage] = useState('');

  // Handlers ----------------------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() && localStorage.getItem('mixouChatUsername')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('mixouChatUsername'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id
      });
    }
    setMessage('');
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

    // Local component
    const SendAction = () => {
      if (isMediumDevice) return (
        <IconButton type="submit">
          <SendIcon/>
        </IconButton> 
      );
  
      return (
        <Button 
          type="submit" 
          variant="contained" 
          color='primary'
          >
          SEND
        </Button>
      );
    };
  

  // JSX --------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <Stack 
        direction='row' 
        sx={{alignItems: 'center', gap: 1, p: 1}}>
          <TextField
            label="Message"
            id="margin-normal"
            name="message"
            sx={{flexGrow: 1}}
            value={message}
            onChange={handleMessage}
            />
          <SendAction />
      </Stack>
    </form>
  );
};

Footer.propTypes = {
  isMediumDevice: PropTypes.bool,
  socket: PropTypes.object
}

export default Footer;