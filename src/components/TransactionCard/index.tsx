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
  type: string;
  icon: string;
}

export type TransactionCardProps = {
  data: {
    type: 'receita' | 'despesa';
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

      <Amount type={data.type} >
      {data.type === 'despesa' && '- '}
      {data.amount}
      </Amount>

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
