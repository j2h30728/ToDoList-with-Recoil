import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryState, categoriesState } from "../atoms";

export default function Category() {
  // const setCategory = useSetRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const handleSelected = (event: React.FormEvent<HTMLSelectElement>) => {
    const [selectedCategory] = Object.keys(categories).filter(
      cate => cate === event?.currentTarget.value
    );
    setCategory(selectedCategory);
  };

  return (
    <select onInput={handleSelected}>
      {Object.keys(categories).map(cate => (
        <option value={cate} key={cate}>
          {cate}
        </option>
      ))}
    </select>
  );
}
