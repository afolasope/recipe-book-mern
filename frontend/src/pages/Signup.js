import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return (
    <Wrapper>
      <form>
        <p className="title">Create an account to get started</p>
        <div>
          <p>First Name:</p>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div>
          <p>Last Name:</p>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Signup;

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
