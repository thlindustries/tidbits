import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 12px;
      box-shadow: inset 0 0 5px grey;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #869c7b;
      border-radius: 12px;

      transition: background-color 0.2s;

    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #56634f;
      width: 10px;
    }

  }

  body{
    background: #F7FBF5;
    color: #000;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body,input,button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
