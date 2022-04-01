import { TouchableOpacityProps } from "react-native";

import { 
  Container,
  Icon,
  Title
} from "./style";

const iconType = {
  positive: 'arrow-down-circle',
  negative: 'arrow-up-circle'
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  icon: 'positive' | 'negative';
  isActive: boolean;
}

export const TransactionTypeButton = ({title, icon, isActive, ...rest}: TransactionTypeButtonProps) => {
  return (
    <Container type={icon} isActive={isActive} {...rest}>
        <Icon name={iconType[icon]} type={icon}/>

        <Title>{title}</Title>
    </Container>
  )
}
