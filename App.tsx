import React from 'react';
import { PatternB } from './patterns/PatternB';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <main className="w-full">
        <PatternB />
      </main>
    </div>
  );
};

export default App;