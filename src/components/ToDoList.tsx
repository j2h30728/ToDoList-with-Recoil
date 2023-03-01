import { useRecoilValue } from "recoil";
import CreateCategory from "./category/CreateCategory";
import { todoSelector } from "../atoms";
import CreateTodo from "./todo/CreateToDo";
import Todo from "./todo/ToDo";
import styled from "styled-components";
import CategoryList from "./category/CategoryList";

export default function TodoLsit() {
  const todos = useRecoilValue(todoSelector);
  return (
    <Container>
      <CategoryWrapper>
        <CreateCategory />
        <CategoryList />
      </CategoryWrapper>
      <TodoWrapper>
        <CreateTodo />
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </TodoWrapper>
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid black; */
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
