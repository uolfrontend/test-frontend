import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilledButton from './FilledButton';

describe('<FilledButton />', () => {
  test('it should mount', () => {
    render(<FilledButton label='Button'/>);
    
    const storeButton = screen.getByTestId('FilledButton');

    expect(storeButton).toBeInTheDocument();
  });
});