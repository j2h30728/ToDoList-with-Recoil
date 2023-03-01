import styled from "styled-components";
import { categoriesState, ITodo, todoState } from "../../atoms/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import RemoveButton from "./RemoveButton";

export default function Todo({ text, id, category: currCategory }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const categories = useRecoilValue(categoriesState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos(oldTodos => {
      const targetIndex = oldTodos.findIndex(todo => todo.id === id);
      const newTodo = { text, id, category: name };
      return oldTodos.map((todo, idx) =>
        idx === targetIndex ? (todo = newTodo) : todo
      );
    });
  };

  return (
    <Container>
      <div>
        <RemoveButton />
        <Content>{text}</Content>
      </div>
      <div>
        {Object.keys(categories).map(
          category =>
            category !== currCategory && (
              <Category name={category} key={category} onClick={handleCategory}>
                {category}
              </Category>
            )
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.bgOverviewColor};

  div:first-child {
    width: 100%;
    margin-bottom: 10px;
  }
  div:last-child {
    width: 100%;
    padding-left: 30px;
  }
`;

const Content = styled.span`
  margin-left: 10px;
`;

const Category = styled.button`
  background-color: ${props => props.theme.darkBgColor};
  border-radius: 5px;
  margin: 1px;
  cursor: pointer;
  border: 1px dashed ${props => props.theme.accentColor};
`;
