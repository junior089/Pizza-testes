interface OrderSummaryProps {
    totalPrice: number;
  }
  
  export const OrderSummary = ({ totalPrice }: OrderSummaryProps) => {
    const deliveryFee = 5.00;
    
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-bold mb-4">Resumo do Pedido</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxa de entrega:</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>R$ {(totalPrice + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
          Finalizar Pedido
        </button>
      </div>
    );
  };