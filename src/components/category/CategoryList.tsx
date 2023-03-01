import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState } from "../../atoms/atoms";
import Category from "./Category";
import RemoveButton from "./RemoveButton";

export default function CategoryList() {
  const cateogries = useRecoilValue(categoriesState);
  return (
    <Container>
      {Object.keys(cateogries).map(category => (
        <CategoryWrapper key={category}>
          <Category category={category} />
          {category !== "⏱TO_DO" &&
          category !== "🎉DONE" &&
          category !== "⛹️‍♂️DOING" ? (
            <RemoveButton />
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
