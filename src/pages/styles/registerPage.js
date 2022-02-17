import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images6.alphacoders.com/911/911401.jpg");
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  min-width: 40%;
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  align-items: center;
  display: flex;
`;
