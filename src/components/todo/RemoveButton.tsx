import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms/atoms";
import { XButton } from "../../styles/common";

export default function RemoveTodo() {
  const setTodos = useSetRecoilState(todoState);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const todoText = event.currentTarget.parentNode?.children[1].textContent;
    setTodos(oldTodos => oldTodos.filter(todo => todo.text !== todoText));
  };

  return <XButton onClick={handleRemove}>✕</XButton>;
}
