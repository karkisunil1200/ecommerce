import React from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Button,
  Link,
} from "./styles/loginPage";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link to="">Forgot password?</Link>
          <Link>Register</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
