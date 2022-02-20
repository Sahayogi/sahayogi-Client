import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/sahayogi.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;
const PasswordField = styled.div`
  display: flex;
  flex-direction: row;
`;
const VisibilityButton = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  width: 20%;
`;

const LoginRight = styled.div`
  background-color: grey;
  flex: 100%;
  display: flex;
  position: relative;
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
`;

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  color: white;
  h1 {
    margin: 0 200px;
  }
  img {
    height: 9rem;
    margin: auto;
    margin-right: 40px;
  }
  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    h1 {
      margin: auto;
      padding: 5px 0px;
      font-size: 20px;
    }
  }
`;

const LoginForm = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 400px;
  margin: auto;
  gap: 2rem;
  border-radius: 20px;
  background-color: white;

  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 30px 30px;
  }
`;
const LoginInput = styled.input`
  height: 2.8rem;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 10px;
  font-size: 16px;
  background-color: rgb(53, 51, 51);
  &:focus {
    background-color: rgb(63, 65, 65);
    border: none;
  }
`;
const InputLabel = styled.label`
  color: black;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
`;
const LoginButton = styled.button`
  padding: 10px;
  background-color: rgb(53, 51, 51);
  border-radius: 10px;
  margin: auto;
  color: white;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: grey;
  }
  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      navigate('/');
    }
  }, []);

  const {
    data,
    loadUser,
    // login: loginAction,
    // loginSuccess,
    // loginError,
  } = useAuth();

  // const handleLogin = (e) => {
  //   if (email === "anisha@gmail.com" && password === "12345") {
  //     loadUser({ email });
  //   }
  // };
  const handleLogin = async (e) => {
    console.log('j');
    e.preventDefault();
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem('access-token', data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
      // setError(error.response.data.error);
      // setTimeout(() => {
      //   setError('');
      // }, 5000);
    }
  };
  return (
    <Container>
      <LoginRight>
        <Wrapper>
          <h1>LOGIN</h1>
          <LoginForm>
            <InputLabel htmlFor='email'> Email: </InputLabel>
            <LoginInput
              type='email'
              value={email}
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel htmlFor='password'> Password: </InputLabel>
            <PasswordField>
              <LoginInput
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <VisibilityButton onClick={handleShow}>
                {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </VisibilityButton>
            </PasswordField>

            <LoginButton onClick={handleLogin}>
              {data.loggingIn ? 'logging In...' : 'login'}
            </LoginButton>
          </LoginForm>
        </Wrapper>
      </LoginRight>
    </Container>
  );
};

export default Login;
