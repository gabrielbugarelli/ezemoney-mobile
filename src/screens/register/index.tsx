import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Nova Transação</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />
          <Input 
            placeholder="Valor"
          />
        
          <TransactionsTypes>
            <TransactionTypeButton
              title='Receita'
              icon='receita'
            />
            <TransactionTypeButton
              title='Despesa'
              icon='despesa'
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
