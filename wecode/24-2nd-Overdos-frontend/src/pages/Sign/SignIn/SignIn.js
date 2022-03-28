import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SignInInputBox from './SignInInputBox';
import { SIGN_UP_DATA } from './data';
import { KAKAO_SIGN_IN_API, SIGN_IN_API } from '../../../config';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signIn = e => {
    e.preventDefault();
    fetch(SIGN_IN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          localStorage.setItem('user_token', response.ACCESS_TOKEN);
          localStorage.setItem('user_name', response.username);
          localStorage.setItem('user_id', response.user_id);
          alert(`${response.username}님 환영합니다.`);
          history.push('/');
        } else if (response.message === 'INVALID_PASSWORD') {
          alert('잘못된 비밀번호입니다.');
        } else if (response.message === 'INVALID_USER') {
          alert('잘못된 아이디입니다.');
        }
      });
  };

  const kakaoSignIn = e => {
    e.preventDefault();
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_SIGN_IN_API, {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('Kakao_token', res.access_token);
            if (res.access_token) {
              alert('Filling에 오신걸 환영합니다!');
              history.push('/');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  const goSignUp = () => {
    history.push('/signup');
  };

  return (
    <CenterAlignment>
      <SignInForm>
        {/* <Title>Filling</Title> */}
        <TitleImage />
        <InputBoxForm>
          {SIGN_UP_DATA.map((data, index) => {
            return (
              <SignInInputBox key={index} data={data} onChange={onChange} />
            );
          })}
          <SignInButton onClick={signIn}>로그인</SignInButton>
          <KakaoSigninButton onClick={kakaoSignIn}>
            카카오 로그인
          </KakaoSigninButton>
          <CenterAlignment>
            <LightFont>비밀번호 찾기</LightFont>
            <LightFont onClick={goSignUp}>회원가입</LightFont>
          </CenterAlignment>
        </InputBoxForm>
      </SignInForm>
    </CenterAlignment>
  );
};

export default SignIn;

const TitleImage = styled.img.attrs({
  src: 'images/pill.png',
})`
  padding: 30px 0px;
  width: 50px;
  margin: 0 auto;
`;

const CenterAlignment = styled.div`
  display: flex;
  justify-content: center;
`;

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 460px;
  margin: 120px 0px;
`;

const InputBoxForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInButton = styled.button`
  height: 50px;
  margin: 20px 0px 10px 0px;
  border-radius: 300px;
  background-color: #ff5c36;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const KakaoSigninButton = styled(SignInButton)`
  background-color: #ffcc02;
  color: black;
`;

const LightFont = styled.div`
  margin: 10px 5px;
  color: #ababab;
  font-size: 16px;
  cursor: pointer;
`;
