import React, { useState, useCallback } from 'react';
import frango from '../../assets/frangoassado.png';

import {
  Container,
  Menu,
  SideBar,
  HorizontalRollContainer,
  TopicContainer,
  Items,
  Item,
  ImgContainer,
  ItemDescription,
} from './styles';

const FoodMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('almoco');

  const handleSelectItem = useCallback((topic: string) => {
    setSelectedItem(topic);
  }, []);

  return (
    <Container>
      <p>Navegar</p>
      <h3>Explore nosso menu</h3>

      <Menu>
        <SideBar>
          <HorizontalRollContainer>
            <TopicContainer
              selected={selectedItem === 'almoco'}
              onClick={() => handleSelectItem('almoco')}
            >
              <div />
              <p>Almoço</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'lanches'}
              onClick={() => handleSelectItem('lanches')}
            >
              <div />
              <p>Lanches</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'jantar'}
              onClick={() => handleSelectItem('jantar')}
            >
              <div />
              <p>Jantar</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'sobremesas'}
              onClick={() => handleSelectItem('sobremesas')}
            >
              <div />
              <p>Sobremesas</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'sopas'}
              onClick={() => handleSelectItem('sopas')}
            >
              <div />
              <p>Sopas</p>
            </TopicContainer>
            <TopicContainer
              selected={selectedItem === 'bebidas'}
              onClick={() => handleSelectItem('bebidas')}
            >
              <div />
              <p>Bebidas</p>
            </TopicContainer>
          </HorizontalRollContainer>
        </SideBar>
        <Items>
          <Item>
            <ImgContainer>
              <img src={frango} alt="" />
            </ImgContainer>
            <ItemDescription>
              <p>Frango assado</p>
              <strong>R$15,00</strong>
            </ItemDescription>
          </Item>
          <Item>
            <ImgContainer>
              <img src={frango} alt="" />
            </ImgContainer>
            <ItemDescription>
              <p>Frango assado</p>
              <strong>R$15,00</strong>
            </ItemDescription>
          </Item>
          <Item>
            <ImgContainer>
              <img src={frango} alt="" />
            </ImgContainer>
            <ItemDescription>
              <p>Frango assado</p>
              <strong>R$15,00</strong>
            </ItemDescription>
          </Item>
        </Items>
      </Menu>
    </Container>
  );
};

export default FoodMenu;
