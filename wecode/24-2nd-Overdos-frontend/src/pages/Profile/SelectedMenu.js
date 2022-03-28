import React from 'react';
import styled from 'styled-components';
import HealthSurvey from './ProfilePages/HealthSurvey';
import Member from './ProfilePages/Member';
import Payment from './ProfilePages/Payment';
import Subscription from './ProfilePages/Subscription';
import MyFilling from './ProfilePages/MyFilling';

const pages = {
  0: <MyFilling />,
  1: <HealthSurvey />,
  2: <Subscription />,
  3: <Payment />,
  4: <Member />,
};

const SelectedMenu = ({ profileMenu }) => {
  return <SelectedMenuWrapper>{pages[profileMenu]}</SelectedMenuWrapper>;
};

export default SelectedMenu;

const SelectedMenuWrapper = styled.div`
  width: 750px;
`;
