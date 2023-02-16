import { atom, selector } from "recoil";

export enum Category {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: Category;
}
export const todosState = atom<ITodo[]>({
  key: "toDos",
  default: [],
});

export const categoryState = atom<Category>({
  key: "category",
  default: Category.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSlector",
  get: ({ get }) => {
    const toDos = get(todosState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  },
});
