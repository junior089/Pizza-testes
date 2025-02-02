import { Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../Types/types';

interface CartItemProps {
  cartItem: CartItemType;
  removeFromCart: (id: number) => void;
  darkMode: boolean;
}

export const CartItem = ({ cartItem, removeFromCart, darkMode }: CartItemProps) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-md`}>
    <div className="flex items-center space-x-4">
      <img
        src={cartItem.item.image}
        alt={cartItem.item.name}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{cartItem.item.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Quantidade: {cartItem.quantity}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">
            R$ {(cartItem.item.price * cartItem.quantity).toFixed(2)}
          </span>
          <button
            type="button"
            title="Remove item from cart"
            onClick={() => removeFromCart(cartItem.item.id)}
            className="text-red-500 hover:text-red-600"
          >
            <Minus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);