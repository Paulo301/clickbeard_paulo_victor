import styled from "styled-components";

import { transparentize } from "polished";
import { rootColors } from "../../styles/global";

export const Container = styled.footer`
  background: ${rootColors.textSecondary};
`;

export const Content = styled.div`
  max-width: 1600px;

  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
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
  }

  section {
    display: flex;
  }
`;