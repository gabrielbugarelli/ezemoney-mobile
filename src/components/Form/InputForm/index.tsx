import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const InputForm = ({ control, name, error, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest} 
          />
        )}
      />
      
      {/* Exibe a mensagem de erro somente se houver algum */}
      {error && <Error>{error}</Error>}
    </Container>
  );
};