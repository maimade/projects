import React, { Component } from 'react';
import SeperatorLine from '../components/SeperatorLine';
import Input from '../components/Input';
import styled from 'styled-components';

export default class SurveyPage2Age extends Component {
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

  handleAge = event => {
    this.props.onChange({
      // age: Number(event.target.value),
      age: event.target.value,
    });
  };

  // 이걸 버튼에 넘겨야 해
  // checkValid = () => {
  //   const { age } = this.state;
  //   return age >= 10 && age <= 110;
  // };

  render() {
    return (
      <>
        <QBox>
          <QuestionN>질문 {this.props.questionnum}</QuestionN>
          <Question>{this.props.username}님은 몇 살이신가요?</Question>
          {/* 질문1의 이름 삽입 필요 */}
          <AdditionalExp>
            나이에 따라 필요한 영양 성분이 달라질 수 있어요.
          </AdditionalExp>
          <SeperatorLine />
        </QBox>
        <div className="answerInput">
          <Input
            type="number"
            placeholder="나이"
            name="age"
            id="age"
            value={this.props.age}
            onChange={this.handleAge}
          />
          {!this.props.isValidQuestion2 && (
            <Warning>10부터 110까지 입력 가능합니다.</Warning>
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

const Warning = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f79200;
  font-size: 14;
  font-weight: 700;
  // 1차 때 했던 걸 적용하자.
`;
