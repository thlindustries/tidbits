import React from 'react';

import video2 from 'assets/SITE/video2.mp4';
import logo from 'assets/SITE/logo_complete.png';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FoodMenu from '../../Components/FoodMenu';
import Coments from '../../Components/Coments';

import {
  Container,
  Section,
  PresentationContainer,
  Presentation,
  ImgSegundoCard,
  Title,
  PresDescription,
  PresText,
  MotivationContainer,
  MotHeader,
  MotTitle,
  MotCards,
  MotCard,
  ComentsSection,
} from './styles';

const Landing: React.FC = () => {
  return (
    <>
      {/* <p>Site fora do ar por tempo indeterminado</p> */}
      <Header />
      <Container>
        <Section className="first-section">
          {/* <TextContainer>
            <MainText>
              Não deixe para amanhã o que você pode comer{' '}
              <strong>HOJE !</strong>
            </MainText>
            <Description>
              Experimente a comida caseira mais gostosa de{' '}
              <strong>Campinas</strong> feita com muito amor e carinho!
            </Description>
          </TextContainer> */}
          <p className="video-text">We start with why</p>

          <video autoPlay muted loop id="myVideo">
            <source src={video2} type="video/mp4" />
          </video>
          {/* <CarouselWrapper>
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
          </CarouselWrapper> */}
        </Section>
        <Section className="second-section">
          <PresentationContainer>
            <ImgSegundoCard src={logo} alt="Segundo card" />
            <Presentation>
              <Title>Quem somos</Title>
              <PresDescription>
                Bem vindo ao restaurante <strong>tidbits</strong>
              </PresDescription>
              <PresText>
                Somos uma agência de marketing que oferece soluções completas
                para empresas e para criadores de conteúdo. Especialistas em
                construir histórias e entregar resultados, queremos fazer parte
                da realização do seu sonho. Aqui cada cliente é único. Cada
                trabalho é personalizado. Um grupo que pensa, fala e respira a
                comunicação. Mais do que comunicadores, somos uma equipe de
                criativos.{' '}
              </PresText>
            </Presentation>
          </PresentationContainer>
        </Section>
        <Section className="third-section">
          <MotivationContainer>
            <MotHeader>
              <MotTitle>Nossos serviços</MotTitle>
              {/* <MotDescription>
                Por nos escolher?
              </MotDescription> */}
            </MotHeader>
            <MotCards>
              <MotCard bgColor="#E5ECE2">
                <h1>Gestão des redes sociais</h1>
                <p>
                  Hoje, as decisões de compra são tomadas mediante a muita
                  pesquisa. É avaliado o posicionamento, sua presença nas redes
                  sociais, a forma com que se comunica. Quanto mais atributos a
                  marca cumprir, melhor será posicionada. Te colocamos no mapa
                  de forma assertiva trazendo um melhor resultado para a
                  empresa.
                </p>
              </MotCard>
              <MotCard bgColor="#EDFDE6">
                <h1>Acessoria completa </h1>
                <p>
                  A rede social é lugar de se mostrar e de ganhar dinheiro. Com
                  a assessoria completa te ajudamos a mostrar o seu diferencial
                  para milhares de pessoas e atingir ótimos resultados.
                </p>
              </MotCard>
              <MotCard bgColor="#E5ECE2">
                <h1>Mentoria</h1>
                <p>
                  Sonha em se tornar um criador de conteúdo mas não sabe por
                  onde começar? Está precisando se profissionalizar mas não sabe
                  como? Quer aprender a monetizar suas redes sociais? Através
                  das nossas metodologias e ferramentas, te ajudamos a dar os
                  primeiros passos a alcançar seus sonhos e objetivos.
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
      <Footer />
    </>
  );
};

export default Landing;
