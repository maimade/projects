import React from 'react';
import styled from 'styled-components';

const DetailPopUp = ({ name, addCart }) => {
  return (
    <PopUpWrapper addCart={addCart}>
      <CheckedImage addCart={addCart} />
      <PopUpMessage>
        {name}을 장바구니에{addCart ? ' 담았습니다' : '서 삭제했습니다'}.
      </PopUpMessage>
    </PopUpWrapper>
  );
};

export default DetailPopUp;

const PopUpWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 300px;
  height: 62px;
  bottom: 15px;
  left: 15px;
  opacity: 0.9;
  background-color: ${props => (props.addCart ? '#51a350' : 'red')};
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;
`;

const PopUpMessage = styled.div`
  font-size: 14px;
  width: 226px;
  color: white;
`;

const CheckedImage = styled.img.attrs(props => ({
  src: props.addCart ? 'images/checked.png' : 'images/remove.png',
}))`
  alt: checked;
  padding: 0px 8px;
`;
