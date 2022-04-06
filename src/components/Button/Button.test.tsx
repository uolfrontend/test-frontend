import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

import Button from '.';

const MockedButton = () => (
  <ThemeProvider theme={theme}>
    <Button />
  </ThemeProvider>
);

describe('button component', () => {
  it('should render', () => {
    render(<MockedButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
