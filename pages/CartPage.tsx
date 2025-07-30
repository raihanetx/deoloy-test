import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const TrashIconSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);


const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, totalPrice, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/products"
          className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Your Cart</h1>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
          {cartItems.map(item => (
            <li key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-md object-cover"/>
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
                <p className="text-lg font-semibold w-24 text-right">${item.price.toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-slate-500 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <TrashIconSVG />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">${totalPrice.toFixed(2)}</p>
          </div>
          <Link
            to="/checkout"
            className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
