import { categoriesState, ITodo, todoState } from "../../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Todo({ text, id, category: currCategory }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const categories = useRecoilValue(categoriesState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos(oldTodos => {
      const targetIndex = oldTodos.findIndex(todo => todo.id === id);
      const newTodo = { text, id, category: name };
      return oldTodos.map((todo, idx) =>
        idx === targetIndex ? (todo = newTodo) : todo
      );
    });
  };
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const todoText = event.currentTarget.parentNode?.children[1].textContent;
    setTodos(oldTodos => oldTodos.filter(todo => todo.text !== todoText));
  };
  return (
    <div>
      <button onClick={handleRemove}>❎</button>
      <span>{text}</span>
      {Object.keys(categories).map(
        category =>
          category !== currCategory && (
            <button name={category} key={category} onClick={handleCategory}>
              {category}
            </button>
          )
      )}
    </div>
  );
}
