import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  TextField,
  Button,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const LoginDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //login
  const loginInitialValues = {
    name: '',
    email: '',
    password: '',
  };
  const [logIn, setLogIn] = useState(loginInitialValues);
  const onValueChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const loginUser = () => {
    console.log(logIn);
    dispatch(login(logIn.email, logIn.password));

    setOpen(false);
  };

  const registerUser = () => {
    console.log(logIn);
    dispatch(register(logIn.name, logIn.email, logIn.password));
    setOpen(false);
  };

  const [signUp, toggleSignUp] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      toggleSignUp(true);
    }, 500);
  };
  const toggle = () => toggleSignUp(false);
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (isAuthenticated) {
  //     history.push(redirect);
  //   }
  // }, [dispatch, error, alert, history, isAuthenticated, redirect]);
  return (
    <Dialog open={open} onClose={handleClose}>
      {signUp ? (
        <form>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth={400}
            alignItems="center"
            justifyContent={'center'}
            margin="auto"
            padding={3}
          >
            <Typography variant="h4" padding={3} textAlign="center">
              Login
            </Typography>
            <TextField
              type={'text'}
              variant="outlined"
              onChange={(e) => onValueChange(e)}
              name="email"
              placeholder="Email"
              margin="normal"
            ></TextField>
            <TextField
              type={'password'}
              name="password"
              onChange={(e) => onValueChange(e)}
              variant="outlined"
              placeholder="Password"
              margin="normal"
            ></TextField>
            <Button
              variant="contained"
              color="warning"
              sx={{ marginTop: 3 }}
              onClick={() => loginUser()}
            >
              Login
            </Button>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <Button variant="contained" color="warning" sx={{ marginTop: 3 }}>
              Login
            </Button>
            <CreateAccount onClick={() => toggle()}>
              New to Dukaanwala? Create an account
            </CreateAccount>
          </Box>
        </form>
      ) : (
        <form>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth={400}
            alignItems="center"
            justifyContent={'center'}
            margin="auto"
            padding={3}
          >
            <Typography variant="h4" padding={3} textAlign="center">
              SignUp
            </Typography>
            <TextField
              type={'text'}
              variant="outlined"
              onChange={(e) => onValueChange(e)}
              name="name"
              placeholder="Name"
              margin="normal"
            ></TextField>
            <TextField
              type={'text'}
              variant="outlined"
              onChange={(e) => onValueChange(e)}
              name="email"
              placeholder="Email"
              margin="normal"
            ></TextField>
            <TextField
              type={'password'}
              variant="outlined"
              placeholder="Password"
              onChange={(e) => onValueChange(e)}
              name="password"
              margin="normal"
            ></TextField>
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <Button
              variant="contained"
              color="warning"
              sx={{ marginTop: 3 }}
              onClick={() => registerUser()}
            >
              SignUp
            </Button>
          </Box>
        </form>
      )}
    </Dialog>
  );
};

export default LoginDialog;
