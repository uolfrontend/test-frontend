import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Customer from './Customer';

describe('<Customer />', () => {
  test('it should mount', () => {
    const randomCustomer =  {
      id: "512.536.530-03",
      name: "Camila Souza",
      email: "camila.souza@email.com",
      phone: "(11) 93463-2347",
      status: "active"
  }
    render(<Customer {...randomCustomer} />);
    
    const customer = screen.getByTestId('Customer');

    expect(customer).toBeInTheDocument();
  });
});