import { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { SelectCategoryButton } from '../../components/Form/SelectCategoryButton';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  Fields, 
  TransactionsTypes
} from './styles';

export const Register = () => {
  const [ transactionType, setTransactionType ] = useState('');
  const [ openCategoryModal, setOpenCategoryModal ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const handleTransactionTypeSelect = (type: 'receita' | 'despesa') => {
    setTransactionType(type);
  } 

  const handleCloseSelectCategoryModal = () => {
    setOpenCategoryModal(false);
  }

  const handleOpenSelectCategoryModal = () => {
    setOpenCategoryModal(true);
  }

  return (
    <Container>
      <Header>
        <Title>Nova Transação</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Descrição"
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

          <SelectCategoryButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Cadastrar" />
      </Form>

      <Modal visible={openCategoryModal}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}
