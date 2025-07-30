import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage: React.FC = () => {
    return (
        <div className="text-center py-20">
            <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-4 mb-2">Payment Successful!</h1>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Thank you for your purchase! Your digital products are now available for download (not really, this is a demo!).
                </p>
                <Link
                    to="/products"
                    className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
