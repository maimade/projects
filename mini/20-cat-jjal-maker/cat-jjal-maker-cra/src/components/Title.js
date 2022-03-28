const Title = (props) => {
  // console.log(props);
  // <Title></Title> 안에 적은 걸 받은 건 children으로 오기 때문에 .children
  return <h1>{props.children}</h1>;
};

export default Title;
