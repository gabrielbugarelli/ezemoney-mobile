import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

type HighLightCardProps = {
  title: string;
  amount:string;
  lastTransaction: string;
  typeTransaction: 'up' | 'down' | 'total';
}

const iconTransactionType = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const HighLightCard = ({ title, amount, lastTransaction, typeTransaction }: HighLightCardProps) => {

  return (
    <Container type={typeTransaction}>
      <Header>
        <Title type={typeTransaction}> {title} </Title>

        <Icon
          name={iconTransactionType[typeTransaction]}
          type={typeTransaction}
        />
      </Header>

      <Footer>
        <Amount type={typeTransaction}> {amount} </Amount>
        <LastTransaction type={typeTransaction}> {lastTransaction} </LastTransaction>
      </Footer>
    </Container>
  )
}
