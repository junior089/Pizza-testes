import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { CartItem as CartItemComponent } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';

export const CartPage = () => {
  const { cartItems, removeFromCart, darkMode } = useContext(AppContext)!;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
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
            {cartItems.map((cartItem) => (
              <CartItemComponent
                key={cartItem.item.id}
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                darkMode={darkMode}
              />
            ))}
          </div>
          <OrderSummary totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
};