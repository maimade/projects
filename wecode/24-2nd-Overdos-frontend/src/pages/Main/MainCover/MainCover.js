import React from 'react';
import { Link } from 'react-router-dom';
import { color } from 'styles/color';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import StyledButton from 'components/CommonStyled/StyledButton';

const MainCover = () => {
  const props = useSpring({
    from: { number: 600000 },
    to: { number: 648773 },
    delay: 100,
    config: config.ease,
  });

  return (
    <Cover>
      <CoverImg src="/images/mainCover.jpeg" alt="cover" />
      <CoverTitle>
        코드와 씨름하는 내 몸에 <br /> 필요한 영양성분 궁금하세요?
      </CoverTitle>
      <CoverDescription>
        개발자인 여러분만을 위한 맞춤영양제를 찾아보세요! <br /> 이미{' '}
        <AnimatedCount style={props}>
          {props.number.to(n => Math.round(n).toLocaleString())}
        </AnimatedCount>
        명이 추천받았습니다.
      </CoverDescription>
      <Link to="/survey">
        <CoverStyledButton>지금 시작하기</CoverStyledButton>
      </Link>
    </Cover>
  );
};

const Cover = styled.section`
  position: relative;
`;

const CoverImg = styled.img`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const CoverTitle = styled.div`
  position: absolute;
  top: 200px;
  left: 280px;
  color: ${color.BLACK};
  font-size: 68px;
  font-weight: 700;
  line-height: 1.25;
`;

const CoverDescription = styled.div`
  position: absolute;
  top: 400px;
  left: 280px;
  color: ${color.BLACK};
  font-size: 26px;
  line-height: 1.25;
`;

const AnimatedCount = styled(animated.span)`
  font-weight: 700;
`;

const CoverStyledButton = styled(StyledButton)`
  position: absolute;
  top: 500px;
  left: 280px;
  cursor: pointer;
`;

export default MainCover;
