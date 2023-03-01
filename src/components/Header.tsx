import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>Todo List</Title>
      <Box></Box>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;
const Title = styled.h1`
  margin-top: 100px;
  font-size: 45px;
  text-align: center;
`;

const Box = styled.div`
  width: 30%;
  height: 20px;
  position: absolute;
  margin: auto;
  top: 20px;
  right: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(90deg, #3e5151 0%, #decba4 100%);
`;
