import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Right,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles/footerComponent";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Khojeko</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum
          placeat rerum aliquam velit, enim modi dolore hic nostrum eligendi,
          magni laborum ipsum neque vero molestiae assumenda veritatis ex minus.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          2202 samuelpass hoover al
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          234-455-9039
        </ContactItem>

        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          khojeko@gamil.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
