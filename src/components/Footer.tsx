import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Footer = () => {
  const { darkMode } = useContext(AppContext)!;

  return (
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
          <p>&copy; 2024 Pizzamar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
