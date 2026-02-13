import React from 'react';
import { Download, Settings, FileJson, UploadCloud } from 'lucide-react';

const Instructions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-16">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
        <div className="p-6 border-b border-gray-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            How to Download Your Data
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* Video Placeholder */}
          <div className="aspect-video bg-gray-200 dark:bg-slate-800 rounded-xl flex items-center justify-center relative group overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 font-medium z-10">Instruction Video Placeholder</p>
             </div>
             {/* Simulating a YouTube embed visual */}
             <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
             </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg h-fit text-blue-600 dark:text-blue-400">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">1. Go to Your Activity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Open Instagram Settings, search for "Your Activity" or "Download Information".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-lg h-fit text-purple-600 dark:text-purple-400">
                <Download size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">2. Request Download</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Select "Download or transfer information" and choose "Some of your information".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2.5 rounded-lg h-fit text-yellow-600 dark:text-yellow-400">
                <FileJson size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">3. Choose JSON Format</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Select <span className="font-bold text-gray-900 dark:text-white">Followers and following</span> only. <strong>Format must be JSON.</strong></p>
              </div>
            </div>
             
             <div className="flex gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg h-fit text-green-600 dark:text-green-400">
                <UploadCloud size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">4. Upload ZIP</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">When Instagram emails you, download the ZIP and drop it below.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;