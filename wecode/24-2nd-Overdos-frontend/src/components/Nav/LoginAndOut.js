import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LoginAndOut = ({ selectedNavMenu, goMenu }) => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(localStorage.getItem('user_token'));

  const logOut = () => {
    alert('로그아웃이 완료되었습니다.');
    setIsLogin('');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_token');
  };

  useEffect(() => {
    const checkIsLogin = localStorage.getItem('user_token');
    setIsLogin(checkIsLogin);
  }, [location.pathname]);

  return (
    <LoginAndOutWrapper
      selectedNavMenu={selectedNavMenu}
      onClick={() => (isLogin ? logOut() : goMenu())}
    >
      <div>{isLogin ? '로그아웃' : '로그인'}</div>
    </LoginAndOutWrapper>
  );
};

export default LoginAndOut;

const LoginAndOutWrapper = styled.div`
  padding-bottom: 3px;
  border-bottom: ${props => props.selectedNavMenu === 6 && '1px solid black'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
