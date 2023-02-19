import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todosState, categoryState } from "../atoms";

interface IForm {
  toDo: string;
}
export default function CreateToDo() {
  const setTodos = useSetRecoilState(todosState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleOnvalid = ({ toDo }: IForm) => {
    setTodos(oldTodos => [
      { text: toDo, id: Date.now(), category },
      ...oldTodos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleOnvalid)}>
      <input
        {...register("toDo", { required: "Please  write a to do" })}
        placeholder="Write a to do"
      />
      <button>TO_DO</button>
      <span>{errors?.toDo?.message}</span>
    </form>
  );
}
