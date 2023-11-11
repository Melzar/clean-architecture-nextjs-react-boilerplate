import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LoginView } from 'ui/Login/login.view';

describe('Login View', () => {
  it('contains Login Text', () => {
    render(<LoginView />);

    const element = screen.getByText('Login');

    expect(element).toBeInTheDocument();
  });
});
