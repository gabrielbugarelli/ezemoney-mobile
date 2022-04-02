import { HistoryCard } from '../../components/HistoryCard';

import { 
  Container, 
  Header,
  Title, 
} from './styles';

export const Metric = () => {
  return (
    <Container>
      <Header>
        <Title>Métricas de Receita</Title>
      </Header>

      <HistoryCard
        title="Compras"
        amount="R$ 150,00"
        color="red"
      />
    </Container>
  );
}
