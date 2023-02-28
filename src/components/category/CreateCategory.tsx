import { useForm } from "react-hook-form";
import { categoriesState } from "../../atoms";
import { useSetRecoilState } from "recoil";
interface Category {
  category: string;
}
export default function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>();
  const handleCategory = ({ category }: Category) => {
    setCategories(oldCategories => ({ [category]: [], ...oldCategories }));
    setValue("category", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleCategory)}>
        <input
          {...register("category", { required: "Please write a category" })}
        />
        <p>{errors?.category?.message}</p>
        <input type="submit" value="Add a Category" />
      </form>
    </div>
  );
}
