import React, { Component } from 'react';
import styled from 'styled-components';

export default class Btn extends Component {
  render() {
    return (
      <>
        <Line />
      </>
    );
  }
}

const Line = styled.hr`
  width: 670px;
  margin: 15px 0;
  border-width: 0;
  border-top: 1px solid #eee;
`;
