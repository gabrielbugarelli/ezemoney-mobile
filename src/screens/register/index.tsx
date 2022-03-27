import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
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

type FormData = {
  [name: string]: any;
}

export const Register = () => {
  const [ transactionType, setTransactionType ] = useState('');
  const [ openCategoryModal, setOpenCategoryModal ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const { control, handleSubmit} = useForm();

  const handleTransactionTypeSelect = (type: 'receita' | 'despesa') => {
    setTransactionType(type);
  } 

  const handleCloseSelectCategoryModal = () => {
    setOpenCategoryModal(false);
  }

  const handleOpenSelectCategoryModal = () => {
    setOpenCategoryModal(true);
  }

  const handleSubmitRegister = (form: FormData) => {
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação!');
    }
    
    if(!category.key) {
      return Alert.alert('Selecione uma categoria!');
    }

    const dataFormRegister = {
      description: form.description,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log('Log: dataFormRegister', dataFormRegister);
  }

  return (
    <Container>
      <Header>
        <Title>Nova Transação</Title>
      </Header>

      <Form>
        <Fields>

          <InputForm
            name='description'
            placeholder='Descrição'
            control={control}
          />

          <InputForm
            name='amount'
            placeholder='Valor'
            control={control}
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

        <Button 
          title="Cadastrar"
          onPress={handleSubmit(handleSubmitRegister)}
        />
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
