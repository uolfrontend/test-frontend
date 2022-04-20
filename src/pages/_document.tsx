import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Teste Front End - UOL</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
