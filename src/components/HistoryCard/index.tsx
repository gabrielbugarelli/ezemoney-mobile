import { 
  Container, 
  Title,
  Amount,
} from "./styles";

type HistoryCardType = {
  color: string;
  title: string;
  amount: string;
}

export const HistoryCard = ({ color, title, amount }: HistoryCardType) => {
  return (
    <Container color={color}>
      <Title>{ title }</Title>
      <Amount>{ amount }</Amount>
    </Container>
  );
}
