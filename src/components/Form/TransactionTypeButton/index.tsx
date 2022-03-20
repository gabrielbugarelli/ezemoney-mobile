import { TouchableOpacityProps } from "react-native";

import { 
  Container,
  Icon,
  Title
} from "./style";

const iconType = {
  receita: 'arrow-down-circle',
  despesa: 'arrow-up-circle'
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  icon: 'receita' | 'despesa'
}


export const TransactionTypeButton = ({title, icon, ...rest}: TransactionTypeButtonProps) => {
  return (
    <Container type={icon} {...rest}>
      <Icon name={iconType[icon]} type={icon}/>

      <Title>{title}</Title>
    </Container>
  )
}
