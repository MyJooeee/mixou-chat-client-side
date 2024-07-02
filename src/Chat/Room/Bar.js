// Core
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// Components
import { Box, Stack, Typography } from '@mui/material';

const Bar = ({socket}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <Stack sx={{gap: 2, p:1}}>
      <Typography variant='h5'>Mixou Chat</Typography>
      <Stack sx={{gap: 2}}>
        <Typography variant='h6'>Active users</Typography>
        <Stack>
        {users.map((user) => (
          <Stack key={user.socketID} direction='row' sx={{gap: 1, alignItems: 'center'}}>
            <Typography variant='body2'>{user.username}</Typography>
            <Box sx={{width: 8, height: 8, backgroundColor: 'green', borderRadius: '50%'}}/>
          </Stack>
        ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

Bar.propTypes = {
  socket: PropTypes.object
}

export default Bar;