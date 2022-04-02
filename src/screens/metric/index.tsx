import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryCard } from '../../components/HistoryCard';

import { 
  Container, 
  Header,
  Title,
  Content,
} from './styles';
import { categories } from '../../utils/categories';

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
  total: string;
  color: string;
}

export const Metric = () => {
  const [ totalByCategories, setTotalByCategories ] = useState<CategoryData[]>([]);

  const loadData = async () => {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted
    .filter((expensive: TransactionData) => expensive.type === 'negative');

    const totalByCategory: CategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if(expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      
      if(categorySum > 0) {
        const total = categorySum
        .toLocaleString("pt-BR", {
          style: 'currency',
          currency: "BRL"
        });

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total,
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

      <Content>
        {
          totalByCategories.map((category) => (
            <HistoryCard
              key={category.key}
              title={category.name}
              amount={category.total}
              color={category.color}
            />
          ))
        }
      </Content>
    </Container>
  );
}
