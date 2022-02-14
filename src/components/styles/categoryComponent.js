import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px; ;
`;

export const Button = styled.button`
  border: none;
  padding: 14px;
  cursor: pointer;
  color: gray;
  background-color: white;
`;