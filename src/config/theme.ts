import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    darker: '#333333',
    primary: '#969696',
    secondary: '#e29933',
    lighter: '#d9d9d7',
  },
  fonts: {
    heading: "'Libre Franklin', sans-serif;",
    body: "'Libre Franklin', sans-serif;",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'secondary',
          color: '#FFFFFF',
          py: '20px',
          px: '30px',
          fontSize: '16px',
          borderRadius: '5px',
          _hover: {
            bg: 'secondary',
          },
          _focus: {boxShadow: 'none'},
        },
        secondary: {
          bg: 'white',
          color: 'secondary',
          border: '1px',
          borderColor: 'secondary',
          py: '20px',
          px: '30px',
          fontSize: '16px',
          borderRadius: '5px',
          _hover: {
            bg: 'secondary',
            color: 'white',
          },
          _focus: {boxShadow: 'none'},
        },
      },
    },
  },
});

export default theme;
