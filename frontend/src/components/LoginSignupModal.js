import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginSignupModal = ({ setOpenModal }) => {
  return (
    <Wrapper>
      <p>
        <span onClick={() => setOpenModal(false)}>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </span>
        OR
        <span onClick={() => setOpenModal(false)}>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </span>
        to add recipes
      </p>
    </Wrapper>
  );
};

export default LoginSignupModal;

const Wrapper = styled.div`
  position: absolute;
  width: 30%;
  background-color: #f8f5f3;
  right: 0;
  text-align: center;
  padding: 1rem;
  button {
    padding: 0.5rem 1rem;
    font-family: inherit;
    font-size: inherit;
    background-color: #f38e82;
    border: transparent;
    border-radius: 6px;
    margin: 0 0.6rem 0 0.6rem;
    cursor: pointer;
    &:hover {
      color: #f38e60;
      background-color: #fff;
    }
  }
`;
