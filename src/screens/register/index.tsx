import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

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
  name: string;
  amount: number;
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
  const dataKey = '@gofinances:transactions';
  const navigation = useNavigation();

  const [ transactionType, setTransactionType ] = useState('');
  const [ openCategoryModal, setOpenCategoryModal ] = useState(false);
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const { control, reset, handleSubmit, formState: { errors }} = useForm({
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

  const handleSubmitRegister = async (form: FormData) => {
    if(!transactionType) {
      return Alert.alert('Selecione o tipo de transação!');
    }
    
    if(category.key === 'category') {
      return Alert.alert('Selecione uma categoria!');
    }

    const newTransactionData = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransactionData
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset(); //reseta os campos do React Hook Form
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigation.navigate('Transações');

    } catch (error) {
      console.log(`Erro ao cadastrar o lançamento: ${error}`);
      Alert.alert('Não foi possível cadastrar o lançamento!');
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem(dataKey);
    }
    
    loadData();

    //deleta dados do Async Storage
    // (async () => {
    //   await AsyncStorage.removeItem(dataKey);
    //   console.log('deletou');
      
    // })();

  }, []);

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
