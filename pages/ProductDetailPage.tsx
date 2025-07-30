import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { generateProductDescription } from '../services/geminiService';
import { useCart } from '../hooks/useCart';
import Spinner from '../components/Spinner';
import MarkdownRenderer from '../components/MarkdownRenderer';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, cartItems } = useCart();
  
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setIsLoading(true);
      setError(null);
      generateProductDescription(product)
        .then(desc => {
          setDescription(desc);
        })
        .catch(err => {
          console.error(err);
          setError('Failed to load creative description. Displaying basic info.');
          // Fallback to basic summary if AI fails
          setDescription(`### ${product.name}\n\n${product.summary}\n\nThis product is perfect for professionals and hobbyists looking to enhance their creative projects. High-quality and easy to use.`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [product]);

  const isInCart = useMemo(() => {
      return cartItems.some(item => item.id === product?.id)
  }, [cartItems, product]);

  if (!product) {
    return <div className="text-center py-20 font-bold text-xl">Product not found.</div>;
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-80 md:h-full bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{product.name}</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">{product.category}</p>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className="w-full py-3 px-6 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Product Description</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {error && <p className="text-red-500 bg-red-100 dark:bg-red-900/50 p-3 rounded-md mb-4">{error}</p>}
            <MarkdownRenderer content={description} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
