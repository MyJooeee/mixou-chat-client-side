// Core
import PropTypes from 'prop-types';
import { useState } from 'react';
// Components
import { Button, Stack, TextField } from '@mui/material';

// ---------------------------------------------------------------------------------
const Footer = ({socket}) => {

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

  // JSX --------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <Stack 
        direction='row' 
        sx={{alignItems: 'baseline', gap: 1, p: 1}}>
          <TextField
            label="Message"
            id="margin-normal"
            name="message"
            sx={{flexGrow: 1}}
            value={message}
            onChange={handleMessage}
            />
          <Button 
            type="submit" 
            variant="contained" 
            color='primary'
            >
            SEND
          </Button>
      </Stack>
    </form>
  );
};

Footer.propTypes = {
  socket: PropTypes.object
}

export default Footer;