import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0;

  input:first-child {
    width: 100%;
    border-radius: 5px;
    height: 35px;
    padding: 10px;
  }
  input:last-child {
    width: 5%;
    min-width: 30px;
    font-size: 20px;
    text-align: center;
    margin: 1px;
    border-radius: 100%;
    border: none;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: ${props => props.theme.accentColor};
`;
export const XButton = styled.button`
  background-color: transparent;
  border-radius: 50%;
  height: 100%;
  border: none;
  cursor: pointer;
  color: grey;
`;
