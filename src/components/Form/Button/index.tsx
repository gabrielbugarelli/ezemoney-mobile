import { TouchableOpacityProps } from "react-native";
import { 
  Container, 
  Title 
} from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const Button = ({title, onPress, ...rest}: ButtonProps) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
