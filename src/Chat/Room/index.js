// Core
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
// Components
import { Divider, Stack } from '@mui/material';
import Theme from '../Theme';
import Bar from './Bar';
import Body from './Body';
import Footer from './Footer';
// Logic
import { useMediaQueries } from '../../hooks/useCustomHooks';

// ---------------------------------------------------------------------------------
const Mixou = ({socket}) => {

  const [messages, setMessages] = useState([]);
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  const lastMessageRef = useRef(null);
  const {isMediumDevice} = useMediaQueries();

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
    <Theme ref={refContainer} paperProps={{flexGrow: 1, m: isMediumDevice ? 0 : 5}}>
      <Stack direction='row' sx={{height: '100%', justifyContent: 'space-between'}}>
        <Bar socket={socket}/>
        <Divider orientation='vertical'/>
        <Stack
          sx={{
            width: '75%', 
            justifyContent: 'space-between'
          }}> 
          <Body
            isMediumDevice={isMediumDevice}
            dimensions={dimensions} 
            messages={messages} 
            lastMessageRef={lastMessageRef}
          />
          <Footer isMediumDevice={isMediumDevice} socket={socket}/>
        </Stack>
      </Stack>
    </Theme>
  );
};

Mixou.propTypes = {
  socket: PropTypes.object
}

export default Mixou;