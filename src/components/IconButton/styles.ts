import styled from "styled-components";

export const Container = styled.button`
  background: none;
	border: none;
	padding: 0.125rem;
	border-radius: 50%;

	transition: background-color 0.2s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}

	svg {
		color: var(--text-primary);
	}
`;