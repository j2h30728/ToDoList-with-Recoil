import { categoriesState, ITodo, todosState, categoryState } from "../atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

export default function ToDo({ text, id }: ITodo) {
  const setTodo = useSetRecoilState(todosState);
  const categories = useRecoilValue(categoriesState);
  const category = useRecoilValue(categoryState);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodo(oldToDos => {
      const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { text, id, category: name };
      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTodo =
      event?.currentTarget.parentElement?.children[1].textContent;
    setTodo(oldToDos => {
      return [...oldToDos].filter(toDo => toDo.text !== deleteTodo);
    });
  };

  return (
    <div>
      <button onClick={handleDelete}>❎</button>
      <span>{text}</span>
      {Object.keys(categories).map(
        cate =>
          cate !== category && (
            <button name={cate} onClick={handleClick} key={cate}>
              {cate}
            </button>
          )
      )}
    </div>
  );
}
