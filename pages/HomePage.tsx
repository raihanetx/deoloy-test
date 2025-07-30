import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">DigiGrove</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Your one-stop shop for high-quality digital assets. Unleash your creativity with our curated collection of UI kits, icons, templates, and more.
        </p>
        <Link 
          to="/products"
          className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
        >
          Explore All Products
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
