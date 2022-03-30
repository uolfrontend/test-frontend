import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoreButton from './StoreButton';

describe('<StoreButton />', () => {
  test('it should mount', () => {
    render(<StoreButton />);
    
    const storeButton = screen.getByTestId('StoreButton');

    expect(storeButton).toBeInTheDocument();
  });
});