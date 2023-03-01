import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../atoms/atoms";

export default function Category({ category }: { category: string }) {
  const [currCategory, setCurrCategory] = useRecoilState(categoryState);
  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.textContent &&
      setCurrCategory(event.currentTarget.textContent);
  };
  return (
    <Name isActive={currCategory === category} onClick={handleCategory}>
      {category}
    </Name>
  );
}
const Name = styled.button<{ isActive: boolean }>`
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
