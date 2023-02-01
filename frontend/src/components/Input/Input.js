import React from 'react';
import styled from 'styled-components';

const Input = ({ label, name, id, type }) => {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={id} name={name} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  
`;
