import Category from "./Category";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";

export default function ToDoList() {
  const todos = useRecoilValue(toDoSelector);
  return (
    <div className="App">
      <h1>Todo</h1>
      <hr />
      <Category />
      <CreateCategory />
      <hr />
      <CreateToDo />
      <div>
        {todos.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </div>
  );
}
