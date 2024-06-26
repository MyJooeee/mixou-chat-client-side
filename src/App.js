// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';
// Local components
import Login from './Chat';
import Mixou from './Chat/Room';
// Environment variables
const MIXOU_SERVER_URL = process.env.REACT_APP_MIXOU_SERVER_URL;
// Connect client to the server
const socket = socketIO.connect(MIXOU_SERVER_URL);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login socket={socket} />}></Route>
          <Route path="/mixou" element={<Mixou socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
