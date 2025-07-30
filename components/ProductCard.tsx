import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group">
      <Link to={`/product/${product.id}`} className="block h-48 overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.imageUrl} alt={product.name} />
      </Link>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{product.category}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            {isInCart ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
