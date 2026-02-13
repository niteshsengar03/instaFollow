import React, { useState, useRef } from 'react';
import { Upload, FileArchive, XCircle, AlertCircle, Loader2, UploadCloud } from 'lucide-react';
import { ProcessingState } from '../types';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  state: ProcessingState;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, state }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndPass(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndPass(e.target.files[0]);
    }
  };

  const validateAndPass = (file: File) => {
    // Basic validation
    if (file.type !== "application/zip" && file.type !== "application/x-zip-compressed" && !file.name.endsWith('.zip')) {
        alert("Please upload a valid .zip file");
        return;
    }
    onFileSelect(file);
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 mb-16">
      <div 
        className={`relative group rounded-3xl border-3 border-dashed transition-all duration-300 ease-in-out
          ${dragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-[1.02]' 
            : 'border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-700'
          }
          ${state.status === 'processing' ? 'opacity-75 cursor-wait' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          ref={inputRef}
          type="file" 
          className="hidden" 
          onChange={handleChange}
          accept=".zip"
          disabled={state.status === 'processing'}
        />

        <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
          
          {state.status === 'processing' ? (
             <div className="flex flex-col items-center animate-pulse">
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Analyzing your data...</h3>
                <p className="text-gray-500 dark:text-gray-400">This happens locally on your device.</p>
             </div>
          ) : state.status === 'error' ? (
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 text-red-500">
                  <XCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h3>
                <p className="text-red-500 max-w-sm mx-auto mb-6">{state.message}</p>
                <button 
                  onClick={onButtonClick}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-red-500/20"
                >
                  Try Another File
                </button>
            </div>
          ) : (
            <>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300
                ${dragActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500'}
              `}>
                {dragActive ? <UploadCloud size={40} /> : <FileArchive size={40} />}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {dragActive ? "Drop your ZIP file here" : "Upload Instagram Data ZIP"}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Drag and drop your <span className="font-mono text-sm bg-gray-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">.zip</span> file here, or click the button below to browse.
              </p>

              <button 
                onClick={onButtonClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                <Upload size={20} />
                Select ZIP File
              </button>
            </>
          )}
        </div>
      </div>
      
      {state.status === 'error' && (
        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl flex gap-3 text-amber-800 dark:text-amber-200 text-sm">
           <AlertCircle className="shrink-0" size={20} />
           <p>Make sure you uploaded the raw ZIP file from Instagram. We need <span className="font-mono">followers_1.json</span> and <span className="font-mono">following.json</span> inside.</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;