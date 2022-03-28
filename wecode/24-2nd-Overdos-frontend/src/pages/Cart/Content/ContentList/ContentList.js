import { React } from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const ContentList = ({
  products,
  handleAdd,
  handleSubstract,
  handleChecked,
  handleFetchPlus,
  handleFetchMinus,
  handleFetchChecked,
}) => {
  return (
    <ContentUl>
      {products.map(product => (
        <ContentLi key={product.product_id}>
          <ContentContainer checked={product.checked}>
            <ContentTable>
              <ContentCell>
                <ContentCheckBox
                  type="checkbox"
                  onChange={() => {
                    handleChecked(product.product_id);
                    handleFetchChecked(product);
                  }}
                  checked={product.checked}
                />
              </ContentCell>
              <ContentCellImg>
                <ContentImg src={product.product_image} />
              </ContentCellImg>
              <ContentCellName>
                <ContentRow>
                  <ProductName>{product.name}</ProductName>
                </ContentRow>
                <ContentRowNum>
                  <MinusBtn
                    onClick={() => {
                      product.checked && handleSubstract(product.product_id);
                      handleFetchMinus(product);
                    }}
                  >
                    <i className="fas fa-minus"></i>
                  </MinusBtn>
                  <ContentNum>{product.quantity}</ContentNum>
                  <PlusBtn
                    onClick={() => {
                      product.checked && handleAdd(product.product_id);
                      handleFetchPlus(product);
                    }}
                  >
                    <i className="fas fa-plus"></i>
                  </PlusBtn>
                </ContentRowNum>
              </ContentCellName>
              <ContentCellPrice>
                <ContentRowPrice />
                <ContentRowPrice>
                  <Price>
                    {(product.price * product.quantity).toLocaleString()}원
                  </Price>
                </ContentRowPrice>
              </ContentCellPrice>
            </ContentTable>
          </ContentContainer>
        </ContentLi>
      ))}
    </ContentUl>
  );
};

const ContentUl = styled.ul``;

const ContentLi = styled.li`
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid ${color.LIGHTGRAY};

  &:last-child {
    border-bottom: 1px solid ${color.GRAY};
  }
`;

const ContentContainer = styled.div`
  opacity: ${props => (props.checked ? '1' : '0.3')};
`;

const ContentTable = styled.div`
  display: table;
  color: #000;
`;

const ContentCell = styled.div`
  display: table-cell;
  width: 48px;
  vertical-align: middle;
`;

const ContentCellImg = styled(ContentCell)`
  width: 116px;
`;

const ContentCheckBox = styled.input`
  width: 24px;
  height: 24px;
`;

const ContentCellName = styled(ContentCell)`
  width: 486px;
  vertical-align: top;
`;

const ContentImg = styled.img`
  width: 90px;
`;

const ContentRow = styled.div`
  height: 24px;
`;

const ProductName = styled.span`
  font-size: 18px;
`;

const ContentRowNum = styled.div`
  padding-top: 24px;
`;

const MinusBtn = styled.button`
  width: 40px;
  height: 40px;
  background: ${color.WHITE};
  border: 1px solid ${color.LIGHTGRAY};
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 6%);
  color: #707070;
  cursor: pointer;
`;

const PlusBtn = styled(MinusBtn)``;

const ContentNum = styled.span`
  display: inline-block;
  width: 45px;
  padding-top: 12px;
  vertical-align: top;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const ContentCellPrice = styled(ContentCell)`
  width: 180px;
  vertical-align: top;
  text-align: right;
`;

const ContentRowPrice = styled.div`
  height: 34px;
  padding-top: 3px;
`;

const Price = styled.p`
  padding-top: 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -1px;
`;

export default ContentList;
