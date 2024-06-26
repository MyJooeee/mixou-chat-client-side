// Core
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
// Components
import { Stack } from '@mui/material';
import Theme from '../Theme';
import Bar from './Bar';
import Body from './Body';
import Footer from './Footer';

// ---------------------------------------------------------------------------------
const Mixou = ({socket}) => {

  const [messages, setMessages] = useState([]);
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  const lastMessageRef = useRef(null);

  // Effects -----------------------------------------------------------------------
    useEffect(() => {
      // Container size
      if (refContainer.current) {
        setDimensions({
          width: refContainer.current.offsetWidth,
          height: refContainer.current.offsetHeight
        });
      }
    }, []);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // JSX ----------------------------------------------------------------------------
  return (
    <Theme ref={refContainer} paperProps={{flexGrow: 1, m: 5}}>
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
          <Body 
            dimensions={dimensions} 
            messages={messages} 
            lastMessageRef={lastMessageRef}
          />
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