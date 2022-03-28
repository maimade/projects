import React, { Component } from 'react';
import Header from '../components/Header';
import SurveyIntro from './SurveyIntro';
import SurveyPage1Gender from './SurveyPage1Gender';
import SurveyPage2Age from './SurveyPage2Age';
import SurveyPage3BodyPart from './SurveyPage3BodyPart';
import SurveyPage4Symptom1 from './SurveyPage4Symptom1';
import SurveyPage5Symptom2 from './SurveyPage5Symptom2';
import SurveyPageHeight from './SurveyPageHeight';
import SurveyPageWeight from './SurveyPageWeight';
import SurveyOutro from './SurveyPageOutro';
import BtnGroup from '../components/BtnGroup';
import CloseBtn from '../components/CloseBtn';
import SurveyBar from './SurveyBar/SurveyBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Survey extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      username: '',
      gender: '',
      age: null,
      height: null,
      weight: null,
      bodypart: [],
      symptomOptions1: null,
      symptomOptions2: null,
      selectedSymptom1: [],
      selectedSymptom2: [],
      isValidQuestion1: true,
      isValidQuestion2: true,
      isValidQuestion3: true,
      isValidQuestion4: true,
      isValidQuestion5: true,
      isValidQuestion6: true,
      isValidQuestion7: true,
    };
  }

  componentDidMount = () => {
    const userName = localStorage.getItem('user_name');
    this.setState({ username: userName });
  };

  validateQuestion1 = () => {
    return this.state.gender !== '';
  };

  // 2번 질문에 대한 유효성 검증 함수
  validateQuestion2 = () => {
    return this.state.age >= 10 && this.state.age <= 110;
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 3번 질문에 대한 유효성 검증 함수
  validateQuestion3 = () => {
    return this.state.bodypart.length > 0 && this.state.bodypart.length < 3;
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 4번 질문에 대한 유효성 검증 함수
  validateQuestion4 = () => {
    return (
      this.state.selectedSymptom1.length > 0 &&
      this.state.selectedSymptom1.length < 3
    );
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 5번 질문에 대한 유효성 검증 함수
  validateQuestion5 = () => {
    return (
      this.state.selectedSymptom2.length > 0 &&
      this.state.selectedSymptom2.length < 3
    );
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 6번 질문에 대한 유효성 검증 함수
  validateQuestion6 = () => {
    return this.state.height >= 100 && this.state.height <= 250;
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 7번 질문에 대한 유효성 검증 함수
  validateQuestion7 = () => {
    return this.state.weight >= 30 && this.state.weight <= 190;
    // true: 유효성 검사 통과, false: 유효성 검사 실패
  };

  // 아래는 통신용 코드
  requestSymptomOptions = () => {
    // const query = `first-body=${back}&second-body=${eyes}`;
    // bodypart에는 1개는 무조건 담긴다. 2번째는 있을수도 있고, 없을수도 있다. 2번째가 있으면 추가해줘야한다.
    let query = `first-body=${this.state.bodypart[0]}`;
    // console.log(query);
    if (this.state.bodypart.length === 2) {
      query = query + `&second-body=${this.state.bodypart[1]}`;
    }
    // console.log(query);

    return new Promise((resolve, reject) => {
      fetch(`http://10.58.2.22:8000/survey/symptom?${query}`, {
        method: 'GET',
        headers: {
          Authorization:
            // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.FqyzFpiAgm4xffg8zgOnB6xMTrdYKSHRkHp0PnVBxLY',
            localStorage.getItem('user_token'),
        },
      })
        // fetch('data/symptom.json')
        .then(res => res.json())
        .then(res => {
          console.log(res);
          // console.log(res.result);
          this.setState({ symptomOptions1: res.First_Body });
          if (res.Second_Body) {
            this.setState({ symptomOptions2: res.Second_Body });
          }
          resolve();
        })
        .catch(err => {
          reject();
        });
    });
  };

  postQuestion2Data = () => {
    fetch('http://10.58.2.22:8000/survey/survey', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('user_token'),
        // Authorization:
        // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.FqyzFpiAgm4xffg8zgOnB6xMTrdYKSHRkHp0PnVBxLY',
      },
      body: JSON.stringify({
        gender: this.state.gender,
        age: Number(this.state.age),
      }),
    });
  };

  postQuestion4Data = () => {
    fetch('http://10.58.2.22:8000/survey/symptom', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('user_token'),
        // Authorization:
        //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.FqyzFpiAgm4xffg8zgOnB6xMTrdYKSHRkHp0PnVBxLY',
      },
      body: JSON.stringify({
        symptom_id: this.state.selectedSymptom1,
      }),
    });
  };

  postQuestion5Data = () => {
    fetch('http://10.58.2.22:8000/survey/symptom', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('user_token'),
        // Authorization:
        //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.FqyzFpiAgm4xffg8zgOnB6xMTrdYKSHRkHp0PnVBxLY',
      },
      body: JSON.stringify({
        symptom_id: this.state.selectedSymptom2,
      }),
    });
  };

  handleClickNextBtn = () => {
    if (this.state.step === 1) {
      if (this.validateQuestion1()) {
        this.setState({
          isValidQuestion1: true,
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          isValidQuestion1: false,
        });
      }
    } else if (this.state.step === 2) {
      if (this.validateQuestion2()) {
        this.postQuestion2Data();
        this.setState({
          isValidQuestion2: true,
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          isValidQuestion2: false,
        });
      }
    } else if (this.state.step === 3) {
      if (this.validateQuestion3()) {
        // API 호출 & 이후의 질문에 대한 보기 리스트 받아오기.
        this.requestSymptomOptions().then(() => {
          this.setState({
            isValidQuestion3: true,
            step: this.state.step + 1,
          });
        });
      } else {
        this.setState({
          isValidQuestion3: false,
        });
      }
    } else if (this.state.step === 4) {
      if (this.validateQuestion4()) {
        this.postQuestion4Data();
        this.setState({
          isValidQuestion4: true,
          step: this.state.step + (this.state.bodypart[1] ? 1 : 2),
        });
      } else {
        this.setState({
          isValidQuestion4: false,
        });
      }
    } else if (this.state.step === 5) {
      if (this.validateQuestion5()) {
        this.postQuestion5Data();
        this.setState({
          isValidQuestion5: true,
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          isValidQuestion5: false,
        });
      }
    } else if (this.state.step === 6) {
      if (this.validateQuestion6()) {
        this.setState({
          isValidQuestion6: true,
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          isValidQuestion6: false,
        });
      }
    } else if (this.state.step === 7) {
      if (this.validateQuestion7()) {
        this.setState({
          isValidQuestion7: true,
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          isValidQuestion7: false,
        });
      }
    } else {
      this.setState({
        step: this.state.step + 1,
      });
    }
  };

  handleClickPrevBtn = () => {
    if (this.state.step > 0) {
      if (this.state.step === 6 && !this.state.bodypart[1]) {
        this.setState({
          step: this.state.step - 2,
        });
      } else {
        this.setState({
          step: this.state.step - 1,
        });
      }
    }
  };

  handleUserInfoChange = answer => {
    this.setState(answer);
    // setTimeout(() => {
    //   console.log({ state: this.state });
    // }, 1000);
  };

  handleClickFinishBtn = () => {
    this.props.history.push('/surveyresult');
    console.log(this.handleClickFinishBtn);
  };

  getContents = () => {
    // 구조분해할당 : const { step, username, gender } = this.state;

    switch (this.state.step) {
      case 0:
        return <SurveyIntro onNextBtnClick={this.handleClickNextBtn} />;
      case 1:
        return (
          <SurveyPage1Gender
            questionnum={this.state.step}
            username={this.state.username}
            gender={this.state.gender}
            onChange={this.handleUserInfoChange}
            isValidQuestion1={this.state.isValidQuestion1}
          />
        );
      case 2:
        return (
          <SurveyPage2Age
            questionnum={this.state.step}
            username={this.state.username}
            age={this.state.age}
            isValidQuestion2={this.state.isValidQuestion2}
            onChange={this.handleUserInfoChange}
          />
        );
      case 3:
        return (
          <SurveyPage3BodyPart
            questionnum={this.state.step}
            username={this.state.username}
            bodypart={this.state.bodypart}
            isValidQuestion3={this.state.isValidQuestion3}
            onChange={this.handleUserInfoChange}
          />
        );
      case 4:
        return (
          <SurveyPage4Symptom1
            questionnum={this.state.step}
            username={this.state.username}
            symptomOptions={this.state.symptomOptions1}
            selectedSymptom1={this.state.selectedSymptom1}
            isValidQuestion4={this.state.isValidQuestion4}
            bodypart={this.state.bodypart[0]}
            onChange={this.handleUserInfoChange}
          />
        );
      case 5:
        return (
          <SurveyPage5Symptom2
            questionnum={this.state.step}
            username={this.state.username}
            symptomOptions={this.state.symptomOptions2}
            selectedSymptom2={this.state.selectedSymptom2}
            isValidQuestion5={this.state.isValidQuestion5}
            bodypart={this.state.bodypart[1]}
            onChange={this.handleUserInfoChange}
          />
        );

      case 6:
        return (
          <SurveyPageHeight
            questionnum={
              this.state.bodypart[1] ? this.state.step : this.state.step - 1
            }
            username={this.state.username}
            height={this.state.height}
            isValidQuestion6={this.state.isValidQuestion6}
            onChange={this.handleUserInfoChange}
          />
        );
      case 7:
        return (
          <SurveyPageWeight
            questionnum={
              this.state.bodypart[1] ? this.state.step : this.state.step - 1
            }
            username={this.state.username}
            weight={this.state.weight}
            isValidQuestion7={this.state.isValidQuestion7}
            onChange={this.handleUserInfoChange}
          />
        );

      case 8:
        return <SurveyOutro username={this.state.username} />;
      default:
    }
  };

  render() {
    return (
      <>
        <Background>
          <Container>
            {this.state.step > 0 && <Header step={this.state.step} />}
            {this.state.step > 0 && (
              <SurveyBar
                percent={
                  this.state.step < 7 ? (this.state.step / 7) * 100 : 100
                }
              />
            )}
            {this.getContents()}
            {this.state.step > 0 && (
              <BtnGroup
                stepNumber={this.state.step}
                onNextBtnClick={this.handleClickNextBtn}
                onFinishBtnClick={this.handleClickFinishBtn}
                onPrevBtnClick={this.handleClickPrevBtn}
              />
            )}
            <Link to="/">
              <CloseBtn />
            </Link>
          </Container>
        </Background>
      </>
    );
  }
}

const Background = styled.div`
  vertical-align: top;
  padding: 40px 0 142px;
  height: 100vh;
  background: #fafafa;
  overflow: auto;
  padding-top: 130px;
`;

const Container = styled.div`
  position: relative;
  width: 940px;
  margin: 0 auto 142px;
  padding: 0 150px 40px;
  background-color: white;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 8%);
`;
