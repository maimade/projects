import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import { FILLING_INFO, CS_INFO } from './data';

const CommonFooter = () => {
  return (
    <Footer>
      <Container>
        <Nav>
          <NavUl>
            <NavLi>이용약관</NavLi>
            <NavLi>개인정보처리방침</NavLi>
            <NavLi>고객센터</NavLi>
          </NavUl>
          <NavUl>
            <NavRightLi>
              <i className="fab fa-instagram"></i>
            </NavRightLi>
            <NavRightLi>
              <i className="fab fa-facebook-f"></i>
            </NavRightLi>
            <NavRightLi>
              <i className="fab fa-blogger"></i>
            </NavRightLi>
          </NavUl>
        </Nav>
        <Content>
          {FILLING_INFO.map((data, idx) => {
            return (
              <ContentPilly key={idx}>
                <ContentPillyTitle>{data.title}</ContentPillyTitle>
                <ContentPillyPtag>{data.enterprise}</ContentPillyPtag>
                <ContentPillyPtag>{data.personalInfo}</ContentPillyPtag>
                <ContentPillyPtag>{data.address}</ContentPillyPtag>
                <ContentPillyPtag>
                  {data.mailSale}
                  <ContentPillySpan>{data.retailSaleCheck}</ContentPillySpan>
                </ContentPillyPtag>
                <ContentPillyPtag>{data.retailSale}</ContentPillyPtag>
                <ContentPillyPtag>{data.healthCareSale}</ContentPillyPtag>
              </ContentPilly>
            );
          })}

          {CS_INFO.map((data, idx) => {
            return (
              <ContentCs key={idx}>
                <ContentPillyTitle>{data.title}</ContentPillyTitle>
                <ContentPillyPtag>{data.csContact}</ContentPillyPtag>
                <ContentPillyPtag>{data.csTime}</ContentPillyPtag>
                <ContentPillyPtag>{data.csInquire}</ContentPillyPtag>
              </ContentCs>
            );
          })}
        </Content>
        <CopyRight>ⓒ Overdose Inc. All Rights Reserved.</CopyRight>
      </Container>
    </Footer>
  );
};

const Footer = styled.footer`
  background: #fafafa;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 25px 50px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

const NavRightLi = styled(NavLi)`
  font-size: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  padding: 18px 0;
  border-top: 1px solid ${color.LIGHTGRAY};
  border-bottom: 1px solid ${color.LIGHTGRAY};
  font-size: 12px;
  line-height: 2.3;
`;

const ContentPilly = styled.div``;

const ContentCs = styled.div`
  margin-right: 50px;
`;

const ContentPillyTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const ContentPillyPtag = styled.p`
  font-size: 12px;
`;

const ContentPillySpan = styled.span`
  margin-left: 3px;
  font-size: 11px;
  border-bottom: solid 1px ${color.BLACK};
  cursor: pointer;
`;

const CopyRight = styled(ContentPillyPtag)`
  padding: 18px 0 25px;
`;

export default CommonFooter;
