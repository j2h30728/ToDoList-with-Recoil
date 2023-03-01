import { useRecoilValue } from "recoil";
import { todoSelector } from "../../atoms/atoms";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useRecoilValue(todoSelector);

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
