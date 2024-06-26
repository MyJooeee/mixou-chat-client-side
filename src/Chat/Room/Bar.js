// Core
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// Components
import { Stack, Typography } from '@mui/material';

const Bar = ({socket}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <Stack sx={{gap: 5, p:1}}>
      <Typography variant='h5'>Mixou Chat</Typography>
      <Stack sx={{gap: 2}}>
        <Typography variant='h6'>Active users</Typography>
        <Stack>
        {users.map((user) => (
          <Typography key={user.socketID} variant='body2'>{user.username}</Typography>
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