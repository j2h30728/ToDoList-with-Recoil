import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IAdd {
  add: string;
}

export default function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<IAdd>();
  const handleOnvalid = ({ add }: IAdd) => {
    if (!add) {
      return;
    }
    if (Object.keys(useRecoilState).filter(cate => cate === add).length > 1) {
      return;
    }
    setCategories(prev => {
      return { ...prev, [add]: [] };
    });
    setValue("add", "");
  };
  return (
    <form onSubmit={handleSubmit(handleOnvalid)}>
      <input {...register("add")} />
      <button>ADD</button>
    </form>
  );
}
