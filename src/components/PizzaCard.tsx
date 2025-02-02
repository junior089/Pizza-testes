import { PizzaItem } from '../Types/types';

interface PizzaCardProps {
    pizza: PizzaItem;
    addToCart: (pizza: PizzaItem) => void;
    darkMode: boolean;
  }
  
  export const PizzaCard = ({ pizza, addToCart, darkMode }: PizzaCardProps) => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-md`}>
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
          type="button"
          onClick={() => addToCart(pizza)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Adicionar
        </button>
      </div>
    </div>
  );