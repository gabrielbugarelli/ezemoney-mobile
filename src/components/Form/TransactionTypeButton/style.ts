import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

type TransactionType = {
  type: 'receita' | 'despesa';
  isActive?: boolean;
}

export const Container = styled.TouchableOpacity<TransactionType>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 48%;
  padding: 18px;

  border: 1.5px solid ${({theme, type}) => type === 'receita' ? theme.colors.success_light : theme.colors.attention_light}; 
  border-radius: 5px;

  ${({isActive, type}) => isActive && type === 'receita' && css`
    background-color: ${({theme}) => theme.colors.success_light};
  `};

  ${({isActive, type}) => isActive && type === 'despesa' && css`
    background-color: ${({theme}) => theme.colors.attention_light};
  `};
`;

export const Icon = styled(Feather)<TransactionType>`
  font-size: ${RFValue(20)}px;
  margin-right: 12px;
  
  color: ${({theme, type}) => type === 'receita' ? theme.colors.success : theme.colors.attention };
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark}
`;
