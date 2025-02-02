import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { menuItems } from '../Data/menuItems';
import { CategorySection } from '../components/CategorySection';

export const MenuPage = () => {
  const { addToCart, darkMode } = useContext(AppContext)!;
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Cardápio</h2>
      {categories.map(category => (
        <CategorySection
          key={category}
          category={category}
          items={menuItems.filter(item => item.category === category)}
          addToCart={addToCart}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};
