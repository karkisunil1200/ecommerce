import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
export const Image = styled.img`
  height: 70%;
  border-radius: 6px;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;
