import { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Container, Header, Title, Form, Fields, TransactionsTypes} from './styles';

export const Register = () => {
  const [ transactionType, setTransactionType ] = useState('');

  const handleTransactionTypeSelect = (type: 'receita' | 'despesa') => {
    setTransactionType(type);
  } 

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
              onPress={()=> handleTransactionTypeSelect('receita')}
              isActive={transactionType === 'receita'}
            />

            <TransactionTypeButton
              title='Despesa'
              icon='despesa'
              onPress={()=> handleTransactionTypeSelect('despesa')}
              isActive={transactionType === 'despesa'}
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
