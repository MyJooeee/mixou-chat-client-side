// Core
import { useState } from 'react';
// Components
import { Button, Stack, TextField } from '@mui/material';

// ---------------------------------------------------------------------------------
const Footer = () => {
  const [message, setMessage] = useState('');

  // Handlers ----------------------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ userName: localStorage.getItem('mixouChatUsername'), message });
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

export default Footer;