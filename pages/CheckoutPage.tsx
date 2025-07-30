import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CheckoutPage: React.FC = () => {
  const { totalPrice, clearCart, cartCount } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  React.useEffect(() => {
    if (cartCount === 0) {
        navigate('/products');
    }
  }, [cartCount, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Checkout</h1>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="card-details" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Card Details</label>
              <div id="card-details" className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 shadow-sm p-3">
                <p className="text-slate-500 dark:text-slate-400">This is a mock card element. No real data needed.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
             <div className="flex justify-between items-center text-lg font-semibold mb-4">
                <span>Total</span>
                <span className="text-indigo-600 dark:text-indigo-400">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-wait flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : `Pay $${totalPrice.toFixed(2)}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
