import React, { useState, useEffect } from 'react';
import logo from '../../assets/Dukaanwala-logos_black.png';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
  Button,
} from '@mui/material';
import LoginDialog from '../loginDialog/LoginDialog';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { loadUser } from '../../redux/actions/userActions';


const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);

  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const openDialog = () => {
    setOpen(true);
  };

  const logoutHandler = () => {
    dispatch(logout());
    // localStorage.removeItem('user');
  };
  return (
    <Box>
      <AppBar sx={{ background: '#E0E0E0', height: '100px' }}>
        <Toolbar>
          <img src={logo} alt="logo" style={{ width: 300, marginTop: -50 }} />
          {isAuthenticated ? (
            <Button
              variant="contained"
              color="warning"
              sx={{ ml: 100 }}
              onClick={() => logoutHandler()}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="warning"
              sx={{ ml: 100 }}
              onClick={() => openDialog()}
            >
              Login
            </Button>
          )}
          <LoginDialog open={open} setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
