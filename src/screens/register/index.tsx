import { Input } from '../../components/Form/Input';
import { Container, Header, Title, Form } from './styles';

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Nova Transação</Title>
      </Header>

      <Form>
        <Input 
          placeholder="Nome"
        />
        <Input 
          placeholder="Valor"
        />
      </Form>
    </Container>
  )
}
