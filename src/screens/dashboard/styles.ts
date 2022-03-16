import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background };
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.title};
  font-size: 30px;
`;
