import React from 'react';
import styled from 'styled-components';

const SignInInputBox = ({ data, onChange }) => {
  const { name, placeholder, type } = data;
  return (
    <InputValue
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      autoComplete={type}
    />
  );
};

const InputValue = styled.input`
  height: 60px;
  width: 100%;
  padding-left: 20px;
  margin: 10px 0px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  font-size: 20px;
`;

export default SignInInputBox;
