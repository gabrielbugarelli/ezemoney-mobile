import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard } from '../../components/TransactionCard';

//styles components
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  IconPower,
  Photo,
  User,
  UserGreeting,
  UserName,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export const Dashboard = () => {

  const data = [
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$: 12.500,00',
      category: {icon: 'dollar-sign', type: 'despesa'},
      date: '12/04/2022',
    },
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$: 12.500,00',
      category: {icon: 'dollar-sign', type: 'receita'},
      date: '12/04/2022',
    },
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$: 12.500,00',
      category: {icon: 'dollar-sign', type: 'receita'},
      date: '12/04/2022',
    },
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$: 12.500,00',
      category: {icon: 'dollar-sign', type: 'receita'},
      date: '12/04/2022',
    },
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/47955200?s=400&u=8bc89f52846ce66892fb632219c5c5a4c21086d4&v=4'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel!</UserName>
            </User>
          </UserInfo>

          <IconPower name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          title="Entradas"
          amount="R$: 10.345,00"
          lastTransaction="10/02/2022"
          typeTransaction='down'
        />
        
        <HighLightCard
          title="Despesas"
          amount="R$: 3.800,00"
          lastTransaction="16/03/2022"
          typeTransaction='up'
        />

        <HighLightCard
          title="Receita Total"
          amount="R$: 23.650,00"
          lastTransaction="16/03/2022"
          typeTransaction='total'
        />

      </HighLightCards>

      <Transactions>
        <Title>Transações</Title>

        <TransactionsList
          data={data}
          renderItem={({item}) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
    </Container>
  )
}
