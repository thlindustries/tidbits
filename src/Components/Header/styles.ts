import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;

  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 120px;

  > p {
    font-family: 'Fugaz One';
    font-size: 22px;

    color: #f95454;
  }
`;

export const Tabs = styled.div`
  display: flex;
  height: 30px;

  p {
    margin-right: 64px;
    font-family: 'Poppins';

    color: #010101;

    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid rgba(127, 138, 121, 0.4);
      color: #b5c2ae;
    }
  }
`;
