// Core
import PropTypes from 'prop-types';
// Components
import { Container, Paper } from '@mui/material';

const Theme = ({children}) => {


  // JSX --------------------------------------------------------------------------
  return (
    <Container 
      maxWidth={false} 
      sx={{
        display: 'flex',
        background: 'linear-gradient(#e66465, #9198e5)', 
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      disableGutters>
      <Paper elevation={3} sx={{p: 2, gap: 2}}>
        {children}
      </Paper>
    </Container>
  );

};


Theme.propTypes = {
  Children: PropTypes.node
};

export default Theme;


