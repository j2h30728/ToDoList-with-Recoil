import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState, categoryState } from "../../atoms";
import { DeleteButton } from "../../styles/common";
export default function CategoryList() {
  const [cateogries, setCategories] = useRecoilState(categoriesState);
  const [currCategory, setCurrCategory] = useRecoilState(categoryState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.textContent &&
      setCurrCategory(event.currentTarget.textContent);
  };
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const categoryText =
      event.currentTarget.parentNode?.children[0].textContent;
    setCategories(oldCategories => {
      const newCategory = { ...oldCategories };
      delete newCategory[`${categoryText}`];
      return newCategory;
    });
  };
  return (
    <Container>
      {Object.keys(cateogries).map(category => (
        <CategoryWrapper key={category}>
          <Category
            isActive={currCategory === category}
            onClick={handleCategory}>
            <span>{category}</span>
          </Category>
          {category !== "⏱TO_DO" &&
          category !== "🎉DONE" &&
          category !== "⛹️‍♂️DOING" ? (
            <DeleteButton onClick={handleRemove}>✕</DeleteButton>
          ) : undefined}
        </CategoryWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Category = styled.button<{ isActive: boolean }>`
  width: 100%;
  background-color: ${props =>
    props.isActive ? props.theme.accentColor : props.theme.baseColor};
  color: ${props => (props.isActive ? "white" : props.theme.textColor)};
  margin: 1px;
  padding: 2px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
