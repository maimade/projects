import React, { Component } from 'react';
import roundedlogo from './roundedlogo.png';
import styled from 'styled-components';

export default class SurveyIntro extends Component {
  render() {
    return (
      <Intro>
        <HeadContainer>
          <RoundedLogo alt="로고" src={roundedlogo} />
          <Title1>필링!</Title1>
          <Title2>내 건강을 채워줘!</Title2>
        </HeadContainer>
        <Intro1>
          몇 가지 질문에 답하고
          <br />
          나에게 필요한 영양 성분을 알아보세요.
        </Intro1>
        <Intro2>약 3분 정도 소요됩니다.</Intro2>
        <BtnWrapper>
          <StartBtn onClick={this.props.onNextBtnClick}>시작하기</StartBtn>
        </BtnWrapper>
        <Warning>
          ※ 질병의 진단 및 치료는 전문적인 의료 기관을 이용하세요.
        </Warning>
      </Intro>
    );
  }
}

const Intro = styled.div`
  padding: 0 111px;
`;

const HeadContainer = styled.div`
  width: 418px;
  height: 280px;
`;

const RoundedLogo = styled.img`
  background-position: 50% 50%;
  height: 65px;
  margin: 50px 0 30px -7px;
  background-size: 60px;
  /* background-image: url(/images/icons/survey/icon-survey-pilly-logo.png); */
`;

const Title1 = styled.h1`
  font-size: 30px;
  font-weight: 300;
  line-height: 40px;
`;

const Title2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Intro1 = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

const Intro2 = styled.p`
  margin-top: 27px;
  font-size: 12px;
  line-height: 24px;
  color: #848484;
`;

const BtnWrapper = styled.div`
  margin-top: 120px;
`;

const StartBtn = styled.button`
  appearance: none;
  width: 100%;
  height: 50px;
  padding: 0 36px;
  border: none;
  border-radius: 30px;
  outline: none;
  text-align: center;
  background-color: #333;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
`;

const Warning = styled.p`
  margin-top: 28px;
  font-size: 12px;
  color: #848484;
`;
