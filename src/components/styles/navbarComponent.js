import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border-bottom: 1px solid lightgray;
  border-left: 1px solid #ccc;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "20px" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ justifyContent: "center", flex: "2" })}
`;

export const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`;
