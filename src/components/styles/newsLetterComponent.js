import styled from "styled-components";
export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid lightgray;
`;
export const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 20px; ;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 100%;
`;
