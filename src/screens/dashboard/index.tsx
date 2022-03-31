import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

//styles components
import { 
  Container,
  Header,
  UserWrapper,
  LogoutButton,
  UserInfo,
  IconPower,
  Photo,
  User,
  UserGreeting,
  UserName,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
};

export const Dashboard = () => {
  const dataKey = '@gofinances:transactions';
  const [ data, setData ] = useState<DataListProps[]>([]);

  const loadTransactions = async () => {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
      /**
       * @description CORRIGIR BUG:
       * Listar o valor da transaction formatada em Real
       * 
       * @description CORRIGIR BUG:
       * Listar o data da transaction formatada
       */

      const amount = Number(item.amount).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        id: item.id,
        name: item.name,
        amount,
        date: date,
        category: item.category,
        type: item.type,
      }
    });

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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

          <LogoutButton>
            <IconPower name="power" />
          </LogoutButton>
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
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TransactionCard 
                amount={item.amount} 
                category={item.category} 
                date={item.date}
                name={item.name}
                type={item.type}
                key={item.key}
              />
            )
          }}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
    </Container>
  )
}
