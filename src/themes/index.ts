import { darken } from 'polished';

export default {
  colors: {
    background: {
      light: '#FFFFFF',
      dark: '#333333',
    },
    text: {
      primary: '#333333',
      secondary: '#47525E',
      tertiary: '#666666',
    },
    button: {
      background: {
        primary: '#FFFFFF',
        secondary: '#E29933',
        hover: {
          primary: '#E29933',
          secondary: darken(0.1, '#E29933'),
        },
      },
      text: {
        primary: '#E29933',
        secondary: '#FFFFFF',
      },
    },
    inactive: '#D73240',
    active: '#4AAC5B',
    waiting: '#D3A710',
    disabled: '#D2D2D2',
  },
};
