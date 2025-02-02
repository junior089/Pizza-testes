import { PizzaItem } from '../Types/types';
import { PizzaCard } from './PizzaCard';

interface CategorySectionProps {
  category: string;
  items: PizzaItem[];
  addToCart: (pizza: PizzaItem) => void;
  darkMode: boolean;
}

export const CategorySection = ({ category, items, addToCart, darkMode }: CategorySectionProps) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4">{category}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(pizza => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
          addToCart={addToCart}
          darkMode={darkMode}
        />
      ))}
    </div>
  </div>
);