import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { HistoryCard } from '../../components/HistoryCard';

import { 
  Container, 
  Header,
  Title,
  Content,
  ChartContainer
} from './styles';
import { categories } from '../../utils/categories';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

type TransactionData = {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

type CategoryData = {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export const Metric = () => {
  const theme = useTheme();
  const [ totalByCategories, setTotalByCategories ] = useState<CategoryData[]>([]);

  const loadData = async () => {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted
    .filter((expensive: TransactionData) => expensive.type === 'negative');

    const expensiveTotal = expensives.reduce((accumulator: number, expensive: TransactionData) => {
      return accumulator + Number(expensive.amount);
    }, 0);

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if(expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      
      if(categorySum > 0) {
        const totalFormatted = categorySum
        .toLocaleString("pt-BR", {
          style: 'currency',
          currency: "BRL"
        });

        const percent = `${(categorySum / expensiveTotal * 100).toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent
        });
      }
    });
    
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <Container>
      <Header>
        <Title>Métricas de Receita</Title>
      </Header>

      <ChartContainer>
        <VictoryPie
          y="total"
          x="percent"
          width={400}
          data={totalByCategories}
          colorScale={totalByCategories.map((category) => category.color)}
          labelRadius={80}
          style={{
            labels: { fontSize: RFValue(18), fontWeight: 'bold', fontFamily:theme.fonts.bold, fill: theme.colors.shape }
          }}
        />
      </ChartContainer>

      <Content>
        {
          totalByCategories.map((category) => (
            <HistoryCard
              key={category.key}
              title={category.name}
              amount={category.totalFormatted}
              color={category.color}
            />
          ))
        }
      </Content>
    </Container>
  );
}
