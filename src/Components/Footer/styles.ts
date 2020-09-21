import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;

  padding: 24px 64px 0 64px;

  background: rgba(170, 173, 168, 0.5);
`;

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.div`
  border: solid 2px aquamarine;

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
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
