import { useLocation } from "react-router-dom";

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

import { IconButton } from '../IconButton';

import { Container, Content } from "./styles";

interface FooterProps {

}

export function Footer(props: FooterProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        {
          pathname === '/' && (
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
          )
        }

        <section>
          <IconButton icon={AiFillFacebook} size={36} />
          <IconButton icon={AiFillTwitterCircle} size={36} />
          <IconButton icon={AiFillInstagram} size={36} />
        </section>
      </Content>
    </Container>
  );
}