import React from 'react';
import MainCover from './MainCover/MainCover';
import MainCarousel from './MainCarousel/MainCarousel';
import MainEasy from './MainEasy/MainEasy';
import MainEffect from './MainEffect/MainEffect';
import MainBenefit from './MainBenefit/MainBenefit';
import MainPeople from './MainPeople/MainPeople';

const Main = () => {
  return (
    <>
      <MainCover />
      <MainCarousel />
      <MainEasy />
      <MainEffect />
      <MainPeople />
      <MainBenefit />
    </>
  );
};

export default Main;
