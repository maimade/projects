import React, { Component } from 'react';
import SeperatorLine from '../components/SeperatorLine';
import styled from 'styled-components';

export default class SurveyPage1Gender extends Component {
  handleUserName = event => {
    // 입력 받은 값이 username에 대한 값이면 state에 저장하고 다른 질문에 고객명으로 활용한다.
    this.setState({
      username: event.target.value,
    });

    // input에서 입력 받은 값을 부모 컴포넌트로 전달한다.
    this.props.onChange({
      username: event.target.value,
    });
  };

  handleGender = event => {
    this.props.onChange({
      gender: event.target.value,
    });
  };

  render() {
    return (
      <>
        {/* <QBox>
          <QuestionN>질문 {this.state.questionnum}</QuestionN>
          <Question>필링이 고객님을 뭐라고 부르면 좋을까요?</Question>
          <SeperatorLine />
        </QBox>
        <Input
          type="text"
          placeholder="이름"
          name="username"
          id="username"
          value={this.props.username}
          onChange={this.handleUserName}
        /> */}
        {/* 1<=이름<=20으로 제한, 조건에 따른 메시지 노출 필요 */}
        <QBox>
          <QuestionN>질문 {this.props.questionnum}</QuestionN>
          <Question>{this.props.username}님의 성별을 알려주세요.</Question>
          <AdditionalExp>
            생물학적 성별에 따라 필요한 영양 성분이 달라질 수 있어요.
          </AdditionalExp>
          <SeperatorLine />
        </QBox>
        <div style={{ position: 'relative' }}>
          <RadioBtnContainer>
            <ABoxItem>
              <RadioBtn
                type="radio"
                name="gender"
                id="gender"
                value="여성"
                checked={this.props.gender === '여성'}
                onChange={this.handleGender}
              />
              <label for="gender">&nbsp;&nbsp;&nbsp;여성</label>
            </ABoxItem>
            <ABoxItem>
              <RadioBtn
                type="radio"
                name="gender"
                id="gender"
                value="남성"
                checked={this.props.gender === '남성'}
                onChange={this.handleGender}
              />
              <label for="gender">&nbsp;&nbsp;&nbsp;남성</label>
            </ABoxItem>
          </RadioBtnContainer>
          {!this.props.isValidQuestion1 && (
            <Warning>해당하는 답변을 선택해 주세요.</Warning>
          )}
        </div>
      </>
    );
  }
}

const QBox = styled.div`
  width: 670px;
  margin: auto;
`;

const QuestionN = styled.h2`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 700;
  color: #999;
`;

const Question = styled.h2`
  padding: 10px 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const AdditionalExp = styled.span`
  padding: 15px 0;
  font-size: 16px;
  color: #999999;
`;

const RadioBtnContainer = styled.ul`
  display: relative;
  margin: auto auto 57px;
  width: 670px;
`;

const ABoxItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

// value 눌러도 pointer 되게
const RadioBtn = styled.input`
  display: absolute;
  margin-bottom: 7px;
  /* display: none; */
  /* margin: 10px; */
  &:checked {
    background-image: none;
    background-color: #f0574b;
  }
  width: 24px;
  height: 24px;
  font-size: 14px;
  /* color: #333; */
  //
`;

// const RadioBtnLabel = styled.label`
//   display: absolute;
//   margin: -2px;
//   padding: 4px 12px;
//   width: 15px;
//   height: 15px;
//---
//   border-radius: 20px;
//   border-color: #f0574b;
//   background-color: #f0574b;
// `;

const Warning = styled.div`
  position: absolute;
  bottom: -25px;
  padding-left: 15px;
  margin: 0;
  padding: 0;
  color: #f79200;
  font-size: 14;
  font-weight: 700;
`;
