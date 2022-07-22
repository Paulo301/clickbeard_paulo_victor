import { ButtonHTMLAttributes, forwardRef } from 'react';

import { IconType } from 'react-icons';

import { Container } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size: number;
  iconColor?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    icon: Icon,
    size,
    ...rest
  } = props;

  return (
    <Container
      {...rest}
      ref={ref}
    >
      <Icon size={size} />
    </Container>
  );
});