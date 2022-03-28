import React, { Component } from 'react';
import ProductsCardList from './ProductsCardList';
import topimg from './topimg.jpg';
import styled from 'styled-components';

class Products extends Component {
  state = {
    products: [],
  };

  handleReloadProductList = () => {
    // fetch('data/ProductsListData.json')
    fetch('http://10.58.2.22:8000/product/list')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // console.log(res.PRODUCTS_LIST);
        this.setState({ products: res.Result });
      });
  };

  componentDidMount() {
    this.handleReloadProductList();
  }

  // componentDidMount() {
  //   fetch('http://10.58.0.216:8000/product/list')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       // console.log(res.result);
  //       this.setState({ products: res.Result });
  //     });
  // }

  render() {
    // console.log(this.state.products);
    return (
      <Product>
        <HeadWrapper>
          <TopImg alt="상단이미지" src={topimg} />
          <Slogan>
            개발자의 건강을 위한
            <br />
            필링의 연구와 도전은 계속됩니다.
          </Slogan>
        </HeadWrapper>
        <ListWrapper>
          <ProductsList>
            <ProductsCardList
              products={this.state.products}
              handleReloadProductList={this.handleReloadProductList}
            />
          </ProductsList>
        </ListWrapper>
      </Product>
    );
  }
}

export default Products;

const Product = styled.div`
  position: relative;
`;

const HeadWrapper = styled.div`
  height: 490px;
`;

const TopImg = styled.img`
  width: 100%;
`;

const Slogan = styled.h1`
  position: absolute;
  top: 250px;
  padding: 0 380px;
  color: white;
  font-size: 40px;
  font-weight: bolder;
  text-align: left;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 590px;
  text-align: center;
  background-color: white;
`;

const ProductsList = styled.div`
  width: 1024px;
  padding: 60px;
  margin: auto;
`;
