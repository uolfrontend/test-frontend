import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from '..';
import {act} from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('input behavior', () => {
  test('display error message when filled in wrong', () => {
    render(<UserForm />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const emailErrorMessage = screen.queryByText(
      /verifique se este é um e-mail válido/i
    );

    expect(emailErrorMessage).not.toBeInTheDocument();

    // add invalid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test');

    // show error message
    waitFor(() => {
      const onScreenErrorMessage = screen.getByText(
        /verifique se este é um e-mail válido/i
      );
      expect(onScreenErrorMessage).toBeInTheDocument();
    });
  });

  test('hide error message when filled in right', () => {
    render(<UserForm />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const emailErrorMessage = screen.queryByText(
      /verifique se este é um e-mail válido/i
    );

    expect(emailErrorMessage).not.toBeInTheDocument();

    // add invalid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test');

    // show error message
    waitFor(() => {
      const onScreenErrorMessage = screen.getByText(
        /verifique se este é um e-mail válido/i
      );
      expect(onScreenErrorMessage).toBeInTheDocument();
    });

    // clear and add valid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test@mail.com');

    // hide error message
    expect(emailInput).toHaveValue('test@mail.com');
    expect(emailErrorMessage).not.toBeInTheDocument();
  });
});

describe('create customer behavior', () => {
  test('happy path', async () => {
    render(<UserForm />);

    const testData = {
      name: 'test',
      email: 'test@mail.com',
      cpf: '123.123.123-21',
      phone: '(21) 99999-8765',
      status: 'active',
    };

    // button initial state
    const createButton = screen.getByRole('button', {name: /criar/i});
    expect(createButton).toBeDisabled();

    // get inputs
    const nameInput = screen.getByPlaceholderText(/nome/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const cpfInput = screen.getByPlaceholderText(/cpf/i);
    const phoneInput = screen.getByPlaceholderText(/telefone/i);
    const statusSelector = screen.getByRole('listbox');

    // clear all fields
    userEvent.clear(nameInput);
    userEvent.clear(emailInput);
    userEvent.clear(cpfInput);
    userEvent.clear(phoneInput);

    // fill in all blanks
    await act(async () => {
      userEvent.type(nameInput, testData.name);
      userEvent.type(emailInput, testData.email);
      userEvent.type(cpfInput, testData.cpf);
      userEvent.type(phoneInput, testData.phone);
      userEvent.selectOptions(statusSelector, testData.status);
    });

    expect(createButton).toBeEnabled();

    // submit data
    userEvent.click(createButton);

    // show success toast
    await waitFor(() => {
      const toast = screen.getByRole('alert');
      expect(toast).toHaveTextContent(/criado com sucesso/i);
    });
  });
});
