// Core
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import Theme from './Theme';
// Images
import Mixou from '../Media/mixou.jpg';

// ---------------------------------------------------------------------------------
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [errorUsername, SetErrorUsername] = useState(true);

  // Handlers ----------------------------------------------------------------------
  const handleSubmit = (event) => {
    if (errorUsername) return;
    event.preventDefault();
    localStorage.setItem('mixouChatUsername', username);
    navigate('/mixou');
  };

  const handleInput = (event) => {
    const username = event.target.value;
    if (!username || username.length < 6) {
      SetErrorUsername(true);
      return;
      }
    SetErrorUsername(false);
    setUsername(event.target.value);
  };

  // JSX --------------------------------------------------------------------------
  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Stack sx={{alignItems: 'center', gap: 1}}>
          <Avatar src={Mixou} alt="Mixou" sx={{width: 128, height: 128}} />
          <Typography variant="h5" component="h3" sx={{textAlign: 'center'}}>Welcome to Mixou Chat !</Typography>
            <Typography component="p">Sign in before access to Chat.</Typography>
            <TextField
              label="Name"
              id="margin-normal"
              name="name"
              helperText="Enter a username with 6 characters at least."
              onChange={handleInput}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={errorUsername}
            >
              Sign in
            </Button>
        </Stack>
      </form>
    </Theme>
  );
};

export default Login;