### <span style="color:#ff7494">1. 출처</span>

<b>Online Tutorials</b>

- https://www.youtube.com/watch?v=nUUsUAPEjFc
- https://www.youtube.com/watch?v=q3zc1ph5fvg

### <span style="color:#ff7494">2. 소감</span>

#### 1) 한계

(1) `.navigation`, `.card` 등은 React component로 만드는 게 나을 것 같다.
(2) 수치 및 data들은 server에서 불러오는 걸로 바꾸어야 한다.
(3) icon도 실무에서는 desgign team에서 줄 것 같다.
(4) class명을 더 구체적으로 적을 필요가 있어 보인다. e.g. class명이 그냥 `.btn`인데 button이 이거 하나일 확률은 적어보이기 때문.
ㄴ 사실 이 toggle은 button이 아니라 link이기 때문에 애초에 `.btn`으로 class명을 만들면 안 되는 거 아닐까. 동료들에게 혼란을 줄 것 같은데.

#### 2) 더 알고 싶은 것

(1) profile 사진 비율 깨지지 않게 입력하는 법
ㄴ 그래서 다른 site들은 사용자가 직접 사진의 영역을 선택하게 만드는 건가?
(2) menu toggle이 사용자가 click하는 것보다 media query가 우선되어서 사용자가 이미 menu를 최소화했음에도 불구하고 화면 가로 길이를 확장하면 menu 영역도 따라서 확장된다.
ㄴ 그리고 새로고침 하면 역시 menu 영역이 확장되는데, 사용자가 menu를 최소화했다면 새로고침을 한 이후에도 사용자의 설정이 유지되어야 하는 건 아닐까?

#### 3) 추가로 한 것

(1) chart.js의 code에서 var가 const로 변경되어 있길래 나도 그에 맞게 변경하였다.
(2) `responsive: true,`가 적용되지 않아 `maintainAspectRatio: false,`를 추가하였다.
(3) 그래도 새로고침하지 않고 반응형을 구현하려고 하면 뜻대로 되지 않아 일단 body에서 삭제했던 `overflow-x: hidden;`을 주석처리해 두었다.
