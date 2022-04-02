import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OutlinedButton from './OutlinedButton';

describe('<OutlinedButton />', () => {
  test('it should mount', () => {
    render(<OutlinedButton label='label'/>);
    
    const editButton = screen.getByTestId('OutlinedButton');

    expect(editButton).toBeInTheDocument();
  });
});