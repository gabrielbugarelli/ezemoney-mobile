import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";

import { 
  Container, 
  Header, 
  Title, 
  Category, 
  Icon, 
  Name, 
  Separator,
  Footer
} from "./styles"

import { categories } from '../../utils/categories';

type CategoryType = {
  key: string;
  name: string;
}

type CategorySelectProps = {
  category: CategoryType;
  setCategory: (category: CategoryType) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({ category, setCategory, closeSelectCategory }: CategorySelectProps ) => {

  const handleCategorySelect = (category: CategoryType) => {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <Category
            onPress={() => handleCategorySelect(item)}
          >
            <Icon 
              name={item.icon}
              isActive={category.key === item.key}
            />
            <Name
              isActive={category.key === item.key}
            > 
              {item.name}
            </Name>
          </Category>
        )}

        ItemSeparatorComponent={() => <Separator />}
      />

        <Footer>
          <Button 
            title="Selecionar"
            onPress={closeSelectCategory}
          />
        </Footer>
    </Container>
  )
}
