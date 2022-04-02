import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhoneInput from './PhoneInput';

describe('<PhoneInput />', () => {
  test('it should mount', () => {
    render(<PhoneInput value='123123123' onChange={() => {}} />);
    
    const phoneInput = screen.getByTestId('PhoneInput');

    expect(phoneInput).toBeInTheDocument();
  });
});