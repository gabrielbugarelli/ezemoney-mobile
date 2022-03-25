import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native";

type TypeProps ={
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${(RFValue(113))}px;

  background-color: ${({theme}) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(25)}px;
  margin-right:16px;

  color: ${({theme, isActive}) => isActive ? theme.colors.success : theme.colors.text_dark};
`;

export const Name = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({theme, isActive}) => isActive ? theme.colors.success : theme.colors.text_dark};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
