import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { LoginView } from 'ui/Login/login.view';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

describe('Login View', () => {
  it('contains Login Text', () => {
    render(<LoginView />);

    const element = screen.getByText('Clean');

    expect(element).toBeInTheDocument();
  });
});
