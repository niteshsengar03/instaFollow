import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Find Who Doesn’t Follow You Back
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Using your official Instagram data export — no password needed.
        <br />
        <span className="text-sm opacity-75">Fast, secure, and client-side only.</span>
      </p>
    </div>
  );
};

export default Hero;