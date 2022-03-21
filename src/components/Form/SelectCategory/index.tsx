import { Container, Category, Icon } from "./styles";

type SelectCategory = {
  title: string;
}

export const SelectCategory = ({title}: SelectCategory) => {

  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
