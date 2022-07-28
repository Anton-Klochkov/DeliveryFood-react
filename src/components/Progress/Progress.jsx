import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Progress = () => {
  return (
    
    <Box
      sx={{
        width: '100%',
  /*       height: '100vh',
        display: 'flex',
        alignItems: 'center', */
      }}
    >
      <LinearProgress />
    </Box>
  );
};
export default Progress;
