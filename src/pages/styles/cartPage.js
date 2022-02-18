import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

export const Image = styled.img`
  width: 350px;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.div``;

export const PriceDetail = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const Summary = styled.div`
  flex: 1;
`;
