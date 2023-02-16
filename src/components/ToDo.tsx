import { Category, ITodo, todosState } from "../atoms";
import { useSetRecoilState } from "recoil";

export default function ToDo({ text, id, category }: ITodo) {
  const setTodo = useSetRecoilState(todosState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodo(oldToDos => {
      const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { text, id, category: name as Category };
      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <div>
      <span>{text}</span>
      {category !== Category.TO_DO && (
        <button name={Category.TO_DO} onClick={handleClick}>
          TO_DO
        </button>
      )}
      {category !== Category.DOING && (
        <button name={Category.DOING} onClick={handleClick}>
          DOING
        </button>
      )}
      {category !== Category.DONE && (
        <button name={Category.DONE} onClick={handleClick}>
          DONE
        </button>
      )}
    </div>
  );
}
