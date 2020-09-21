import styled, { css } from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface MotCardProps {
  bgColor?: string;
}

export const Container = styled.div`
  > section {
    margin-top: 64px;
  }
`;

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 500px;

  margin-top: 18px;

  padding: 0 240px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0 40px;
    flex-direction: column-reverse;
    margin-top: 8px;
  }
`;

export const TextContainer = styled.div`
  border: solid 1px #000;
  @media (max-width: 700px) {
    p {
      font-size: 24px;
      font-style: normal;

      width: 240px;
    }
  }
`;

export const MainText = styled.p`
  font-family: 'Open Sans';
  font-weight: bold;
  font-style: italic;
  font-size: 36px;

  width: 436px;
  text-align: center;

  strong {
    color: #f95454;
    font-weight: bold;
  }
`;
export const Description = styled.p`
  width: 450px;
  text-align: center;

  font-family: 'Open Sans';
  font-weight: 200;
  font-style: italic;
  font-size: 18px;

  strong {
    font-weight: bold;
  }

  @media (max-width: 700px) {
    margin-top: 8px;
    font-size: 18px;
    width: 200px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;

  border: solid 1px #000;
  display: flex;
  justify-content: center;

  margin-left: 64px;

  @media (max-width: 700px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 50%;

  /* width: 620px; */
  /* height: 500px; */

  li {
    background: transparent !important;
  }
  ul {
    align-self: center;
  }

  @media (max-width: 700px) {
    width: 70%;
    height: 100%;
  }
`;

export const PresentationContainer = styled.div`
  width: 100%;
  height: 100%;

  border: solid 1px red;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ImgSegundoCard = styled.img`
  width: 50%;
  height: 68%;
  border-radius: 12px;
  border: solid 1px red;

  @media (max-width: 700px) {
    width: 50%;
    height: 30%;
  }
`;

export const Presentation = styled.div`
  border: solid 1px red;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 10px;
    margin-bottom: 10%;
  }
`;

export const Title = styled.p`
  font-family: 'Playball';
  color: #ffc757;
  font-size: 24px;

  margin-bottom: 18px;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const PresDescription = styled.p`
  color: #000000;
  font-family: 'Pattaya';
  font-size: 20px;
  font-weight: bold;

  strong {
    color: #f95454;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }

  margin-bottom: 18px;
`;

export const PresText = styled.p`
  color: #363636;
  font-family: 'Pompiere';
  font-size: 20px;

  width: 50%;

  @media (max-width: 700px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const MotivationContainer = styled.div`
  width: 100%;
`;

export const MotHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: 6%;

  width: 100%;

  border: solid 1px blue;
`;

export const MotTitle = styled.h1`
  font-family: 'Playball';
  color: #ffc757;
  font-size: 28px;

  margin-bottom: 12px;
`;

export const MotDescription = styled.p`
  font-family: 'Playball';
  color: #000;

  font-size: 24px;
  margin-bottom: 12px;
`;

export const MotCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const MotCard = styled.div<MotCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  box-shadow: 1px 2px 6px #000;

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}

  width: 25%;
  height: 280px;
  padding: 20px;

  h1 {
    font-family: 'Pattaya';
    color: #414141;
    font-size: 24px;

    margin-bottom: auto;
  }

  img {
    margin-bottom: 2%;
  }

  p {
    margin-bottom: 10%;

    font-family: 'Oregano';
    color: #737373;
    font-size: 20px;
    text-align: center;

    width: 65%;
  }

  transition: transform 0.8s;

  &:hover {
    cursor: pointer;
    transform: scaleY(1.09) scaleX(1.09);
  }

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 16px;
      margin: 0;
    }
    p {
      font-size: 12px;
      margin: 0;
    }
    img {
      width: 20%;
    }
    width: 100%;
    height: 100px;
    padding: 20px;

    margin-bottom: 10px;
  }
`;
