import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
