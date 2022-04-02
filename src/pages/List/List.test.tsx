import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';

describe('<List />', () => {
  test('it should mount', () => {
    render(<List />);
    
    const list = screen.getByTestId('List');

    expect(list).toBeInTheDocument();
  });
});