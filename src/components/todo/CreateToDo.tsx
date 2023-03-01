import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoState } from "../../atoms/atoms";
import { Form, Title } from "../../styles/common";

interface Todo {
  todo: string;
}

export default function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, setValue, handleSubmit } = useForm<Todo>();
  const handleTodo = ({ todo }: Todo) => {
    setTodos(oldTodos => [
      { text: todo, id: Date.now(), category: category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <div>
      <Title>ToDo</Title>
      <Form onSubmit={handleSubmit(handleTodo)}>
        <input
          {...register("todo", { required: "Please write a to do" })}
          placeholder="Write to do"
        />
        <input type="submit" value="+" />
      </Form>
    </div>
  );
}
