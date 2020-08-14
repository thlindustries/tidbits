import React from 'react';

import Header from '../../Components/Header';

import {
  Container,
  Section,
  MainText,
  Description,
  TextContainer,
  CarouselWrapper,
  StyledCarousel,
} from './styles';
import foodImg from '../../assets/food.png';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <TextContainer>
            <MainText>
              Não deixe para amanhã o que você pode comer
{' '}
              <strong>HOJE !</strong>
            </MainText>
            <Description>
              Experimente a comida caseira mais gostosa de
{' '}
              <strong>Campinas</strong>
              {' '}
feita com muito amor e carinho!
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
        <Section />
        <Section className="test" />
      </Container>
    </>
  );
};

export default Landing;
