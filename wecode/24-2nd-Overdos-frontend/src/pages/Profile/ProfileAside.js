import React from 'react';
import styled from 'styled-components';
import { PROFILE_MENU_DATA } from './data';

const ProfileAside = ({ setProfileSelectedMenu, profileMenu }) => {
  return (
    <ProfileAsideWrapper>
      <MyProfile onClick={() => setProfileSelectedMenu(0)}>MY 필링</MyProfile>
      {PROFILE_MENU_DATA.map(data => (
        <ProfileMenu
          onClick={() => setProfileSelectedMenu(data.id)}
          key={data.id}
          id={data.id}
          profileMenu={profileMenu}
        >
          {data.menu}
        </ProfileMenu>
      ))}
    </ProfileAsideWrapper>
  );
};

export default ProfileAside;

const ProfileAsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0px;
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 25px;
  font-size: 18px;
  font-weight: ${props => props.id === props.profileMenu && 700};
  color: ${props => props.id === props.profileMenu && '#FF5B35'};
  cursor: pointer;
`;
