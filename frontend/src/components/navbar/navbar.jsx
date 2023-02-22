import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import LoginDialog from '../loginDialog/LoginDialog';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { loadUser, loadOAuthUser } from '../../redux/actions/userActions';

import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Stack,
  IconButton,
  Badge,
  Paper,
  InputBase,
  Divider,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadOAuthUser());
  }, []);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [show, setShow] = useState(false);

  const {
    error,
    loading,
    isAuthenticated,
    isOloading,
    isOAuthenticated,
    user,
  } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setShow(true);
  };

  const logoutHandler = () => {
    dispatch(logout());
    // localStorage.removeItem('user');
  };
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    lg: 30,
                    md: 25,
                    sm: 20,
                    xs: 20,
                  },
                  ml: 1,
                }}
              >
                Dukaanwala
              </Typography>
            </Box>
          </NavLink>

          {/* <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 600,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for products.."
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper> */}
          <Stack direction="row" gap={2}>
            <NavLink
              to="/cart"
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <IconButton>
                {cartItems.length >= 0 && (
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                )}
              </IconButton>
            </NavLink>
            {isAuthenticated || isOAuthenticated ? (
              <Button
                variant="contained"
                size="sm"
                onClick={() => logoutHandler()}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                size="sm"
                onClick={() => openDialog()}
              >
                Login
              </Button>
            )}
            <LoginDialog show={show} setOpen={setShow} />
          </Stack>
        </StyledToolbar>
      </AppBar>
      {/* <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand className="nav">Dukaanwala</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button size="sm" variant="outline-success button">
                Search
              </Button>
            </Form>
            <Link to="/cart" className="nav-link cart">
              Cart
              {cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {/* {cartItems.reduce((a, c) => a + c.quantity, 0)} 
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            {false ? (
              <Spinner />
            ) : (
              <>
                {isAuthenticated || isOAuthenticated ? (
                  <Button
                    variant="warning"
                    size="sm"
                    className="button"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    size="sm"
                    className="button float-right"
                    onClick={() => openDialog()}
                  >
                    Login
                  </Button>
                )}
                <LoginDialog show={show} setOpen={setShow} />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
};

export default NavBar;
