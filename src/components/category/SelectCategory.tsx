import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState } from "../../atoms";

export default function SelectCategory() {
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const handleCategory = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <select value={category} onInput={handleCategory}>
        {Object.keys(categories).map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
