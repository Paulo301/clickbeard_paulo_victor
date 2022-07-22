import { ButtonHTMLAttributes } from 'react';

import { IconType } from 'react-icons';

import { Container } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size: number;
  iconColor?: string;
}

export function IconButton(props: IconButtonProps) {
  const {
    icon: Icon,
    size,
    ...rest
  } = props;

  return (
    <Container
      {...rest}
    >
      <Icon size={size} />
    </Container>
  );
}