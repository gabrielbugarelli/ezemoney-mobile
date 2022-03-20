import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { Container, Header, Title, Form, Fields} from './styles';

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
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
