import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Container = styled.div`
  > section {
    margin-top: 64px;
  }
`;

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.2);

  width: 100%;
  height: auto;

  margin-top: 18px;

  padding: 0 240px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div``;

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
`;

export const CarouselWrapper = styled.div`
  width: 500px;

  border: solid 1px #000;
  display: flex;
  justify-content: center;

  margin-left: 64px;
`;

export const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 620px;
  height: 500px;

  li {
    background: transparent !important;
  }
  ul {
    align-self: center;
  }
`;
