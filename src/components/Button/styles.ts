import styled from "styled-components";
import { rootColors } from "../../styles/global";

interface ContainerProps {
  background?: string;
  borderColor?: string;
  textColor?: string
}

export const Container = styled.button<ContainerProps>`
  padding: 0.6rem 1.25rem;

  background: ${(props) => props.background || rootColors.button};
  border: 0.063rem solid ${(props) => props.borderColor || rootColors.button};
  border-radius: 0.25rem;

  color: ${(props) => props.textColor || rootColors.textPrimary};
  font-weight: 500;
  font-size: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;