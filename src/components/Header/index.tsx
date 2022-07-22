import { useLocation } from "react-router-dom";

import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { IoIosMenu } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import logoImg from '../../assets/logo.png';

import { IconButton } from '../IconButton';

import { Container, Logo } from './styles';

interface HeaderProps {
  
}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <IconButton icon={IoIosMenu} size={36} />

      <Logo>
        <img src={logoImg} alt="ClickBeard" />
      </Logo>

      <div style={{ flex: 1 }} />

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
      
      <Menu
        direction='bottom'
        align='center'
        menuButton={<IconButton icon={BiUserCircle} size={36} />} 
        transition
      >
        <MenuItem>Entrar/Cadastrar</MenuItem>
      </Menu>
    </Container>
  );
}