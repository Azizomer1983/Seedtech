import React from 'react';
import { Search, Sprout, Heart, Clock, Sun, Package, Info, LucideProps } from 'lucide-react';

const icons = {
  Search,
  Sprout,
  Heart,
  Clock,
  Sun,
  Package,
  Info,
};

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

// FIX: Changed props from `IconProps` to an inline intersection type `{ name: IconName } & LucideProps`.
// This explicitly tells TypeScript that the component accepts all `LucideProps` (including `className`),
// which resolves the type errors where the component was being used.
export const Icon: React.FC<{ name: IconName } & LucideProps> = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null; // or a fallback icon
  }
  return <LucideIcon {...props} />;
};
