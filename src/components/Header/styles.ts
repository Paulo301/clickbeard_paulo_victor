import styled from "styled-components";

import { cssVar, transparentize } from "polished";

export const Container = styled.header`
  max-width: 1600px;

  margin: 0 auto;
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  div {
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
          color: var(--text-primary);

          transition: color 0.2s;

          &:hover {
            color: ${transparentize(0.3, `${cssVar('--text-primary')}`)};
          }
        }
      }

      li + li {
        margin-left: 1rem;
      }
    }
  }
`;