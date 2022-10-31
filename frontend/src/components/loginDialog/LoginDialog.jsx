import React from 'react';
import { Dialog, Box, Typography, TextField, Button } from '@mui/material';

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog open={open} onClose={handleClose}>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          padding={7}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            type={'text'}
            variant="outlined"
            placeholder="Email"
            margin="normal"
          ></TextField>
          <TextField
            type={'password'}
            variant="outlined"
            placeholder="Password"
            margin="normal"
          ></TextField>
          <Button variant="contained" color="warning" sx={{ marginTop: 3 }}>
            Login
          </Button>
          
        </Box>
      </form>
    </Dialog>
  );
};

export default LoginDialog;
