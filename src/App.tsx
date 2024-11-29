import { Reset } from 'styled-reset';
import Router from './Router';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <>
      <Router />
      <Reset />
      <GlobalStyle />
    </>
  );
};

export default App;
