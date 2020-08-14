import React from 'react';
import { Link } from 'react-scroll';

import { Container, Tabs } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <p>Aqui vai a logo</p>
      <Tabs>
        <Link to="home" smooth>
          <p>Home</p>
        </Link>
        <Link to="cotacao" smooth>
          <p>Cotação</p>
        </Link>
        <Link to="contato" smooth>
          <p>Contato</p>
        </Link>
        <Link to="encontre" smooth>
          <p>Encontre-nos</p>
        </Link>
      </Tabs>
    </Container>
  );
};

export default Header;
