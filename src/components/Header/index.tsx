import { useLocation } from "react-router-dom";

import { BiUserCircle } from 'react-icons/bi';
import logoImg from '../../assets/logo.png';

import { IconButton } from '../IconButton';

import { Container } from './styles';

interface HeaderProps {
  
}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        <img src={logoImg} alt="ClickBeard" />
      </div>
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

      <IconButton icon={BiUserCircle} size={36} />
    </Container>
  );
}