
import React from 'react';
import type { QualityFactor } from '../types';
import { Icon } from './icons';

interface QualityCardProps {
  factor: QualityFactor;
  isActive: boolean;
  onSelect: (factor: QualityFactor) => void;
}

export const QualityCard: React.FC<QualityCardProps> = ({ factor, isActive, onSelect }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(factor);
    }
  };

  const glowStyle = {
    '--glow-color': factor.glowColor,
  } as React.CSSProperties;

  return (
    <div
      className={`min-h-[100px] rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer bg-gradient-to-br text-center text-white shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-green-500 transition-all duration-300 ease-in-out ${
        factor.cardGradient
      } ${isActive ? 'active-glow' : 'hover:scale-105 hover:-translate-y-1 active:scale-95'}`}
      style={isActive ? glowStyle : {}}
      tabIndex={0}
      role="button"
      onClick={() => onSelect(factor)}
      onKeyDown={handleKeyDown}
      aria-pressed={isActive}
    >
      <div className="flex justify-center mb-2">
        <Icon name={factor.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h3 className="font-bold text-sm sm:text-base">{factor.cardTitle}</h3>
    </div>
  );
};
