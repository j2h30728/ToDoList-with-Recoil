import { useSetRecoilState } from "recoil";
import { categoryState, ITodo } from "../atoms";

export default function Category() {
  const setCategory = useSetRecoilState(categoryState);
  const handleSelected = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event?.currentTarget.value as ITodo["category"]);
  };

  return (
    <select onInput={handleSelected}>
      <option value="TO_DO">TO_DO</option>
      <option value="DOING">DOING</option>
      <option value="DONE">DONE</option>
    </select>
  );
}
