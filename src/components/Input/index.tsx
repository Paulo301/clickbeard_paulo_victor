import React, { forwardRef, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    ...rest
  } = props;

  return (
    <Container
      {...rest}
    />
  );
});