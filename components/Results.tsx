import React from 'react';
import { ExternalLink, Copy, CheckCircle2, UserMinus, Info } from 'lucide-react';
import { ParseResult } from '../types';

interface ResultsProps {
  data: ParseResult;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ data, onReset }) => {
  const { nonFollowers, totalFollowing, totalFollowers } = data;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
  };

  if (nonFollowers.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Congratulations! 🎉</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Everyone you follow follows you back. That's rare!
        </p>
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 text-gray-800 dark:text-white rounded-xl font-medium transition-colors"
        >
          Analyze Another File
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
             <UserMinus className="text-pink-500" />
             Not Following Back
           </h2>
           <p className="text-gray-500 dark:text-gray-400 mt-1">
             You follow {totalFollowing.toLocaleString()} users. 
             <span className="font-semibold text-pink-600 dark:text-pink-400 ml-1">
               {nonFollowers.length}
             </span> don't follow you back.
           </p>
        </div>
        <button
          onClick={onReset}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white underline underline-offset-4"
        >
          Start Over
        </button>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8 flex gap-3 text-sm text-blue-800 dark:text-blue-200">
        <Info className="shrink-0 mt-0.5" size={18} />
        <p>
          <strong>Note:</strong> If you click on a profile and it says "Page Not Found", that user has likely <strong>deactivated their account</strong> or changed their username since you downloaded your data.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nonFollowers.map((username, idx) => (
          <div 
            key={idx}
            className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
          >
            <div className="min-w-0 flex-1 mr-3">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {username}
              </h3>
            </div>
            
            <div className="flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => copyToClipboard(username)}
                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                title="Copy Username"
              >
                <Copy size={16} />
              </button>
              <a 
                href={`https://www.instagram.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg transition-colors"
                title="Open Profile"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <p className="text-gray-400 text-sm">Showing all {nonFollowers.length} users</p>
      </div>
    </div>
  );
};

export default Results;