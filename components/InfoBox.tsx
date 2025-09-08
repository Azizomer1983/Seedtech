
import React from 'react';
import { Icon, IconName } from './icons';

interface InfoBoxProps {
  title: string;
  description: string;
  iconName: IconName;
  iconBgColor: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ title, description, iconName, iconBgColor }) => {
  return (
    <div className="min-h-[200px] sm:min-h-0 text-center rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-4 sm:mb-6 bg-white shadow-md animate-fade-scale">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 flex items-center justify-center rounded-full text-white transition-colors duration-300 ${iconBgColor}`}>
        <Icon name={iconName} className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <h2 className="font-bold text-base sm:text-lg md:text-xl text-slate-800 mb-2 leading-tight">
        {title}
      </h2>
      <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};
