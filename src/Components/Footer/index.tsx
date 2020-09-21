import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import { Container, InfoContainer, Info, SocialContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <InfoContainer>
        <Info>
          <h3>Logo</h3>
          <p>Acompanhe-nos em nossas redes sociais.</p>
          <SocialContainer>
            <FiFacebook size={40} />
            <FiInstagram size={40} />
            <FiTwitter size={40} />
          </SocialContainer>
        </Info>
        <Info>
          <h3>Nosso menu</h3>
          <p>Almoço</p>
          <p>Jantar</p>
          <p>Lanches</p>
        </Info>
        <Info>
          <h3>Links</h3>
          <p>Sobre nós</p>
          <p>Termos de uso</p>
        </Info>
        <Info>
          <h3>Contato</h3>
          <p>(19) 99999-9999</p>
          <p>olá@restaurante.com</p>
          <p>Campinas, SP</p>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
