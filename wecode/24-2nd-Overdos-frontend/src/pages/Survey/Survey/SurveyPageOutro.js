import React, { Component } from 'react';
import SeperatorLine from '../components/SeperatorLine';
import styled from 'styled-components';

export default class SurveyOutro extends Component {
  // handleUserInfo = event => {
  //   this.props.onChange({
  //     [event.target.name]: event.target.value,
  //   });
  // };
  render() {
    return (
      <>
        <div className="container">
          <Title1>설문 완료!</Title1>
          <Title2>
            {this.props.username}님의 건강 설문 결과를
            <br />
            바로 확인해보세요 :)
          </Title2>
          <SeperatorLine />
          <br />
          <AdditionalExp>
            '결과 보기' 버튼을 클릭하시면 건강 설문 결과를 바로 확인하실 수
            있습니다.
          </AdditionalExp>
          <Comment>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;※ 본 설문은 전문 ・ 의학적 소견이 없는
              내용입니다.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;주니어 개발자들의 프로젝트의 일환으로
              제작되었으니
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;재미로 봐주시기를 부탁드립니다!</p>
          </Comment>
        </div>
      </>
    );
  }
}

const Title1 = styled.h1`
  padding: 20px 0;
  width: 100%;
  font-size: 30px;
  font-weight: 300;
  line-height: 40px;
`;

const Title2 = styled.h2`
  padding-bottom: 15px;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`;

const AdditionalExp = styled.span`
  width: 100%;
  padding: 15px 0;
  font-size: 16px;
`;

const Comment = styled.p`
  padding: 20px 0;
  color: #999999;
`;
