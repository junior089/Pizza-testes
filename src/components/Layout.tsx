import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { HomePage } from '../Pages/HomePage';
import { MenuPage } from '../Pages/MenuPage';
import { AboutPage } from '../Pages/AboutPage';
import { CartPage } from '../Pages/CartPage';

export const Layout = () => {
  const { darkMode, currentPage } = useContext(AppContext)!;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header />
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'cart' && <CartPage />}
      </div>
      <Footer />
    </div>
  );
};