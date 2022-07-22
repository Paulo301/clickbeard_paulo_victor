import styled from "styled-components";
import { rootColors } from "../../styles/global";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  text-align: center;

  padding: 4rem 0.625rem 1rem;
  border-radius: 0.5rem;
  width: 16rem;
  flex-shrink: 0;

  img {
    width: 4rem;
    height: 4rem;

    border-radius: 0.25rem;
  }

  h1 {
    font-size: 1.5rem;
    
    margin-top: 1rem;
  }

  p {
    font-size: 0.9rem;

    margin-top: 1rem;
  }

  background-color: ${rootColors.white};

  transition: box-shadow 0.2s;

  &:hover {
    cursor: pointer;

    box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  }
`;