import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { DataListProps } from '.';

export const Container = styled.View`
  display: flex;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(30)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-right: 10px;

  border-radius: ${RFValue(10)}px;
`;

export const User = styled.View`

`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const IconPower = styled(Feather)`
  color: ${({theme}) => theme.colors.attention};
  font-size: ${RFValue(30)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24}
})`

  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  
  margin-bottom: 16px;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<DataListProps>
  )
``;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
