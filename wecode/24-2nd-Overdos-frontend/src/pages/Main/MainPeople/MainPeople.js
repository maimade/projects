import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import PEOPLE_DATA from './data';

const MainPeople = () => {
  return (
    <Container>
      <Inner>
        <People>개발자 커뮤니티에서 이미 입소문이 시작되었어요.</People>
        <PeopleWrapper>
          {PEOPLE_DATA.map((data, idx) => {
            return (
              <PeopleContainer key={idx}>
                <PeopleImg src={data.image} />
                <PeopleTalk>{data.talk1}</PeopleTalk>
                <PeopleTalk>{data.talk2}</PeopleTalk>
                <PeopleProfile>{data.profile}</PeopleProfile>
              </PeopleContainer>
            );
          })}
        </PeopleWrapper>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  margin-top: 80px;
  background: #f6f4f0;
  color: ${color.BLACK};
`;

const Inner = styled.div`
  width: 1024px;
  padding: 100px 0;
  margin: 0 auto;
  text-align: center;
`;

const People = styled.p`
  font-size: 19px;
  font-weight: 700;
`;

const PeopleWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PeopleContainer = styled.div`
  margin: 80px auto 20px;
`;

const PeopleImg = styled.img`
  width: 220px;
  margin: 0 auto;
`;

const PeopleTalk = styled.p`
  margin-top: 10px;
  font-size: 32px;
  font-weight: 700;
`;

const PeopleProfile = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${color.DARKGRAY};
`;

export default MainPeople;
