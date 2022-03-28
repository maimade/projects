import React, { useState } from 'react';
import styled from 'styled-components';
import SelectedMenu from './SelectedMenu';
import ProfileAside from './ProfileAside';

const Profile = () => {
  const [profileMenu, setProfileMenu] = useState(0);

  const setProfileSelectedMenu = pageId => {
    setProfileMenu(pageId);
  };

  return (
    <ProfileWrapper>
      <ProfileContent>
        <ProfileAside
          setProfileSelectedMenu={setProfileSelectedMenu}
          profileMenu={profileMenu}
        />
        <SelectedMenu profileMenu={profileMenu} />
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 994px;
`;
