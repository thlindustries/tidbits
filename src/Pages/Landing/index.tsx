import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FoodMenu from '../../Components/FoodMenu';
import Coments from '../../Components/Coments';

import {
  Container,
  Section,
  MainText,
  Description,
  TextContainer,
  CarouselWrapper,
  StyledCarousel,
  PresentationContainer,
  Presentation,
  ImgSegundoCard,
  Title,
  PresDescription,
  PresText,
  MotivationContainer,
  MotHeader,
  MotTitle,
  MotDescription,
  MotCards,
  MotCard,
  ComentsSection,
} from './styles';

import foodImg from '../../assets/food.png';
import menuIcon from '../../assets/menu.svg';
import foodIcon from '../../assets/group.svg';
import qualityIcon from '../../assets/quality.svg';

const Landing: React.FC = () => {
  return (
    <>
      <p>oi</p>
      {/* <Header />
      <Container>
        <Section className="first-section">
          <TextContainer>
            <MainText>
              Não deixe para amanhã o que você pode comer{' '}
              <strong>HOJE !</strong>
            </MainText>
            <Description>
              Experimente a comida caseira mais gostosa de{' '}
              <strong>Campinas</strong> feita com muito amor e carinho!
            </Description>
          </TextContainer>
          <CarouselWrapper>
            <StyledCarousel
              infiniteLoop
              autoPlay
              stopOnHover
              swipeable
              emulateTouch
              transitionTime={300}
              interval={4000}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src={foodImg} alt="carimg" />
                <p className="legend">Hmm que delicia</p>
              </div>
              <div>
                <img src={foodImg} alt="carimg" />
                <p className="legend">Muito bom</p>
              </div>
              <div>
                <img src={foodImg} alt="carimg" />
                <p className="legend">Comida caseira</p>
              </div>
            </StyledCarousel>
          </CarouselWrapper>
        </Section>
        <Section className="second-section">
          <PresentationContainer>
            <ImgSegundoCard
              src="https://uploads.metropoles.com/wp-content/uploads/2020/06/10165709/WhatsApp-Image-2020-06-10-at-16.51.33.jpg"
              alt="Segundo card"
            />
            <Presentation>
              <Title>Bem vindo</Title>
              <PresDescription>
                Bem vindo ao restaurante <strong>tidbits</strong>
              </PresDescription>
              <PresText>
                Uma rápida apresentação, uma rápida apresentação, uma rápida
                apresentação uma rápida apresentação uma rápida apresentação uma
                rápida apresentação, uma rápida. Apresentação, uma rápida
                apresentação uma rápida apresentação uma rápida apresentação uma
                rápida apresentação, uma rápida apresentação uma rápida
                apresentação.{' '}
              </PresText>
            </Presentation>
          </PresentationContainer>
        </Section>
        <Section className="third-section">
          <MotivationContainer>
            <MotHeader>
              <MotTitle>Razão</MotTitle>
              <MotDescription>
                Por quê escolher nosso restaurante?
              </MotDescription>
            </MotHeader>
            <MotCards>
              <MotCard bgColor="#E5ECE2">
                <img src={menuIcon} alt="" />
                <h1>Um cardapio delicioso</h1>
                <p>
                  Um texto de exemplo para exemplo texto de exemplo para exemplo
                  texto
                </p>
              </MotCard>
              <MotCard bgColor="#EDFDE6">
                <img src={foodIcon} alt="" />
                <h1>Uma pitada de amor</h1>
                <p>
                  Um texto de exemplo para exemplo texto de exemplo para exemplo
                  texto
                </p>
              </MotCard>
              <MotCard bgColor="#E5ECE2">
                <img src={qualityIcon} alt="" />
                <h1>Qualidade garantida</h1>
                <p>
                  Um texto de exemplo para exemplo texto de exemplo para exemplo
                  texto
                </p>
              </MotCard>
            </MotCards>
          </MotivationContainer>
        </Section>
        <Section className="fourth-section">
          <FoodMenu />
        </Section>
        <ComentsSection className="fifth-section">
          <Coments />
        </ComentsSection>
      </Container>
      <Footer /> */}
    </>
  );
};

export default Landing;
