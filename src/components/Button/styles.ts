import styled from "styled-components";

interface ContainerProps {
  background?: string;
  borderColor?: string;
  textColor?: string
}

export const Container = styled.button<ContainerProps>`
  padding: 0.6rem 1.25rem;

  background: ${(props) => props.background || 'var(--button)'};
  border: 0.063rem solid ${(props) => props.borderColor || 'var(--button)'};
  border-radius: 0.25rem;

  color: ${(props) => props.textColor || 'var(--text-primary)'};
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;