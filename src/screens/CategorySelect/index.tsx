import { useEffect } from "react";
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

interface CategorySelectProps extends CategoryType {
  category: string;
  setCategory: (category: CategoryType) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({}: CategorySelectProps ) => {

  useEffect(() => {

  }, [])

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}

        ItemSeparatorComponent={() => <Separator />}
      />

        <Footer>
          <Button title="Selecionar" />
        </Footer>
    </Container>
  )
}
