import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #ffc757;
    font-family: 'Playball';
    font-size: 24px;
  }

  h3 {
    color: #000;
    font-family: 'Pattaya';
    font-size: 26px;
  }
`;

export const ComentarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

export const Comentario = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 2%;
  margin-left: 2%;

  p {
    position: relative;
    font-size: 10px;
    line-height: 16px;
    background: #fff;
    border-radius: 40px;
    padding: 12px;
    text-align: center;
    color: #000;

    &::before {
      content: '';
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 24px solid #fff;
      border-right: 12px solid transparent;
      border-top: 12px solid #fff;
      border-bottom: 20px solid transparent;
      left: 32px;
      bottom: -24px;
    }
  }

  @media (max-width: 700px) {
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      font-size: 10px;
      line-height: 14px;
      background: #fff;
      border-radius: 40px;
      padding: 16px;
    }
  }
`;

export const Mensagem = styled.div`
  font-family: 'Poppins';
`;

export const Avatar = styled.div`
  img {
    width: 10%;
    border-radius: 50%;
  }
  margin-top: 6%;

  @media (max-width: 700px) {
    img {
      width: 20%;
    }
  }
`;
