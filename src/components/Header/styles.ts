import styled from "styled-components";

import { transparentize } from "polished";
import { rootColors } from "../../styles/global";

export const Container = styled.header`
  max-width: 1600px;

  margin: 0 auto;
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  position: relative;

  button {
    &:first-child {
      @media(min-width: 720px) {
        display: none;
      }
    }
  }
  
  nav {
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

    @media(max-width: 720px) {
      display: none;
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

  height: 4.375rem;
  width: 9.375rem;

  img {
    width: 9.375rem;
    height: 9.375rem;
    margin-top: 0.5rem;
  }
`;