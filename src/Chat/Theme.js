// Core
import PropTypes from 'prop-types';
// Components
import { Container, Paper, Stack } from '@mui/material';
import Copyrights from './Copyrights';

const Theme = ({children}) => {


  // JSX --------------------------------------------------------------------------
  return (
    <>
      <Container 
        maxWidth={false} 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(#e66465, #9198e5)',
          height: '100vh'
        }}
        disableGutters>
        <Stack sx={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}> 
          <Paper elevation={3} sx={{p: 2, gap: 2}}>
            {children}
          </Paper>
        </Stack>
        <Copyrights />
      </Container>
    </>
  );

};


Theme.propTypes = {
  Children: PropTypes.node
};

export default Theme;


