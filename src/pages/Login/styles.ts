import styled from "styled-components";

export const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    height: 60%;

    @media(max-width: 500px) {
      display: none;
    }
  }

  @media(max-width: 500px) {
    flex-direction: column;
  }
`;