export const components = {
  Button: {
    variants: {
      primary: {
        bg: 'secondary',
        color: '#FFFFFF',
        py: '20px',
        px: '30px',
        fontSize: '16px',
        borderRadius: '5px',
        _focus: {boxShadow: 'none'},
        _hover: {_disabled: {bg: 'secondary'}},
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
};
