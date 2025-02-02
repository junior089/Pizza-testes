import React, { useState } from 'react';
import { Minus, Plus, Trash2, Truck, Tag } from 'lucide-react';
import { CartItem as CartItemType } from '../Types/types';

interface CartItemProps {
  cartItem: CartItemType;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  darkMode: boolean;
}

export const CartItem = ({ cartItem, removeFromCart, updateQuantity, darkMode }: CartItemProps) => (
  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-md`}>
    <div className="flex items-center space-x-4">
      <img
        src={cartItem.item.image}
        alt={cartItem.item.name}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{cartItem.item.name}</h3>
        <div className="flex items-center space-x-4 mt-2">
          <button
            type="button"
            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
            className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={cartItem.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-sm">{cartItem.quantity}</span>
          <button
            type="button"
            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">
            R$ {(cartItem.item.price * cartItem.quantity).toFixed(2)}
          </span>
          <button
            type="button"
            title="Remover item"
            onClick={() => removeFromCart(cartItem.item.id)}
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

interface OrderSummaryProps {
  totalPrice: number;
  darkMode: boolean;
}

export const OrderSummary = ({ totalPrice, darkMode }: OrderSummaryProps) => {
  const [cep, setCep] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value);
      // Simulate shipping calculation
      if (value.length === 8) {
        setShipping(15.90);
      }
    }
  };

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate coupon validation
    if (couponCode.toLowerCase() === 'first10') {
      setDiscount(totalPrice * 0.1);
    }
  };

  const formatCep = (value: string) => {
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  return (
    <div className={`${darkMode ? 'text-gray-100' : 'text-gray-800'} space-y-6`}>
      <h3 className="text-xl font-bold">Resumo do Pedido</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Calcular Frete</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={formatCep(cep)}
              onChange={handleCepChange}
              placeholder="00000-000"
              className="flex-1 px-3 py-2 border rounded-md text-gray-800"
              maxLength={9}
            />
            <button className="p-2 bg-blue-500 text-white rounded-md">
              <Truck className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleCouponSubmit} className="space-y-2">
          <label className="block text-sm">Cupom de Desconto</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="FIRST10"
              className="flex-1 px-3 py-2 border rounded-md text-gray-800"
            />
            <button type="submit" className="p-2 bg-green-500 text-white rounded-md">
              <Tag className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>
          {shipping > 0 && (
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
          )}
          {discount > 0 && (
            <div className="flex justify-between text-green-500">
              <span>Desconto</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>R$ {(totalPrice + shipping - discount).toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="w-full py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition-colors">
        Finalizar Compra
      </button>
    </div>
  );
};

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, darkMode } = useContext(AppContext)!;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <div className={`container mx-auto px-4 py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}>
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Seu Carrinho
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center text-gray-500 dark:text-gray-400">
          Seu carrinho está vazio
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.item.id}
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                darkMode={darkMode}
              />
            ))}
          </div>
          <div className="shadow-xl rounded-lg bg-white dark:bg-gray-800 p-6">
            <OrderSummary totalPrice={totalPrice} darkMode={darkMode} />
          </div>
        </div>
      )}
    </div>
  );
};