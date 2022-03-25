import { Container, Category, Icon } from "./styles";

type SelectCategory = {
  title: string;
  onPress: () => void;
}

export const SelectCategoryButton = ({title, onPress}: SelectCategory) => {

  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
