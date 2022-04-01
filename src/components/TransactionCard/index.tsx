import { categories } from "../../utils/categories";
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

export type TransactionCardProps = {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

export const TransactionCard = ( props: TransactionCardProps ) => {
  const [ category ] = categories.filter(item => {
    return item.key === props.category;
  });

  return (
    <Container>
      <Title>{props.name}</Title>

      <Amount type={props.type} >
      {props.type === 'negative' && '- '}
      {props.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.key}</CategoryName>
        </Category>
        <Date>{props.date}</Date>
      </Footer>
    </Container>
  );
};
