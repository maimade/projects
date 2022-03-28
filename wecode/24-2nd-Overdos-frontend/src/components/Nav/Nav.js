import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LoginAndOut from './LoginAndOut';
import { MENU_LIST } from './data';

const Nav = () => {
  const [selectedNavMenu, setSelectedNavMenu] = useState(0);
  const history = useHistory();

  const goMenu = (push, menuId) => {
    history.push(push);
    setSelectedNavMenu(menuId);
  };

  return (
    <NavWrapper>
      <NavContent>
        <Logo onClick={() => goMenu('/', 0)}>Filling</Logo>
        <NavMenuList>
          {MENU_LIST.map(data => (
            <NavMenu
              key={data.id}
              id={data.id}
              selectedNavMenu={selectedNavMenu}
              onClick={() => goMenu(data.push, data.id)}
            >
              {data.title}
            </NavMenu>
          ))}
          <LoginAndOut
            selectedNavMenu={selectedNavMenu}
            goMenu={() => goMenu('/signin', 6)}
          />
        </NavMenuList>
      </NavContent>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
`;

const Logo = styled.div`
  color: #f79200;
  font-size: 30px;
  font-weight: 700;
  font-family: ‘VT323’, monospace;
  letter-spacing: -7px;
  cursor: pointer;
`;

const NavMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const NavMenu = styled.div`
  padding-bottom: 3px;
  border-bottom: ${props =>
    props.id === props.selectedNavMenu && '1px solid black'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
