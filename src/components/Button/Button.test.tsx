import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

import Button from '.';

const MockedButton: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('button component', () => {
  it('should render button', () => {
    render(<Button />, { wrapper: MockedButton });

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should click button', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />, { wrapper: MockedButton });

    const button = screen.getByRole('button');

    button.click();

    expect(handleClick).toHaveBeenCalled();
  });

  it('should change button text', () => {
    render(<Button>Button</Button>, { wrapper: MockedButton });

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Button');
  });
});
