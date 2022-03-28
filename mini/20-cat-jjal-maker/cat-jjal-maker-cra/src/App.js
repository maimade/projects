import React from "react";
import Title from "./components/Title.js";
import "./App.css";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

// 중괄호와 return은 없앨 수 있으니까
const Form = ({ updateMainCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(e) {
    const userValue = e.target.value;
    // console.log(includesHangul(usersValue));
    if (includesHangul(userValue)) {
      setErrorMessage("영어 알파벳 대문자로 만들 거예요");
    } else {
      setErrorMessage("");
    }
    setValue(userValue.toUpperCase());
  }

  function handleFormSubmit(e) {
    e.preventDefault(); // 아래 return에 있는 onSubmit이 실행되면 event 발생 시 browser에서 자동으로 새로고침하기 때문에 이를 막기 위한 code
    setErrorMessage(""); // 여기에서 먼저 초기화해 주면 밑에서 else로 따로 써주지 않아도 if로 들어가기 전에 초기화부터 됨
    if (value === "") {
      setErrorMessage("입력하지 않으면 만들 수 없습니닷");
      return;
    }
    updateMainCat(value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="making-box">
        <input
          type="text"
          name="name"
          placeholder="영어랑 숫자만 돼요 :b"
          value={value}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit" id="submit">
          만들기
        </button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </form>
  );
};

function CatItem(props) {
  // console.log(props);
  return (
    <li>
      <img src={props.img} style={{ width: "150px" }} />
    </li>
  );
}

function Favorites({ favorites }) {
  if (favorites.length === 0) {
    return <div>사진 위 "🤍"를 눌러 고양이 사진을 저장해 보아요 XD</div>;
  }
  return (
    <ul className="favorites">
      {favorites.map((cat) => (
        <CatItem img={cat} key={cat} />
      ))}
    </ul>
  );
}

// // MainCard는 화살표함수로 변경해 보기
// const MainCard = (props) => {
//   return (
//     <div class="main-card">
//       <img src={props.img} alt="고양이" width="400" />
//       <button>🤍</button>
//     </div>
//   );
// };
// ↓ ES6+ 디스트럭처링 문법을 적용한 MainCard 컴포넌트
const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
  const heartIcon = alreadyFavorite ? "😻" : "🤍";
  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
};
// const app = (
//   <div>
//     <Title>우리의 뤼액트 고영이</Title>
//     <Form />
//     <MainCard img="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
//     <Favorites />
//   </div>
// );
const App = () => {
  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";
  const CAT2 = "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn";
  const CAT3 =
    "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript";
  // console.log("카운터", counter);

  const [counter, setCounter] = React.useState(() => {
    // useState에 함수를 넣어서 local storage를 부르므로 약간의 성능 최적화가 된 것
    return jsonLocalStorage.getItem("counter");
  });
  const [mainCat, setMainCat] = React.useState(CAT1);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });

  const alreadyFavorite = favorites.includes(mainCat);

  async function setInitialCat() {
    const newCat = await fetchCat("First Cat");
    console.log(newCat);
    setMainCat(newCat);
  }

  React.useEffect(() => {
    setInitialCat();
  }, []);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setMainCat(newCat);
    // setCounter(nextCounter); 이렇게 하면 빠르게 '만들기'를 눌렀을 때 그 속도만큼 1을 더하지 못함
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem("counter", nextCounter);
      return nextCounter;
    });
  }

  function handleHeartClick() {
    // console.log("하트 누름");
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  const counterTitle = counter === null ? "" : "넘버 " + counter + " ";

  return (
    <div>
      <Title>우리의 {counterTitle}뤼액트 고영이</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handleHeartClick}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
