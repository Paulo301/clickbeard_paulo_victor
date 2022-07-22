import styled from "styled-components";

interface ContainerProps {
  vertical?: boolean;
}

export const Container = styled.hr<ContainerProps>`
  height: ${(props) => props.vertical ? '100%' : '0.063rem' };
  width: ${(props) => props.vertical ? '0.063rem' : '100%' };
`;