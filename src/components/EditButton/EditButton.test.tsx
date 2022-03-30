import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditButton from './EditButton';

describe('<EditButton />', () => {
  test('it should mount', () => {
    render(<EditButton />);
    
    const editButton = screen.getByTestId('EditButton');

    expect(editButton).toBeInTheDocument();
  });
});