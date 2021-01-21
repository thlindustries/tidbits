import React, { useRef } from 'react';
import { Link } from 'react-scroll';

import LogoHorizontal from 'assets/SITE/logo_complete.png';

import { Container, Tabs } from './styles';

const Header: React.FC = () => {
  // const [isReduced, setIsReduced] = useState(false);
  // const [heightFromTop, setHeightFromTop] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // const scrollFunction = (): void => {
  //   console.log(headerRef.current?.scrollTop);
  // };
  // console.log(isReduced);

  // window.onscroll = () => scrollFunction();

  return (
    // <Container ref={headerRef} className={isReduced ? 'on' : ''}>
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
