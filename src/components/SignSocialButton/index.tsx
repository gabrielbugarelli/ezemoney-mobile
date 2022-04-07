import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

//Styled Components
import { 
  Button,
  ImageContainer,
  Text
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  Svg: React.FC<SvgProps>
}

export const SignInSocialButton = ({title, Svg, ...rest}: Props) => {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
}