import React, { Component } from 'react';
import SeperatorLine from '../components/SeperatorLine';
import styled from 'styled-components';

// fetch 함수로 사용자 이름 받아와야 함. 아래에서는 {this.props.username}
// 체크박스 value를 동적라우팅 URL 영역에 입력

export default class SurveyPage3BodyPart extends Component {
  constructor() {
    super();
    this.state = {
      bodypart: [],
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

  // // 아래는 목데이터용 코드
  // componentDidMount() {
  //   fetch('data/bodypart.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       // console.log(res);
  //       // console.log(res.result);
  //       this.setState({ bodypart: res.result });
  //     });
  // }

  // // 아래는 통신용 코드
  componentDidMount() {
    fetch('http://10.58.2.22:8000/survey/survey', {
      method: 'GET',
      headers: {
        Authorization:
          // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.FqyzFpiAgm4xffg8zgOnB6xMTrdYKSHRkHp0PnVBxLY',
          localStorage.getItem('user_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        // console.log(res.result);
        this.setState({ bodypart: res.result });
      });
  }

  handleBodyPart = event => {
    // 값이 들어오면 아래 순서대로 진행
    // (1) 값이 selectedItems에 있는지 확인
    const cloneArray = JSON.parse(JSON.stringify(this.state.selectedItems));
    const index = cloneArray.indexOf(event.target.value);
    // (2) 값이 있으면 selectedItems에서 제거
    if (index > -1) {
      cloneArray.splice(index, 1);
    }
    // (3) 값이 없으면 selectedItems에 추가
    if (index === -1) {
      cloneArray.push(event.target.value);
    }
    this.setState({
      selectedItems: cloneArray,
    });

    this.props.onChange({
      bodypart: cloneArray,
    });
  };

  render() {
    return (
      <>
        <QuestionBox>
          <QuestionN>질문 {this.props.questionnum}</QuestionN>
          <Question>
            {this.props.username}님이 불편하시거나 걱정되는 최대 2가지 선택해
            주세요.
          </Question>
          <AdditionalExp>
            우선적으로 관리가 필요한 것을 선택하세요.
          </AdditionalExp>
          <SeperatorLine />
        </QuestionBox>
        {/* 최대 2개 선택으로 제한, 조건에 따른 메시지 노출 필요 */}
        <div>
          <AnswerBox>
            {this.state.bodypart.map(item => (
              <AnswerBoxItem>
                <Checkbox
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  value={item.name}
                  checked={this.props.bodypart.indexOf(item.name) !== -1}
                  onChange={this.handleBodyPart}
                />
                <label for={item.name}>{item.name}</label>
              </AnswerBoxItem>
            ))}
          </AnswerBox>
          {!this.props.isValidQuestion3 && (
            <Warning>해당하는 답변을 1~2개 선택해 주세요.</Warning>
          )}
        </div>
      </>
    );
  }
}

const QuestionBox = styled.div`
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

const AnswerBox = styled.ul`
  display: inline-block;
  vertical-align: middle;
  width: 700px;
  margin: -10px;
  padding: 0 0 5px 0;
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
