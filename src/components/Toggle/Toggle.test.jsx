import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Toggle from './Toggle.component';
import '@testing-library/jest-dom/extend-expect';

describe('Toggle component', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Toggle changeHandler={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('changes text after event and toggles', () => {
    const { getByText } = render(<Toggle changeHandler={() => {}} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(getByText('Oscuro')).toBeTruthy();
  });
});
