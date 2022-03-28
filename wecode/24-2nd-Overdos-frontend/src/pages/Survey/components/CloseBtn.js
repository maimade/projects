import React, { Component } from 'react';
import closebtn from './closebtn.png';
import styled from 'styled-components';

export default class CloseBtn extends Component {
  render() {
    return (
      <CloseBtnWrapper>
        <XButton alt="설문 닫기" src={closebtn}></XButton>
      </CloseBtnWrapper>
    );
  }
}

const CloseBtnWrapper = styled.div`
  position: absolute;
  right: -25px;
  top: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 8%);
`;

const XButton = styled.img`
  width: 13px;
  height: 13px;
  margin: 19px 0 0 19px;
`;
