import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusInput from './StatusInput';

describe('<StatusInput />', () => {
  test('it should mount', () => {
    render(<StatusInput value='active' onChange={() => {}}/>);
    
    const statusInput = screen.getByTestId('StatusInput');

    expect(statusInput).toBeInTheDocument();
  });
});