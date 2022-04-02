import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Store from './Store';

describe('<Store />', () => {
  test('it should mount', () => {
    render(<Store />);
    
    const store = screen.getByTestId('Store');

    expect(store).toBeInTheDocument();
  });
});