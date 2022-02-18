import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Desc = styled.div`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #${(props) => props.color};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#eee", width: " 100vw", margin: "0px 20px" })}
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  font-size: 15px;
`;
