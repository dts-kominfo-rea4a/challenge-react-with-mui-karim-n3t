// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const {photo, name, phone, email} = data;
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={photo} sx={{width: '70px', height: '70px', mr: '1em'}} />
        </ListItemAvatar>
        <Box>
          <Typography variant='body1'>{name}</Typography>
          <Typography variant='subtitle2'> {phone} </Typography>
          <Typography variant='body2'> {email} </Typography>
        </Box>
      </ListItem>
    </List>
  );
};

export default Contact;
