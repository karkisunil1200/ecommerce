import { Send } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./styles/newsLetterComponent";

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>GetTimely update</Description>
      <InputContainer>
        <Input type="email" placeholder="enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
