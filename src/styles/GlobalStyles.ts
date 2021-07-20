import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--background);
  }
  :root {
    --background: #121212;
    --primary: #e60014;
    --search: #202327;
    --white: #D9D9D9;
    --light-gray: #eee;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --green: #00C06B;
    --like: #E8265E;
  }
`;
