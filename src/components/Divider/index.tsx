import { Container } from './styles';

interface DividerProps {
  vertical?: boolean;
}

export function Divider(props: DividerProps) {
  const { vertical } = props;

  return (
    <Container vertical={vertical} />
  );
}