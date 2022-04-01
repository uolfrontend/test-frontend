import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CpfInput from './CpfInput';

describe('<CpfInput />', () => {
  test('it should mount', () => {
    render(<CpfInput value='12312312312' onChange={() => {}} readOnly={false}/>);
    
    const cpfInput = screen.getByTestId('CpfInput');

    expect(cpfInput).toBeInTheDocument();
  });
});