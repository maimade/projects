import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { DETAIL_ADD_CART_API } from '../../config';
import styled from 'styled-components';

// 숫자를 매개변수로 받아서 콤마가 추가된 문자열을 반환하는 함수.
const getCommaSeperatedPrice = priceInNumber => {
  const priceInString = priceInNumber
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return priceInString;
};

// '장바구니' 버튼을 클릭하면 fetch로 Post한 후 then 뒤에 새 리스트를 호출, 단 이 새 리스트를 호출하는 handler(products.js에서 만듬)는 Products에서 받는다.(props로 받는다.)

class ProductsCard extends Component {
  constructor() {
    super();
    this.state = {
      hasCart: false,
    };
  }

  // 사용자가 '장바구니 담기' 버튼을 누르면 실행될 핸들러 함수.
  // 이 함수의 역할은, 장바구니에 담는 API를 호출하고, 성공했을 때 제품 리스트를 호출하는 것이다.
  handlePostCart = event => {
    // event가 더이상 전파되지 않게 하기 위해서. 즉, handlePostCart 핸들러 함수까지만 실행하고 이후의 핸들러는 실행하지 않게 하려고 stopPropagation을 실행함.
    event.stopPropagation();

    // const popUpAndClickBlock = () => {
    //   if (addCart) return;
    //   setAddCart(true);
    //   setPopUpVisible(true);
    //   setTimeout(() => setPopUpVisible(false), 3000);
    // };

    fetch(DETAIL_ADD_CART_API, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('user_token'),
      },
      body: JSON.stringify({
        user_id: localStorage.getItem('user_id'),
        product_id: this.props.product.id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS, PRODUCT ADDED TO CART') {
          // popUpAndClickBlock();
          alert('카트에 담겼습니다');
        }
      });

    this.setState({
      hasCart: true,
    });
  };

  render() {
    const { image, name, price, sub_name, summary, id } = this.props.product;

    // previous: summary 1,2,3 => string
    // now: summary => array<string>
    return (
      <Container
        onClick={() => this.props.history.push(`/product/detail/${id}`)}
        style={{ backgroundColor: `${this.props.cardColor}` }}
      >
        {/* 동적 라우팅으로 제품 상세 페이지로 이동해야 함 */}
        <Sections>
          <LeftSection>
            <ProductName>
              <SubName>{sub_name}</SubName>
              <MainName>{name}</MainName>
              {/* <div>{iconImg}</div>  */}
            </ProductName>
            <Summary>
              <ul>
                {summary.map(item => {
                  return <li>{item}</li>;
                })}
              </ul>
            </Summary>
          </LeftSection>
          <RightSection>
            <ProductImage
              src={image}
              // ↑ src={`제품이미지주소앞부분${id}제품이미지주소뒷부분`}
              alt="제품 사진"
            />
            <For30Days>30일분</For30Days>
            <Price>{`${getCommaSeperatedPrice(price)}원`}</Price>
          </RightSection>
        </Sections>
        <ViewMore>더보기</ViewMore>
        {this.state.hasCart ? (
          <AddedBasket onClick={this.handlePostCart}>
            장바구니 추가됨
          </AddedBasket>
        ) : (
          <PlusBasket onClick={this.handlePostCart}>+ 장바구니 담기</PlusBasket>
        )}
      </Container>
    );
  }
}

export default withRouter(ProductsCard);

const Container = styled.div`
  position: relative;
  border: none;
  border-radius: 7px;
  padding: 30px 25px;
  cursor: pointer;
  /* -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out; */
`;

const Sections = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const LeftSection = styled.div`
  text-align: left;
`;

const ProductName = styled.div`
  height: 130px;
`;

const SubName = styled.h2`
  margin-top: 8px;
  font-size: 14px;
  color: #000000;
`;

const MainName = styled.h1`
  margin-top: 5px;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
`;

const Summary = styled.ul`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const RightSection = styled.div`
  position: absolute;
`;

const ProductImage = styled.img`
  width: 70px;
  filter: drop-shadow(5px 5px 5px #707070);
  margin: 8px 25px 0 330px;
`;

const For30Days = styled.p`
  width: 50px;
  font-size: 14px;
  font-weight: 700;
  margin: 57px 18px 0 360px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: right;
  margin: 30px 22px 0 150px;
`;

const PlusBasket = styled.button`
  width: 295px;
  min-width: 74px;
  height: 60px;
  padding: 2px 36px 0;
  margin-top: 6%;
  line-height: 58px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 4px 0 rgba(0 0 0 / 15%);
  background: #fff;
  color: #707070;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const AddedBasket = styled.button`
  width: 295px;
  min-width: 74px;
  height: 60px;
  padding: 4px 36px 0;
  margin-top: 6%;
  line-height: 58px;
  border-radius: 30px;
  border: none;
  box-shadow: 0 5px 4px 0 rgba(0 0 0 / 15%);
  background: #dddddd;
  color: white;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const ViewMore = styled.p`
  width: 37px;
  margin-top: 17px;
  margin-left: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #707070;
  border-bottom: solid 1px #707070;
  padding-bottom: 1px;
  line-height: 20px;
`;
