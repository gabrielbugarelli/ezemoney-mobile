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
    type: 'receita' | 'despesa';
    name: string,
    amount: string,
    category: CategoryProps,
    date: string,
}

export const TransactionCard = ( props: TransactionCardProps ) => {
  return (
    <Container>
      <Title>{props.name}</Title>

      <Amount type={props.type} >
      {props.type === 'despesa' && '- '}
      {props.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={props.category.icon} />
          <CategoryName>{props.category.type}</CategoryName>
        </Category>
        <Date>{props.date}</Date>
      </Footer>
    </Container>
  );
};
