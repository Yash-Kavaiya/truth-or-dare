import React from 'react';

const Pointer: React.FC = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
      <div className="w-6 h-8 bg-red-500 clip-triangle shadow-lg animate-bounce" />
    </div>
  );
};

export default Pointer;