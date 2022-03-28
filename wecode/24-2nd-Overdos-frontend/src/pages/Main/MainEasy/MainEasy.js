import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import PROCESS_DATA from './data';

const MainEasy = () => {
  return (
    <Container>
      <Inner>
        <Easy>이젠 쉬워요.</Easy>
        <ProcessWrapper>
          {PROCESS_DATA.map((data, idx) => {
            return (
              <ProcessContainer key={idx}>
                <ProcessImg src={data.image} />
                <ProcessNum>{data.id}</ProcessNum>
                <ProcessTitle>{data.title}</ProcessTitle>
                <ProcessDescription>{data.description}</ProcessDescription>
              </ProcessContainer>
            );
          })}
        </ProcessWrapper>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  background: ${color.WHITE};
  color: ${color.BLACK};
`;

const Inner = styled.div`
  width: 1024px;
  padding: 100px 25px 0 20px;
  margin: 0 auto;
  text-align: center;
`;

const Easy = styled.p`
  font-size: 19px;
  font-weight: 700;
`;

const ProcessContainer = styled.div`
  width: 255px;
  margin: 100px auto 0 auto;
`;

const ProcessWrapper = styled.div`
  display: flex;
`;

const ProcessImg = styled.img`
  width: 80px;
  margin: 0 auto;
`;

const ProcessNum = styled.p`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
`;

const ProcessTitle = styled.p`
  margin-top: 10px;
  font-size: 48px;
  font-weight: 700;
`;

const ProcessDescription = styled.p`
  margin-top: 10px;
  font-size: 24px;
`;

export default MainEasy;
