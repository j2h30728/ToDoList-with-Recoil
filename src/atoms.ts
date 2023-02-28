import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

const { persistAtom } = recoilPersist();
export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

interface ICategory {
  [key: string]: [];
}
export const categoriesState = atom<ICategory>({
  key: "categories",
  default: { TO_DO: [], DONE: [] },
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);

    return todos.filter(todo => todo.category === category);
  },
});
