import styled from "styled-components";
import { rootColors } from "../../styles/global";

interface ContainerProps {
	iconColor?: string;
}

export const Container = styled.button<ContainerProps>`
  background: none;
	border: none;
	padding: 0.125rem;
	border-radius: 50%;

	transition: background-color 0.2s;

	&:hover {
		background-color: ${rootColors.backgroundButtonHover};
	}

	svg {
		color: ${(props) => props.iconColor ? props.iconColor : rootColors.textPrimary};
	}
`;