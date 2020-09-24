import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;

  padding: 24px 64px 0 64px;

  background: rgba(170, 173, 168, 0.5);

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    font-size: 16px;
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 20%;

  h3 {
    color: #000;
    font-family: 'Pattaya';
    font-size: 28px;
  }

  p {
    font-family: 'Padau';
    font-size: 20px;
    max-width: 75%;

    margin-bottom: 8px;
  }

  svg {
    margin-right: 24px;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
