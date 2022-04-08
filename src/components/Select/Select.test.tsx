import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

import Select from '.';

const MockedSelect: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const fakeItems = [
  { value: 'active', text: 'Ativo' },
  { value: 'inactive', text: 'Inativo' },
  { value: 'waiting', text: 'Aguardando ativação' },
  { value: 'disabled', text: 'Desativado' },
];

describe('select component', () => {
  it('should render select', () => {
    const setValue = jest.fn();

    render(<Select items={fakeItems} setValue={setValue} />, {
      wrapper: MockedSelect,
    });

    const select = screen.getByTestId('select-element');

    expect(select).toBeInTheDocument();
  });

  it('should render option on click', () => {
    const setValue = jest.fn();

    render(<Select items={fakeItems} setValue={() => setValue()} />, {
      wrapper: MockedSelect,
    });

    const select = screen.getByTestId('select-container');

    fireEvent.click(select);

    const options = screen.getByTestId('select-options');

    expect(options).toBeInTheDocument();
  });

  it('should select option value', () => {
    let value = '';
    const setValue = jest.fn((e) => (value = e));

    render(<Select items={fakeItems} setValue={(e) => setValue(e)} />, {
      wrapper: MockedSelect,
    });

    const select = screen.getByTestId('select-container');

    fireEvent.click(select);

    const option = screen.getByTestId('select-option0');

    fireEvent.click(option);

    expect(value).toBe(fakeItems[0].value);
  });
});
