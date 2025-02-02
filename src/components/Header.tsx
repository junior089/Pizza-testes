import { useContext } from 'react';
import { Sun, Moon, Pizza, ShoppingCart } from 'lucide-react';
import { AppContext } from '../context/AppContext';
export const Header = () => {
  const { darkMode, setDarkMode, setCurrentPage, cartItems } = useContext(AppContext)!;
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Pizzamar</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-green-500">Home</button>
            <button onClick={() => setCurrentPage('menu')} className="hover:text-green-500">Cardápio</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-green-500">Sobre</button>
            <button onClick={() => setCurrentPage('cart')} className="relative hover:text-green-500">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};