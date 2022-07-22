import styled from "styled-components";

import { rootColors } from "../../../styles/global";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  h1 {
    font-size: 1.5rem;
  }

  label {
    margin-top: 1rem;
  }

  a {
    margin-top: 1rem;
    color: ${rootColors.textSecondary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  button {
    margin-top: 1rem;
  }
`;