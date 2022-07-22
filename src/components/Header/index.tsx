import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Drawer from 'react-modern-drawer';

import {
  Menu as RMenu,
  MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { IoIosMenu } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import logoImg from '../../assets/logo.png';

import { IconButton } from '../IconButton';

import { Container, Logo, Menu, MenuMobile } from './styles';

interface HeaderProps {
  
}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Container>
      {
        pathname === '/' && (
          <IconButton onClick={toggleDrawer} icon={IoIosMenu} size={36} />
        )
      }
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
      >
        <MenuMobile>
          <ul>
            <li>
              <a href="#home">
                <button onClick={toggleDrawer}>
                  Home
                </button>
              </a>
            </li>
            <li>
              <a href="#servicos">
                <button onClick={toggleDrawer}>
                  Serviços
                </button>
              </a>
            </li>
            <li>
              <a href="#contato">
                <button onClick={toggleDrawer}>
                  Contato
                </button>
              </a>
            </li>
          </ul>
        </MenuMobile>
      </Drawer>


      <Logo onClick={() => navigate('/')}>
        <img src={logoImg} alt="ClickBeard" />
      </Logo>

      <div style={{ flex: 1 }} />

      {
        pathname === '/' && (
          <Menu>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </Menu>
        )
      }
      
      <RMenu
        direction='bottom'
        align='center'
        menuButton={<IconButton icon={BiUserCircle} size={36} />} 
        transition
      >
        <MenuItem onClick={() => navigate('/login')}>Entrar/Cadastrar</MenuItem>
      </RMenu>
    </Container>
  );
}