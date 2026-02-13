import React from 'react';
import { ShieldCheck, Lock, WifiOff } from 'lucide-react';

const TrustBadge: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 mb-12">
      <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-500/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 text-green-500/10 dark:text-green-400/10">
          <ShieldCheck size={150} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full text-green-600 dark:text-green-400">
            <Lock size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">
              Privacy Guaranteed
            </h3>
            <ul className="space-y-2 text-green-900/80 dark:text-green-200/80 text-sm font-medium">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                We DO NOT ask for your Instagram password.
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Your data never leaves your device.
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="flex items-center gap-1">
                  Works entirely in your browser <WifiOff size={14} />
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                No files are uploaded or stored on any server.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadge;