import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "todo list",
  storage: localStorage,
});

// export enum Category {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }
export interface ICategory {
  [key: string]: [];
}
export interface ITodo {
  text: string;
  id: number;
  category: string;
}
export const todosState = atom<ITodo[]>({
  key: "toDos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});
export const categoriesState = atom<ICategory>({
  key: "categories",
  default: { TO_DO: [] },
});

export const toDoSelector = selector({
  key: "toDoSlector",
  get: ({ get }) => {
    const toDos = get(todosState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  },
});
