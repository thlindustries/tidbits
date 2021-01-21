import React, { useState, useCallback } from 'react';

import port1 from 'assets/SITE/port1.jpeg';
import port2 from 'assets/SITE/port2.jpg';
import port3 from 'assets/SITE/port3.png';
import port4 from 'assets/SITE/port4.png';
import port5 from 'assets/SITE/port5.png';
import port6 from 'assets/SITE/port6.png';
import port7 from 'assets/SITE/port7.png';
import port8 from 'assets/SITE/port8.jpeg';
import port9 from 'assets/SITE/port9.jpg';

import {
  Container,
  Menu,
  SideBar,
  HorizontalRollContainer,
  TopicContainer,
  Items,
  ImgContainer,
} from './styles';

const FoodMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('gabriel-rovatti');

  const handleSelectItem = useCallback((topic: string) => {
    setSelectedItem(topic);
  }, []);

  const handleChangeBanner = useCallback(() => {
    switch (selectedItem) {
      case 'gabriel-rovatti':
        return <img src={port1} alt="" />;
      case 'full-eletronics':
        return <img src={port2} alt="" />;
      case 'debora-borges':
        return <img src={port3} alt="" />;
      case 'tidbits':
        return <img src={port4} alt="" />;
      case 'favo-mel':
        return <img src={port5} alt="" />;
      case 'kaulike':
        return <img src={port7} alt="" />;
      case 'cibele-lorente':
        return <img src={port8} alt="" />;
      case 'charles-lapin':
        return <img src={port9} alt="" />;

      case 'grao-salutte':
        return <img src={port6} alt="" />;
      default:
        break;
    }
  }, [selectedItem]);

  return (
    <Container>
      <p>Navegar</p>
      <h3>Explore nosso porifólio</h3>

      <Menu>
        <SideBar>
          <HorizontalRollContainer>
            <TopicContainer
              selected={selectedItem === 'gabriel-rovatti'}
              onClick={() => handleSelectItem('gabriel-rovatti')}
            >
              <div />
              <p>Gabriel Rovatti</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'full-eletronics'}
              onClick={() => handleSelectItem('full-eletronics')}
            >
              <div />
              <p>Full Eletronics</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'debora-borges'}
              onClick={() => handleSelectItem('debora-borges')}
            >
              <div />
              <p>Dra. Debora Borges</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'tidbits'}
              onClick={() => handleSelectItem('tidbits')}
            >
              <div />
              <p>Tidbits</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'favo-mel'}
              onClick={() => handleSelectItem('favo-mel')}
            >
              <div />
              <p>Favo de Mel</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'kaulike'}
              onClick={() => handleSelectItem('kaulike')}
            >
              <div />
              <p>Kaulike</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'cibele-lorente'}
              onClick={() => handleSelectItem('cibele-lorente')}
            >
              <div />
              <p>Cibele Lorente</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'charles-lapin'}
              onClick={() => handleSelectItem('charles-lapin')}
            >
              <div />
              <p>Charles Lapin</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'grao-salutte'}
              onClick={() => handleSelectItem('grao-salutte')}
            >
              <div />
              <p>Grão Salutte</p>
            </TopicContainer>
          </HorizontalRollContainer>
        </SideBar>
        <Items>
          <ImgContainer>{handleChangeBanner()}</ImgContainer>
        </Items>
      </Menu>
    </Container>
  );
};

export default FoodMenu;
