import styled, { css } from 'styled-components';

interface TopicProps {
  selected?: boolean;
}

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

  @media (max-width: 780px) {
    padding: 12px;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 80%;
  height: 100%;

  @media (max-width: 780px) {
    flex-direction: column;

    img {
      width: 60%;
    }
  }
  @media (max-width: 1530px) {
    text-align: center;
    img {
      width: 60%;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 40%;

  padding: 16px;

  @media (max-width: 780px) {
    width: 100%;
    flex-direction: row;

    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const HorizontalRollContainer = styled.div`
  @media (max-width: 780px) {
    display: block;
    display: flex;
    flex-direction: row;

    overflow-y: hidden;

    width: 100%;
    height: 50px;

    flex-direction: row;

    overflow: scroll;
    overflow-y: hidden;
  }
`;

export const TopicContainer = styled.div<TopicProps>`
  display: flex;

  margin-left: 10px;

  & + div {
    margin-top: 16px;
  }
  div {
    width: 2px;
    height: 100% + 10px;

    margin-right: 4px;
  }
  p {
    font-family: 'Philosopher';
    font-size: 22px;
  }

  ${(props) =>
    props.selected
      ? css`
          div {
            background: #ffc757;
          }
          color: #b38b3b;
        `
      : css`
          div {
            background: #545454;
          }
          color: #545454;
        `}

  transition: transform 0.8s, color 0.4s, background-color 0.4s;

  &:hover {
    cursor: pointer;
    transform: scaleY(1.09) scaleX(1.09);
    color: #303030;
  }

  @media (max-width: 780px) {
    font-size: 12px;

    & + div {
      margin-top: 0;
    }

    div {
      margin-top: 0;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;

  width: 100%;

  @media (max-width: 780px) {
    height: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0 0 4px #000;

  width: 20%;
  height: 60%;

  transition: transform 0.8s;

  &:hover {
    cursor: pointer;
    transform: scaleY(1.09) scaleX(1.09);
  }

  @media (max-width: 780px) {
    width: 30%;
    height: 50%;
  }
`;

export const ImgContainer = styled.div`
  background: #edfde6;
  width: 100%;
  height: 80%;

  border-radius: 12px 12px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #fff;
  border-radius: 0 0 12px 12px;

  height: 40%;

  p {
    font-family: 'Philosopher';
    font-size: 18px;
    color: #3f3f3f;
  }

  strong {
    font-family: 'Philosopher';
    font-size: 18px;
    color: #5e824f;
  }

  @media (max-width: 780px) {
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 56%;
  }
`;
