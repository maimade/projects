import styled from 'styled-components';
import { color } from 'styles/color';

const StyledButton = styled.button`
  padding: 30px 50px;
  background: ${color.ORANGE};
  border-radius: 50px;
  color: ${color.WHITE};
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 5px 4px 0 rgb(0 0 0 / 15%);
  cursor: pointer;
`;

export default StyledButton;
