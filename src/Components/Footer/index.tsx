import React, { useCallback } from 'react';

import instagram from 'assets/icons/instagram.png';
import zap from 'assets/icons/whatsapp.png';
import logo from 'assets/SITE/logo_complete.png';

import {
  Container,
  InfoContainer,
  Info,
  SocialContainer,
  StyledIcon,
} from './styles';

const Footer: React.FC = () => {
  const openSocialMedia = useCallback((socialMediaName: string) => {
    switch (socialMediaName) {
      case 'insta':
        window.open('https://www.instagram.com/you.becomunicacao/');
        break;
      case 'zap':
        window.open(
          'https://wa.me/5519996994422?text=Ola%20vim%20pelo%20seu%20site%20:D',
        );
        break;
      default:
        break;
    }
  }, []);
  return (
    <Container>
      <InfoContainer>
        <Info>
          <StyledIcon className="logo" src={logo} />
          <p>Acompanhe-nos em nossas redes sociais.</p>
          <SocialContainer>
            <StyledIcon
              src={zap}
              alt="whatsapp"
              onClick={() => openSocialMedia('zap')}
            />
            <StyledIcon
              src={instagram}
              alt="instagram"
              onClick={() => openSocialMedia('insta')}
            />
          </SocialContainer>
        </Info>
        <Info>
          <h3>Links</h3>
          <p>Sobre nós</p>
          <p>Termos de uso</p>
        </Info>
        <Info>
          <h3>Contato</h3>
          <p>(19) 99699-4422</p>
          <p>Campinas, SP</p>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
