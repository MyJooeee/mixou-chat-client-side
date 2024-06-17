import socketIO from 'socket.io-client';
const APP_VERSION = process.env.REACT_APP_VERSION;
const MIXOU_SERVER_URL = process.env.REACT_APP_MIXOU_SERVER_URL;
const socket = socketIO.connect(MIXOU_SERVER_URL);

const Chat = () => {
  
  return <p>Hello Chat !</p>;
};

export default Chat;