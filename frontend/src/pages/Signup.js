import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import authService from '../service/authService';
import { useState } from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const Signup = () => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState();

  const onSubmit = async (values) => {
    const newValues = {
      ...values,
      firstName: values.firstName.toLowerCase(),
      lastName: values.lastName.toLowerCase(),
    };
    try {
      const response = await authService.register(newValues);
      console.log(response);
      if (response?.data.token) {
        setAuthToken(
          localStorage.setItem('token', JSON.stringify(response.data.token))
        );
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <p className="title">Create an account to get started</p>
          <div className="form-control">
            <label htmlFor="firstName">First Name:</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="label">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <button type="submit">signup</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: calc(100vh - 80px); */
  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .form-control {
    margin-bottom: 0.5rem;
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
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  a {
    color: #f59382;
  }
  .error {
    font-size: 0.6rem;
    color: red;
  }
`;
