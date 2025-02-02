import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const { darkMode } = useContext(AppContext)!;

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} mt-16 py-8`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 18h às 23h</p>
            <p>Sábado e Domingo: 18h às 00h</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p>Telefone: (11) 99999-9999</p>
            <p>Email: contato@pizzariadelicia.com</p>
            <p>Endereço: Rua das Pizzas, 123</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-green-500"><Instagram size={24} /></a>
              <a href="#" className="hover:text-green-500"><Facebook size={24} /></a>
              <a href="#" className="hover:text-green-500"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p>&copy; 2024 Pizzamar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
