export const CHECKLIST_DATA = [
  { id: 1, content: '만 14세 이상입니다.', select: false },
  { id: 2, content: '이용 약관 동의', select: false },
  { id: 3, content: '개인정보처리방침 동의', select: false },
];

export const SIGN_UP_DATA = [
  {
    id: 1,
    title: '이름',
    name: 'name',
    placeholder: '이름을 입력해 주세요.',
    type: 'text',
    wrongValueMessage:
      '이름은 2글자 이상 20자 미만의 한글 또는 영문으로 입력해주세요.',
  },
  {
    id: 2,
    title: '연락처',
    name: 'phoneNumber',
    placeholder: "연락처('-' 제외)를 입력해 주세요.",
    type: 'text',
    wrongValueMessage: '11 이상의 글자수를 입력하십시오.',
  },
  {
    id: 3,
    title: '아이디(이메일)',
    name: 'email',
    placeholder: '아이디(이메일)을 입력해 주세요.',
    type: 'email',
    wrongValueMessage: '입력하신 이메일이 유효하지 않습니다.',
  },
  {
    id: 4,
    title: '비밀번호',
    name: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    type: 'password',
    wrongValueMessage: '4 이상의 글자수를 입력하십시오.',
  },
  {
    id: 5,
    title: '비밀번호 확인',
    name: 'confirmPassword',
    placeholder: '비밀번호를 다시 입력해 주세요.',
    type: 'password',
    wrongValueMessage: '같은 값을 입력하여 주십시오.',
  },
];
