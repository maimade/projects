import React from 'react';
import { Link } from 'react-router-dom';
import { color } from 'styles/color';
import styled from 'styled-components';
import StyledButton from 'components/CommonStyled/StyledButton';

const MainBenefit = () => {
  return (
    <Container>
      <Inner>
        <Benefit>
          필링의 혜택! <br /> 지금 받으세요.
        </Benefit>
        <Link to="/survey">
          <CoverStyledButton>지금 시작하기</CoverStyledButton>
        </Link>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  background: ${color.ORANGE};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 110px 25px 100px 20px;
  text-align: center;
`;

const Benefit = styled.p`
  color: ${color.WHITE};
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
`;

const CoverStyledButton = styled(StyledButton)`
  margin-top: 30px;
  background: ${color.BLACK};
  cursor: pointer;
`;

export default MainBenefit;
