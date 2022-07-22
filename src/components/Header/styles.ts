import styled from "styled-components";

import { transparentize } from "polished";
import { rootColors } from "../../styles/global";

export const Container = styled.header`
  max-width: 1600px;

  margin: 0 auto;
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  width: 100%;

  position: relative;

  button {
    &:first-child {
      @media(min-width: 720px) {
        display: none;
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  overflow: hidden;

  height: 4.375rem;
  width: 9.375rem;

  img {
    width: 9.375rem;
    height: 9.375rem;
    margin-top: 0.5rem;
  }
`;

export const Menu = styled.nav`
  float: none;
  position: absolute;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  ul {
    display: flex;
    list-style: none;

    li {
      a {
        text-decoration: none;

        transition: color 0.2s;

        color: ${rootColors.textPrimary};

        &:hover {
          color: ${transparentize(0.3, rootColors.textPrimary)};
        }
      }
    }

    li + li {
      margin-left: 1rem;
    }
  }

  @media(max-width: 719px) {
    display: none;
  }
`;

export const MenuMobile = styled.nav`
  ul {
    display: flex;
    flex-direction: column;

    list-style: none;

    li {
      a {
        text-decoration: none;

        button {
          width: 100%;

          border: 0;
          background-color: transparent;

          text-align: left;
          color: ${rootColors.textPrimary};

          transition: color 0.2s, background-color 0.2s;

          &:hover {
            color: ${transparentize(0.3, rootColors.textPrimary)};
            background-color: ${rootColors.backgroundButtonHover};
          }

          padding: 1rem;
        }
      }
    }
  }
`;