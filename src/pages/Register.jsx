import React from "react";
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Agreement,
  Button,
} from "./styles/registerPage";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            recusandae, harum fugiat eaque facilis ut ipsam quas expedita iste,
            voluptatibus accusantium similique voluptatum officiis atque maxime!
            Est, recusandae? Saepe, voluptas?
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
