// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Box>
      <h2>Call a Friend</h2>
        <Divider>
          <Typography variant='subtitle'>Your friendly contact app</Typography>
        </Divider>
    </Box>
  );
};

export default Header;
