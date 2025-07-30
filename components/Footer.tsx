import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} DigiGrove. All Rights Reserved. A Fictional Store.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
