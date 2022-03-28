import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <CategoryBox>
          <Category selected={this.props.step < 3}>기본 정보</Category>
        </CategoryBox>
        <CategoryBox>
          <Category selected={this.props.step >= 3 && this.props.step < 6}>
            증상/불편
          </Category>
        </CategoryBox>
        <CategoryBox>
          <Category selected={this.props.step >= 6}>설문 완료</Category>
        </CategoryBox>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 91px;
  top: 34px;
  margin: auto;
`;

const CategoryBox = styled.li`
  position: relative;
  width: 170px;
  height: 90px;
  padding: 30px;
`;

const Category = styled.span`
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #bdbdbd;

  ${props =>
    props.selected &&
    css`
      color: #f79200;
    `}
`;
