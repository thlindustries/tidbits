import React, { useCallback } from 'react';

import facebook from 'assets/icons/facebook.png';
import instagram from 'assets/icons/instagram.png';
import twitter from 'assets/icons/twitter.png';
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
              src={facebook}
              alt="facebook"
              onClick={() => openSocialMedia('insta')}
            />
            <StyledIcon
              src={instagram}
              alt="instagram"
              onClick={() => openSocialMedia('insta')}
            />
            <StyledIcon
              src={twitter}
              alt="twitter"
              onClick={() => openSocialMedia('insta')}
            />
            {/* <FiFacebook size={40} onClick={() => openSocialMedia('insta')} />
            <FiInstagram size={40} onClick={() => openSocialMedia('insta')} />
            <FiTwitter size={40} onClick={() => openSocialMedia('insta')} /> */}
          </SocialContainer>
        </Info>
        {/* <Info>
          <h3>Nosso menu</h3>
          <p>Almoço</p>
          <p>Jantar</p>
          <p>Lanches</p>
        </Info> */}
        <Info>
          <h3>Links</h3>
          <p>Sobre nós</p>
          <p>Termos de uso</p>
        </Info>
        <Info>
          <h3>Contato</h3>
          <p>(19) 99699-4422</p>
          {/* <p>olá@restaurante.com</p> */}
          <p>Campinas, SP</p>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
