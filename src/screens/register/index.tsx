import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
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

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Informe uma descrição!'),

  amount: Yup
    .number()
    .typeError('Informe um valor!')
    .positive('O valor não pode ser negativo!')
    .required('O valor é obrigatório!')
})

export const Register = () => {
  const [ transactionType, setTransactionType ] = useState('');
  const [ openCategoryModal, setOpenCategoryModal ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const { control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

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
    
    if(category.key === 'category') {
      return Alert.alert('Selecione uma categoria!');
    }

    const dataFormRegister = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log('Log: dataFormRegister', dataFormRegister);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Nova Transação</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name='name'
              placeholder='Descrição'
              control={control}
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name='amount'
              placeholder='Valor'
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  )
}
