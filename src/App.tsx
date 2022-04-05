import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/300.css';

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
