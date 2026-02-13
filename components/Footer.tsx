import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-200 dark:border-slate-900 bg-white/50 dark:bg-slate-950/50 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 mb-2">
          If this helped you, follow me for more cool tools 
          <Heart size={16} className="text-red-500 fill-red-500" />
        </p>
        <a 
          href="https://www.instagram.com/sengar_nitesh/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
        >
          @nik
        </a>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-8">
          This project is not affiliated with Meta or Instagram.
        </p>
      </div>
    </footer>
  );
};

export default Footer;