import CreateCategory from "../components/category/CreateCategory";
import CreateTodo from "../components/todo/CreateTodo";
import styled from "styled-components";
import CategoryList from "../components/category/CategoryList";
import TodoList from "../components/todo/TodoList";

export default function Home() {
  return (
    <Container>
      <CategoryWrapper>
        <CreateCategory />
        <CategoryList />
      </CategoryWrapper>
      <TodoWrapper>
        <CreateTodo />
        <TodoList />
      </TodoWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const CategoryWrapper = styled.div`
  width: 25%;
`;
const TodoWrapper = styled.div`
  width: 70%;
`;
