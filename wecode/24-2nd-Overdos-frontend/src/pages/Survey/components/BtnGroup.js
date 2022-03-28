import React, { Component } from 'react';
import styled from 'styled-components';

const LAST_STEP_NUMBER = 8;

export default class Btn extends Component {
  render() {
    return (
      <BtnWrapper>
        <PreviousBtn onClick={this.props.onPrevBtnClick}>이전</PreviousBtn>
        {/* <NextBtn onClick={this.props.onNextBtnClick}>다음</NextBtn> */}

        {/* step이 8보다 작으면 위와 같이, 8이면 '결과 보기'로 문구 변경 */}
        {this.props.stepNumber === LAST_STEP_NUMBER ? (
          <NextBtn onClick={this.props.onFinishBtnClick}>결과 보기</NextBtn>
        ) : (
          <NextBtn onClick={this.props.onNextBtnClick}>다음</NextBtn>
        )}
      </BtnWrapper>
    );
  }
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 50px auto 0;
`;

const PreviousBtn = styled.button`
  /* appearance: none; */
  display: inline-block;
  width: 158px;
  min-width: 74px;
  height: 50px;
  padding: 0 36px;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  outline: none;
  text-align: center;
  color: black;
  background-color: white;
  cursor: pointer;
`;

const NextBtn = styled.button`
  /* appearance: none; */
  display: inline-block;
  width: 430px;
  height: 50px;
  padding: 0 36px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  outline: none;
  border: none;
  color: #fff;
  background-color: #333;
  cursor: pointer;
`;
