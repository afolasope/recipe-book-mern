import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper>
      <form>
        <p className="title">Login to access your account</p>
        <div>
          <p>Email:</p>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <p>I don't have an account yet? <Link to='/signup'>Singup</Link></p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  form {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 1.5rem;
  }
  form p {
    color: #14171a;
  }
  input {
    display: block;
    width: 100%;
    padding: 0.4rem 0.2rem;
    font-family: inherit;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  a {
    color: #f59382;
  }
`;
