// Components
import { Stack } from '@mui/material';
import Theme from '../Theme';
import Bar from './Bar';
import Body from './Body';
import Footer from './Footer';

// ---------------------------------------------------------------------------------
const Mixou = ({socket}) => {
  return (
    <Theme paperProps={{flexGrow: 1, m: 5}}>
      <Stack 
        direction='row' 
        sx={{
          height: '100%', 
          justifyContent: 'space-between', 
          border: '1px solid blue'
        }}>
        <Bar />
        <Stack
          sx={{
            width: '75%', 
            border: '1px solid red', 
            justifyContent: 'space-between'
          }}> 
          <Body />
          <Footer />
        </Stack>
      </Stack>
    </Theme>
  );
};

export default Mixou;