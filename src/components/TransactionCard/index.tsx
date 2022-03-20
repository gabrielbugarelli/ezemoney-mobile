import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from "./styles";

type CategoryProps = {
  type: 'receita' | 'despesa';
  icon: string;
}

type TransactionCardProps = {
  data: {
    title: string,
    amount: string,
    category: CategoryProps,
    date: string,
  }
}

export const TransactionCard = ( {data}: TransactionCardProps ) => {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.type}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};
