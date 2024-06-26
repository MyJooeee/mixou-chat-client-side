// Core
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// Components
import { Container, Paper, Stack } from '@mui/material';
import Copyrights from './Copyrights';


const Theme = forwardRef(({children, paperProps = null, sx = null}, refContainer) => {


  // JSX --------------------------------------------------------------------------
  return (
    <>
      <Container
        ref={refContainer}
        maxWidth={false} 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(#e66465, #9198e5)',
          height: '100vh'
        }}
        disableGutters>
        <Stack sx={{flexGrow: 1, ...sx}}>
          <Paper elevation={3} sx={{p: 2, gap: 2, ...paperProps}}>
            {children}
          </Paper>
        </Stack>
        <Copyrights />
      </Container>
    </>
  );

});


Theme.propTypes = {
  Children: PropTypes.node,
  refContainer: PropTypes.oneOfType([
    // Either a function
    PropTypes.func, 
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  paperProps: PropTypes.object,
  sx: PropTypes.object
};

export default Theme;


