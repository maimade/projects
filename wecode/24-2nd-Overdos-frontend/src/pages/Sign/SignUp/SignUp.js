import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SignUpInputBox from './SignUpInputBox';
import TermsConditions from './TermsConditions';
import { SIGN_UP_API } from '../../../config';
import { CHECKLIST_DATA, SIGN_UP_DATA } from './data';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [nameValidation, setNameValidation] = useState(false);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [confirmPasswordValidation, setConfirmPasswordValidation] =
    useState(false);

  const [checkList, setCheckList] = useState(CHECKLIST_DATA);

  const [allCheck, setAllCheck] = useState(false);

  const history = useHistory();

  const validationResults = {
    nameValidation,
    phoneNumberValidation,
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
  };

  useEffect(() => {
    if (!inputs.name.length) return;
    checkNameValidation(inputs.name);
  }, [inputs.name]);

  useEffect(() => {
    if (!inputs.phoneNumber.length) return;
    const condition = inputs.phoneNumber.length <= 10;
    setPhoneNumberValidation(condition);
  }, [inputs.phoneNumber]);

  useEffect(() => {
    if (!inputs.email.length) return;
    checkEmailValidation(inputs.email);
  }, [inputs.email]);

  useEffect(() => {
    if (!inputs.password.length) return;
    const condition = inputs.password.length <= 3;
    setPasswordValidation(condition);
    if (!inputs.confirmPassword.length) return;
    const confirmCondition = inputs.confirmPassword !== inputs.password;
    setConfirmPasswordValidation(confirmCondition);
  }, [inputs.password, inputs.confirmPassword]);

  useEffect(() => {
    if (!allCheck) return;
    for (let i = 0; i < checkList.length; i++) {
      if (!checkList[i].select) {
        setAllCheck(false);
        return;
      }
    }
  }, [checkList, allCheck]);

  const checkEmailValidation = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailValidation(!regExp.test(email));
  };

  const checkNameValidation = name => {
    const reg = /^([a-zA-Z|가-힣]).{1,19}$/;
    setNameValidation(!reg.test(name));
  };

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const allAgree = () => {
    allCheck ? changeAllResult(false) : changeAllResult(true);
    setAllCheck(allCheck => !allCheck);
  };

  const Agree = data => {
    setCheckList(
      checkList.map(setData =>
        data.id === setData.id ? { ...setData, select: !data.select } : setData
      )
    );
  };

  const changeAllResult = result => {
    setCheckList(
      checkList.map(setData => {
        return { ...setData, select: result };
      })
    );
  };

  const submit = e => {
    e.preventDefault();
    for (let i = 0; i < checkList.length; i++) {
      if (!checkList[i].select) {
        alert('필수 항목에 모두 동의해주세요.');
        return;
      }
    }
    singUp();
  };

  const singUp = () => {
    fetch(SIGN_UP_API, {
      method: 'POST',
      body: JSON.stringify({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        phone_number: inputs.phoneNumber,
        social_id: '0000',
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.message);
        if (response.message === 'CREATED') {
          alert('회원가입을 축하합니다!');
          history.push('/');
        } else if (response.message === 'INVALID_EMAIL') {
          alert('잘못된 이메일 형식입니다.');
        } else if (response.message === 'DUPLICATE_PHONE_NUMBER') {
          alert('중복된 전화번호입니다.');
        } else if (response.message === 'INVALID_PASSWORD') {
          alert('잘못된 비밀번호 형식입니다.');
        }
      });
  };

  return (
    <SignUpWrapper>
      <SignUpForm>
        <Title>회원가입</Title>
        {SIGN_UP_DATA.map(data => {
          return (
            <SignUpInputBox
              key={data.id}
              data={data}
              onChange={onChange}
              validation={validationResults[`${data.name}Validation`]}
            />
          );
        })}
        <TermsConditionsForm>
          <AllAgreeWrapper>
            <CheckBox onChange={allAgree} checked={allCheck} />
            <AllAgree>모두 동의하기</AllAgree>
          </AllAgreeWrapper>
          <hr />
          {checkList.map(data => {
            return (
              <TermsConditions
                key={data.id}
                data={data}
                onChange={() => Agree(data)}
              />
            );
          })}
        </TermsConditionsForm>
        <ButtonWrapper>
          <SignUpButton onClick={submit}>회원가입</SignUpButton>
        </ButtonWrapper>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpForm = styled.form`
  width: 670px;
  margin-top: 100px;
`;

const Title = styled.div`
  font-size: 28px;
`;

const TermsConditionsForm = styled.div`
  margin-top: 50px;
`;

const AllAgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px 14px 0px;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 24px;
  height: 24px;
  border: 20px solid #b7b7b7;
`;

const AllAgree = styled.div`
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  border-radius: 300px;
  color: white;
  width: 420px;
  height: 50px;
  background-color: #ff5c36;
  margin: 50px 0px 50px 0px;
  cursor: pointer;
`;
