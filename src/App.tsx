import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import '@fontsource/lato/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/300.css';

import GlobalStyle from './styles/GlobalStyle';

import theme from './themes';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
