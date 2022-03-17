import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

export const HighLightCard = () => {
  return (
    <Container>
      <Header>
        <Title> Entrada </Title>
        <Icon name="arrow-up-circle"/>
      </Header>

      <Footer>
        <Amount>R$: 17.400,00</Amount>
        <LastTransaction>Última entrada foi dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}
