import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.344 1.087-.849l1.853-6.946a.75.75 0 0 0-.7-1.002H5.617l-.533-1.996A.75.75 0 0 0 4.233 3H2.25" />
    </svg>
);

const Navbar: React.FC = () => {
    const { cartCount } = useCart();

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
            isActive ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
        }`;

    return (
        <header className="bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            DigiGrove
                        </Link>
                        <div className="hidden md:flex items-center space-x-4">
                            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                            <NavLink to="/products" className={getNavLinkClass}>Products</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                         <Link to="/cart" className="relative p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="sr-only">View cart</span>
                            <ShoppingCartIcon />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center ring-2 ring-slate-100 dark:ring-slate-800">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
