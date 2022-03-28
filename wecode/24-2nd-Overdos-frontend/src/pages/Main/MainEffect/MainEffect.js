import React from 'react';
import styled from 'styled-components';
import EFFECT_DATA from './data';
import { color } from 'styles/color';

const MainEffect = () => {
  return (
    <Container>
      {EFFECT_DATA.map((data, idx) => {
        return (
          <EffectContainer key={idx}>
            <EffectImg src={data.image} />
            <EffectDescription>{data.description}</EffectDescription>
          </EffectContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  background: ${color.WHITE};
`;

const EffectContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 100px 20px 0 20px;
`;

const EffectImg = styled.img`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const EffectDescription = styled.p`
  margin: 40px -20px 0;
  padding: 0 20px;
  font-size: 24px;
  line-height: 1.4;
`;

export default MainEffect;
