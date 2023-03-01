import { categoriesState, todoState } from "../../atoms/atoms";
import { XButton } from "../../styles/common";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function RemoveButton() {
  const [todos, setTodos] = useRecoilState(todoState);
  const setCategories = useSetRecoilState(categoriesState);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const categoryText =
      event.currentTarget.parentNode?.children[0].textContent;
    const leavedTodo = todos.filter(todo => todo.category === categoryText);
    if (leavedTodo.length > 0) {
      const confirm = window.confirm(
        "해당카테고리에 남은 Todo가 있습니다. 모두 삭제하시겠습니까?"
      );
      if (!confirm) return;
      setTodos(oldTodos =>
        oldTodos.filter(todo => todo.category !== categoryText)
      );
    }
    setCategories(oldCategories => {
      const newCategory = { ...oldCategories };
      delete newCategory[`${categoryText}`];
      return newCategory;
    });
  };

  return <XButton onClick={handleRemove}>✕</XButton>;
}
