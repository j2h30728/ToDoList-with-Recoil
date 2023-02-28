import { useRecoilValue } from "recoil";
import CreateCategory from "./category/CreateCategory";
import { todoSelector } from "../atoms";
import SelectCategory from "./category/SelectCategory";
import CreateTodo from "./todo/CreateToDo";
import Todo from "./todo/ToDo";

export default function TodoLsit() {
  const todos = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <h2>할 일 추가</h2>
      <CreateTodo />
      <hr />
      <h2>카테고리 추가</h2>
      <CreateCategory />
      <hr />
      <SelectCategory />
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
