import React, { useRef } from 'react';
import { Link } from 'react-scroll';

import LogoHorizontal from 'assets/SITE/logo_complete.png';

import { Container, Tabs } from './styles';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <Container ref={headerRef}>
      <img src={LogoHorizontal} alt="Horizontal logo" />
      <Tabs>
        <Link to="home" smooth>
          <p>Home</p>
        </Link>
        {/* <Link to="cotacao" smooth>
          <p>Cotação</p>
        </Link>
        <Link to="contato" smooth>
          <p>Contato</p>
        </Link>
        <Link to="encontre" smooth>
          <p>Encontre-nos</p>
        </Link> */}
      </Tabs>
    </Container>
  );
};

export default Header;
