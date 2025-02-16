import React from 'react';
import { Loader2 } from 'lucide-react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#5E0601] transition-opacity duration-500">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-white mx-auto" />
        <h2 className="mt-4 text-xl font-bold text-white">EMIRISE</h2>
      </div>
    </div>
  );
};

export default Preloader;