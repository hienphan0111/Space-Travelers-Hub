import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../components/NavBar.component';

describe('Should match route', () => {

    it('should match rockets route', () => {
      const route = '/'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const home = screen.getByText('Rockets');
      expect(home).toHaveTextContent('Rockets');
    });

    it('should match mission route', () => {
      const route = '/mission'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const mission = screen.getByText('Missions');
      expect(mission).toHaveTextContent('Missions');
    });

    it('should match my profile route', () => {
      const route = '/my-profile'
      render(
        <MemoryRouter initialEntries={[route]}>
          <Navbar />
        </MemoryRouter>
      );
      const myProfile = screen.getByText('My Profile');
      expect(myProfile).toHaveTextContent('My Profile');
    });
});
