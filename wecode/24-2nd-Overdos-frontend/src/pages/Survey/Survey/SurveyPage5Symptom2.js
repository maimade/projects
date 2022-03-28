import React, { Component } from 'react';
import SeperatorLine from '../components/SeperatorLine';
// import eye from './eye.png';
import styled from 'styled-components';

// fetch 함수로 사용자 이름 받아와야 함. 아래에서는 {this.props.username}
// 질문에 따라 이미지가 변경되어야 함. (지금은 eye.png)

// 동적 라우팅으로 받아와야 함

export default class SurveyPage5Symptom2 extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }

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

  handleSymptom = event => {
    const cloneArray = JSON.parse(JSON.stringify(this.props.selectedSymptom2));
    const index = cloneArray.indexOf(Number(event.target.value));
    if (index > -1) {
      cloneArray.splice(index, 1);
    }
    if (index === -1) {
      cloneArray.push(Number(event.target.value));
    }
    this.setState({
      selectedItems: cloneArray,
    });

    this.props.onChange({
      selectedSymptom2: cloneArray,
    });
  };

  render() {
    return (
      <>
        <QuestionBox>
          <QuestionHeader>
            <QuestionWrapper>
              <QuestionNum>
                질문 {this.props.questionnum} &nbsp; | &nbsp;{' '}
                {this.props.bodypart}
              </QuestionNum>
              {/* 질문 5가 될지 질문 6이 될지 모름. 설정 필요 */}
              <Question>
                {this.props.username}님에게 해당하는 것을 최대 2가지
                선택해주세요.
              </Question>
            </QuestionWrapper>
            {/* <IconWrapper>
              <BodyIcon alt="눈 아이콘" src={eye} />
            </IconWrapper> */}
          </QuestionHeader>
          <AdditionalExp>
            우선적으로 관리가 필요한 것을 선택하세요.
          </AdditionalExp>
          <SeperatorLine />
        </QuestionBox>
        {/* 최대 2개 선택으로 제한, 조건에 따른 메시지 노출 필요 */}
        <div>
          <AnswerBox>
            {this.props.symptomOptions.map(item => {
              return (
                <AnswerBoxItem>
                  <Checkbox
                    type="checkbox"
                    name={item.symptom}
                    id={item.id}
                    value={item.id}
                    checked={
                      this.props.selectedSymptom2.indexOf(item.id) !== -1
                    }
                    onChange={this.handleSymptom}
                  />
                  <label for={item.symptom}>{item.symptom}</label>
                </AnswerBoxItem>
              );
            })}
          </AnswerBox>
          {!this.props.isValidQuestion5 && (
            <Warning>해당하는 답변을 1~2개 선택해 주세요.</Warning>
          )}
        </div>
      </>
    );
  }
}

const QuestionBox = styled.div`
  width: 670px;
`;

const QuestionHeader = styled.div`
  display: flex;
`;

const QuestionWrapper = styled.div`
  width: 600px;
`;

const QuestionNum = styled.h2`
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

// const IconWrapper = styled.div`
//   margin-top: 15px;
//   width: 60px;
//   height: 60px;
//   border: 1px solid #bdbdbd;
//   border-radius: 50px;
// `;

// const BodyIcon = styled.img`
//   position: absolute;
//   width: 55px;
//   height: 55px;
// `;

const AdditionalExp = styled.span`
  padding: 15px 0;
  font-size: 16px;
  color: #999999;
`;

const AnswerBox = styled.ul`
  display: inline-block;
  vertical-align: middle;
  width: 700px;
  margin: -10px;
  padding: 0;
`;

const AnswerBoxItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  /* margin-left: 0;
  padding-left: 0; */
`;

const Checkbox = styled.input`
  width: 50px;
  height: 25px;
  margin: 0;
  padding-left: 0;
  /* border-color: red;
  border-radius: 3px;
  line-height: 20px; */
  cursor: pointer;
`;

const Warning = styled.div`
  position: absolute;
  padding-left: 15px;
  padding: 0;
  margin: 15px 0 0 0;
  color: #f79200;
  font-size: 14;
  font-weight: 700;
`;
