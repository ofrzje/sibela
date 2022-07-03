import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter as Router } from 'react-router-dom';
import Header from '../Header';
import App from '../../App';

test('should render navbar brand', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const navbarBrand = screen.getByAltText('logo');
  expect(navbarBrand).toBeInTheDocument();
});

test('should redirect and render page about', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Tentang Kami/));
  expect(screen.getByText(/Tim/i)).toBeInTheDocument();
});

test('should redirect and render page home', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Beranda/));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});