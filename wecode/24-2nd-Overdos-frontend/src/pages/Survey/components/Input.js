import React, { Component } from 'react';
import styled from 'styled-components';

export default class Input extends Component {
  render() {
    return (
      <InputWrapper>
        <li>
          <InputAnswer
            type={this.props.type}
            placeholder={this.props.placeholder}
            name={this.props.name}
            id={this.props.id}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </li>
      </InputWrapper>
    );
  }
}

const InputWrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 670px;
  height: 77px;
  margin: 30px auto 0;
`;

// const InputList = styled.li`
//   height: 50px;
// `;

const InputAnswer = styled.input`
  width: 670px;
  height: 50px;
  min-width: 74px;
  padding: 0 25px;
  border-radius: 4px;
  border: 1px solid #d6d4d4;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
  background-color: white;
  color: black;

  &::-webkit-input-placeholder {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #bdbdbd;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
