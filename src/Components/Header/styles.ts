import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 4;
  background: #fff;
  border-radius: 0 0 8px 8px;

  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 80px;

  transition: 0.4s;
  > p {
    font-family: 'Fugaz One';
    font-size: 22px;

    color: #f95454;
  }

  img {
    width: 160px;
    height: 80px;

    transition: 0.4s;

    &:hover {
      transform: scaleX(1.08) scaleY(1.08);
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    padding: 0 20px;
    height: 100px;

    p {
      font-size: 18px;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 30px;
  margin-left: auto;

  p {
    margin-right: 64px;
    /* margin-right: 48; */
    font-family: 'Poppins';
    font-size: 16px;

    color: #010101;

    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid rgba(127, 138, 121, 0.4);
      color: #b5c2ae;
    }
  }

  @media (max-width: 700px) {
    p {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;
