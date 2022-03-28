import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailPopUp from './DetailPopUp';
import { DETAIL_API, DETAIL_ADD_CART_API } from 'config';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`${DETAIL_API}${params.id}`)
      .then(res => res.json())
      .then(res => setDetailData(res.Result));
  });

  const popUpAndClickBlock = () => {
    if (addCart) return;
    setAddCart(true);
    setPopUpVisible(true);
    setTimeout(() => setPopUpVisible(false), 3000);
  };

  const clickAddCart = () => {
    fetch(DETAIL_ADD_CART_API, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('user_token'),
      },
      body: JSON.stringify({
        user_id: localStorage.getItem('user_id'),
        product_id: detailData.id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS, PRODUCT ADDED TO CART') {
          popUpAndClickBlock();
        }
      });
  };

  const {
    image,
    sub_name,
    name,
    description,
    price,
    background_image,
    sub_description,
  } = detailData;

  const CheckObject = Object.keys(detailData).length;

  console.log(detailData);

  return (
    <DetailWrapper>
      {CheckObject && (
        <>
          <ImageWrapper src={background_image}>
            <DetailInformation>
              <Title>{sub_name}</Title>
              <TitleBold>{name}</TitleBold>
              <Description>{sub_description}</Description>
              <Price>30일분 | {price.toLocaleString()}원</Price>
              <AddCartButton addCart={addCart} onClick={() => clickAddCart()}>
                {addCart ? '장바구니 추가됨' : '장바구니 담기'}
              </AddCartButton>
            </DetailInformation>
            {popUpVisible && <DetailPopUp addCart={addCart} name={name} />}
          </ImageWrapper>
          <PillImage src={image} />
          <DescriptionImage src={description} />
        </>
      )}
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 830px;
  background: url(${props => props.src});
  background-size: cover;
`;

const DetailInformation = styled.div`
  position: absolute;
  width: 1024px;
  top: 205px;
  color: white;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 300;
`;

const TitleBold = styled(Title)`
  font-weight: 700;
`;

const Description = styled.div`
  width: 600px;
  font-size: 16px;
  margin: 35px 0px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const AddCartButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  border-radius: 300px;
  color: white;
  width: 232px;
  height: 60px;
  background-color: ${props => (props.addCart ? '#DDDDDD' : '#ff5c36')};
  box-shadow: 2px 2px 10px black;
  margin: 50px 0px 50px 0px;
  cursor: pointer;
`;

const PillImage = styled.img`
  width: 200px;
  position: absolute;
  top: 200px;
  right: 300px;
`;

const DescriptionImage = styled.img`
  width: 500px;
  padding-top: 50px;
  margin: 0 auto;
`;
