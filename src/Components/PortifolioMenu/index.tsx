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
import port10 from 'assets/SITE/port10.jpeg';
import port11 from 'assets/SITE/port11.jpeg';
import port12 from 'assets/SITE/port12.jpeg';

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
        return <img src={port1} alt="gabriel-rovatti" />;
      case 'full-eletronics':
        return <img src={port2} alt="full-eletronics" />;
      case 'debora-borges':
        return <img src={port3} alt="debora-borges" />;
      case 'tidbits':
        return <img src={port4} alt="tidbits" />;
      case 'favo-mel':
        return <img src={port5} alt="favo-mel" />;
      case 'grao-salutte':
        return <img src={port6} alt="grao-salutte" />;
      case 'kaulike':
        return <img src={port7} alt="kaulike" />;
      case 'cibele-lorente':
        return <img src={port8} alt="cibele-lorente" />;
      case 'charles-lapin':
        return <img src={port9} alt="charles-lapin" />;
      case 'vitoria-tome':
        return <img src={port10} alt="vitoria-tome" />;
      case 'natalia-regia':
        return <img src={port11} alt="natalia-regia" />;
      case 'vitor-harudo':
        return <img src={port12} alt="vitor-harudo" />;
      default:
        break;
    }
  }, [selectedItem]);

  return (
    <Container>
      <p>Navegar</p>
      <h3>Explore nosso portfólio</h3>

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
            <TopicContainer
              selected={selectedItem === 'vitoria-tome'}
              onClick={() => handleSelectItem('vitoria-tome')}
            >
              <div />
              <p>Vitoria Tome</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'natalia-regia'}
              onClick={() => handleSelectItem('natalia-regia')}
            >
              <div />
              <p>Natalia Regia</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'vitor-harudo'}
              onClick={() => handleSelectItem('vitor-harudo')}
            >
              <div />
              <p>Vitor Harudo</p>
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
