import { useForm } from "react-hook-form";
import { categoriesState } from "../../atoms/atoms";
import { useSetRecoilState } from "recoil";
import { Form, Title } from "../../styles/common";
interface Category {
  category: string;
}
export default function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, setValue, handleSubmit } = useForm<Category>();
  const handleCategory = ({ category }: Category) => {
    setCategories(oldCategories => ({ ...oldCategories, [category]: [] }));
    setValue("category", "");
  };
  return (
    <>
      <Title>Category</Title>
      <Form onSubmit={handleSubmit(handleCategory)}>
        <input
          {...register("category", { required: "Please write a category" })}
          placeholder="Add a category"
        />
        <input type="submit" value="+" />
      </Form>
    </>
  );
}
