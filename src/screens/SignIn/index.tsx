import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignSocialButton';

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  FooterWrapper,
  Footer,
} from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title> 
            Controle as suas {'\n'} 
            finanças de forma {'\n'} 
            simples! 
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça o seu login com {'\n'}
          alguma das contas abaixo:
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            Svg={GoogleSvg}
          />

          <SignInSocialButton
            title="Entrar com Apple"
            Svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}