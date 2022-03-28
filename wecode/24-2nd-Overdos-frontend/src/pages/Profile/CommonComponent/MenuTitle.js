import React from 'react';
import styled from 'styled-components';

const MenuTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default MenuTitle;

const Title = styled.div`
  height: 40px;
  margin-bottom: 30px;
  font-size: 28px;
`;
