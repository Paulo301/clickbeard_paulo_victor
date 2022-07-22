import { Divider } from "../../components/Divider";

import { Register } from "./Register";
import { Signin } from "./Singin";

import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <Signin />
      <Divider vertical={true} />
      <Register />
    </Container>
  );
}