
import React, { useState, useCallback } from 'react';
import { InfoBox } from './components/InfoBox';
import { QualityCard } from './components/QualityCard';
import { ResetButton } from './components/ResetButton';
import { QUALITY_FACTORS, DEFAULT_INFO } from './constants';
import type { QualityFactor } from './types';

const App: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<QualityFactor | null>(null);

  const handleSelectFactor = useCallback((factor: QualityFactor) => {
    setSelectedFactor(factor);
  }, []);

  const handleReset = useCallback(() => {
    setSelectedFactor(null);
  }, []);

  const currentInfo = selectedFactor ?? DEFAULT_INFO;

  return (
    <>
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 relative z-0">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-800 text-center mb-4 sm:mb-6 leading-tight">
          🌱 ما الذي يجعل البذور ذات جودة؟
        </h1>

        <InfoBox
          key={currentInfo.key}
          title={currentInfo.title}
          description={currentInfo.description}
          iconName={currentInfo.iconName}
          iconBgColor={currentInfo.iconBgColor}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {QUALITY_FACTORS.map((factor) => (
            <QualityCard
              key={factor.key}
              factor={factor}
              isActive={selectedFactor?.key === factor.key}
              onSelect={handleSelectFactor}
            />
          ))}
        </div>

        <div className="text-center mt-4 sm:mt-6">
          <ResetButton onClick={handleReset} />
        </div>
      </div>
      <a href="#" className="fixed bottom-4 left-4 z-10 transition-opacity hover:opacity-100 opacity-90" aria-label="Seed Tech Logo">
        <img src="https://i.ibb.co/vC58G9L4/Translogo3.png" alt="Seed Tech Logo" className="w-20 sm:w-24 h-auto" />
      </a>
    </>
  );
};

export default App;
