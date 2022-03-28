import React, { Component } from 'react';
import ProductsCard from './ProductsCard';
import styled from 'styled-components';

const CARD_COLOR = [
  '#CCCCCC',
  '#E9F9FF',
  '#DFB5BB',
  '#EFE9D9',
  '#B1D9F1',
  '#EAE9E9',
  '#AFE29D',
  '#FEEFA7',
  '#CBC5E8',
  '#F9D3BF',
];

class ProductCardList extends Component {
  render() {
    const { products } = this.props;
    return (
      <Container>
        {products.map((product, index) => {
          return (
            <ProductsCard
              key={product.id}
              product={product}
              cardColor={CARD_COLOR[index]}
              handleReloadProductList={this.props.handleReloadProductList}
            />
          );
        })}
      </Container>
    );
  }
}

export default ProductCardList;

const Container = styled.div`
  display: grid;
  grid-template-rows: 395px 395px 395px 395px 395px;
  grid-template-columns: 452px 452px;
  grid-auto-rows: 395px;
  grid-gap: 60px 20px;
`;
