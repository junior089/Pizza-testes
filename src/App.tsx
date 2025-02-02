import React, { useState } from 'react';
import { Sun, Moon, Pizza, ShoppingCart, Plus, Minus, Home, Info, Menu, X } from 'lucide-react';

// Types
interface PizzaItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

type Page = 'home' | 'menu' | 'about' | 'cart';

// Components
const Header = ({ darkMode, setDarkMode, setCurrentPage, cartItemsCount }: any) => (
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
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  </header>
);

const HomePage = () => (
  <div className="space-y-16">
    {/* Hero Section */}
    <div className="relative h-screen">
      <img
        src="/api/placeholder/1920/1080"
        alt="Pizza Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Pizzaria Delícia</h1>
          <p className="text-xl mb-8">As melhores pizzas artesanais da cidade</p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600">
            Ver Cardápio
          </button>
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Pizza className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Ingredientes Frescos</h3>
          <p>Selecionamos os melhores ingredientes para nossas pizzas</p>
        </div>
        <div className="text-center">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
          <p>Sua pizza chega quentinha em até 40 minutos</p>
        </div>
        <div className="text-center">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Ambiente Acolhedor</h3>
          <p>Venha nos visitar e aproveite nosso espaço</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/api/placeholder/600/400"
          alt="Nossa História"
          className="rounded-lg shadow-lg"
        />
        <div>
          <p className="mb-4">
            Fundada em 1990, a Pizzaria Delícia nasceu do sonho de criar as melhores pizzas artesanais da cidade.
            Com receitas tradicionais italianas passadas de geração em geração, nos dedicamos a oferecer uma
            experiência gastronômica única.
          </p>
          <p className="mb-4">
            Nossa massa é preparada diariamente, seguindo um processo de fermentação natural que dura 48 horas,
            resultando em uma textura leve e crocante. Utilizamos apenas ingredientes frescos e de alta qualidade,
            selecionados criteriosamente por nossa equipe.
          </p>
          <p>
            Hoje, continuamos com o mesmo compromisso de servir pizzas excepcionais, mantendo viva a tradição
            e o amor pela arte da pizza.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CartPage = ({ cartItems, removeFromCart, darkMode }: any) => {
  const totalPrice = cartItems.reduce(
    (sum: number, item: any) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Seu carrinho está vazio</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map(({ item, quantity }: any) => (
              <div
                key={item.id}
                className={`${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-4 rounded-lg shadow-md`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantidade: {quantity}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">
                        R$ {(item.price * quantity).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        title="Remove item from cart"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md h-fit`}>
            <h3 className="text-xl font-bold mb-4">Resumo do Pedido</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de entrega:</span>
                <span>R$ 5.00</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>R$ {(totalPrice + 5).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuPage = ({ addToCart, darkMode }: any) => {
  const [menuItems] = useState<PizzaItem[]>([
    {
      id: 1,
      name: "Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco",
      price: 45.90,
      image: "/api/placeholder/200/200",
      category: "Clássicas"
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Molho de tomate, mussarela, pepperoni",
      price: 49.90,
      image: "/api/placeholder/200/200",
      category: "Clássicas"
    },
    {
      id: 3,
      name: "Portuguesa",
      description: "Molho de tomate, mussarela, presunto, ovos, cebola",
      price: 52.90,
      image: "/api/placeholder/200/200",
      category: "Especiais"
    },
    {
      id: 4,
      name: "Quatro Queijos",
      description: "Mussarela, gorgonzola, parmesão e provolone",
      price: 54.90,
      image: "/api/placeholder/200/200",
      category: "Especiais"
    }
  ]);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Cardápio</h2>
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{category}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems
              .filter(item => item.category === category)
              .map(pizza => (
                <div
                  key={pizza.id}
                  className={`${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } p-4 rounded-lg shadow-md`}
                >
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-48 rounded-lg object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{pizza.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {pizza.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">R$ {pizza.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(pizza)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PizzariaApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<{item: PizzaItem; quantity: number}[]>([]);

  const addToCart = (pizza: PizzaItem) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.item.id === pizza.id);
      if (exists) {
        return prev.map(item =>
          item.item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { item: pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId: number) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.item.id === pizzaId);
      if (exists && exists.quantity > 1) {
        return prev.map(item =>
          item.item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter(item => item.item.id !== pizzaId);
    });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setCurrentPage={setCurrentPage}
        cartItemsCount={cartItemsCount}
      />
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'menu' && (
          <MenuPage
            addToCart={addToCart}
            darkMode={darkMode}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            darkMode={darkMode}
          />
        )}
      </div>
      
      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mt-16`}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 18h às 23h</p>
              <p>Sábado e Domingo: 18h às 00h</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <p>Telefone: (11) 99999-9999</p>
              <p>Email: contato@pizzariadelicia.com</p>
              <p>Endereço: Rua das Pizzas, 123</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-500">Instagram</a>
                <a href="#" className="hover:text-green-500">Facebook</a>
                <a href="#" className="hover:text-green-500">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p>&copy; 2024 Pizzaria Delícia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PizzariaApp;