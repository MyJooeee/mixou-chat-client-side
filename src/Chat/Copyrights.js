// Components
import { Stack, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
// Environment variables
const DATE = new Date().getFullYear();
const APP_VERSION = process.env.REACT_APP_VERSION;

const Copyrights = () => {
  return (
    <Stack 
      direction="row" 
      sx={{
        backgroundColor: purple[900], 
        justifyContent: 'center', 
        py: 1
    }}>
    <Typography variant="body2" sx={{color: 'white'}}>© {DATE} Jonathan Dancette, all rights reserved. | v{APP_VERSION}</Typography>
  </Stack>
  );
};

export default Copyrights;