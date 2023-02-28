import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoState } from "../../atoms";

interface Todo {
  todo: string;
}

export default function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>();
  const handleTodo = ({ todo }: Todo) => {
    setTodos(oldTodos => [
      { text: todo, id: Date.now(), category: category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleTodo)}>
        <input
          {...register("todo", { required: "Please write a to do" })}
          placeholder="Write to do"
        />
        <p>{errors?.todo?.message}</p>
        <input type="submit" value="Add a to do" />
      </form>
    </div>
  );
}
