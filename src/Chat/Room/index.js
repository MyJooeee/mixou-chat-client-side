// Core
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// Components
import { Stack } from '@mui/material';
import Theme from '../Theme';
import Bar from './Bar';
import Body from './Body';
import Footer from './Footer';

// ---------------------------------------------------------------------------------
const Mixou = ({socket}) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);


  return (
    <Theme paperProps={{flexGrow: 1, m: 5}}>
      <Stack 
        direction='row' 
        sx={{
          height: '100%', 
          justifyContent: 'space-between', 
          border: '1px solid blue'
        }}>
        <Bar socket={socket}/>
        <Stack
          sx={{
            width: '75%', 
            border: '1px solid red', 
            justifyContent: 'space-between'
          }}> 
          <Body messages={messages}/>
          <Footer socket={socket}/>
        </Stack>
      </Stack>
    </Theme>
  );
};

Mixou.propTypes = {
  socket: PropTypes.object
}

export default Mixou;