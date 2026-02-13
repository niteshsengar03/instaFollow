import React, { useState } from 'react';
import Hero from './components/Hero';
import Instructions from './components/Instructions';
import TrustBadge from './components/TrustBadge';
import FileUploader from './components/FileUploader';
import Results from './components/Results';
import Footer from './components/Footer';
import { parseInstagramZip } from './utils/zipParser';
import { ProcessingState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<ProcessingState>({
    status: 'idle'
  });

  const handleFileSelect = async (file: File) => {
    setState({ status: 'processing' });
    
    // Simulate a small delay for better UX (so the loader is seen)
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const result = await parseInstagramZip(file);
      setState({
        status: 'success',
        data: result
      });
      
      // Scroll to results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      setState({
        status: 'error',
        message: error.message || "An unexpected error occurred while processing the file."
      });
    }
  };

  const handleReset = () => {
    setState({ status: 'idle' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-pink-500/30">
      
      <div className="flex-grow w-full max-w-7xl mx-auto pt-6">
        {state.status !== 'success' && (
          <>
            <Hero />
            <TrustBadge />
            <FileUploader onFileSelect={handleFileSelect} state={state} />
            <Instructions />
          </>
        )}

        {state.status === 'success' && state.data && (
          <Results data={state.data} onReset={handleReset} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;