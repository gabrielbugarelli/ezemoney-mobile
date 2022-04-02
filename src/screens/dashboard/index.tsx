import { useEffect, useCallback, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

//styles components
import { 
  Container,
  LoadContainer,
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

type HighlightProps = {
  amount: string;
};

type HightlightData = {
  entries: HighlightProps;
  expensive: HighlightProps;
  total: HighlightProps;
}

export const Dashboard = () => {
  const dataKey = '@gofinances:transactions';
  const theme = useTheme();

  const [ isLoading, setIsLoading ] = useState(true);
  const [ transactions, setTransactions ] = useState<DataListProps[]>([]);
  const [ highlightData, setHighlightData ] = useState<HightlightData>({} as HightlightData);

  const loadTransactions = async () => {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal: number = 0;
    let expensiveTotal: number = 0;

    const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
      if(item.type === 'positive') {
        entriesTotal += Number(item.amount);
      } else {
        expensiveTotal += Number(item.amount);
      }

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

    setTransactions(transactionsFormatted);

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      expensive: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      }
    })

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []));

  return (
    <Container>
        { isLoading ? 
          <LoadContainer>
            <ActivityIndicator
              color={theme.colors.primary}
              size="large"
            />
          </LoadContainer> :
          <>
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
                amount={highlightData.entries.amount}
                lastTransaction="10/02/2022"
                typeTransaction='negative'
              />
              
              <HighLightCard
                title="Despesas"
                amount={highlightData.expensive.amount}
                lastTransaction="16/03/2022"
                typeTransaction='positive'
              />

              <HighLightCard
                title="Receita Total"
                amount={highlightData.total.amount}
                lastTransaction="16/03/2022"
                typeTransaction='total'
              />
            </HighLightCards>

            <Transactions>
              <Title>Transações</Title>

              <TransactionsList
                data={transactions}
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
          </>
        }
    </Container>
  )
}
