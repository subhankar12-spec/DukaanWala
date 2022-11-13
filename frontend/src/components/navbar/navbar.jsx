import React, { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import LoginDialog from '../loginDialog/LoginDialog';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { loadUser, loadOAuthUser } from '../../redux/actions/userActions';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

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
      <Navbar bg="dark" variant="dark">
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
                  {/* {cartItems.reduce((a, c) => a + c.quantity, 0)} */}
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
      </Navbar>
    </>
  );
};

export default NavBar;
