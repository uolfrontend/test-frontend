import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

import Input from '.';

const MockedInput: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('input component', () => {
  it('should render input', () => {
    render(<Input />, {
      wrapper: MockedInput,
    });

    const input = screen.getByTestId('input-component');

    expect(input).toBeInTheDocument();
  });

  it('should change input value', () => {
    render(<Input />, {
      wrapper: MockedInput,
    });

    const input = screen.getByTestId<HTMLInputElement>('input-component');

    fireEvent.change(input, { target: { value: 'hello world' } });

    expect(input.value).toBe('hello world');
  });
});
