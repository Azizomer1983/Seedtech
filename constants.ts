
import type { QualityFactor } from './types';

export const QUALITY_FACTORS: QualityFactor[] = [
  {
    key: 'purity',
    cardTitle: 'النقاوة',
    title: 'النقاوة الوراثية',
    description: 'يجب أن تكون البذور من الصنف المطلوب وخالية من الشوائب والأعشاب الضارة.',
    iconName: 'Search',
    cardGradient: 'from-green-400 to-green-600',
    iconBgColor: 'bg-green-500',
    glowColor: 'rgba(34,197,94,0.6)',
  },
  {
    key: 'germination',
    cardTitle: 'قوة الإنبات',
    title: 'قوة الإنبات العالية',
    description: 'يجب أن تكون نسبة عالية من البذور قادرة على الإنبات بنجاح.',
    iconName: 'Sprout',
    cardGradient: 'from-emerald-400 to-emerald-600',
    iconBgColor: 'bg-emerald-500',
    glowColor: 'rgba(16,185,129,0.6)',
  },
  {
    key: 'health',
    cardTitle: 'صحية',
    title: 'صحية وخالية من الأمراض',
    description: 'البذور يجب أن تكون خالية من الأمراض والآفات لتنتج نباتات قوية.',
    iconName: 'Heart',
    cardGradient: 'from-lime-400 to-lime-600',
    iconBgColor: 'bg-lime-500',
    glowColor: 'rgba(132,204,22,0.6)',
  },
  {
    key: 'maturity',
    cardTitle: 'النضج',
    title: 'النضج الكامل',
    description: 'البذور يجب أن تكون ناضجة تماماً عند الحصاد لضمان أفضل قدرة على الإنبات والنمو.',
    iconName: 'Clock',
    cardGradient: 'from-teal-400 to-teal-600',
    iconBgColor: 'bg-teal-500',
    glowColor: 'rgba(20,184,166,0.6)',
  },
  {
    key: 'climate',
    cardTitle: 'التكيف المناخي',
    title: 'التكيف المناخي',
    description: 'البذور يجب أن تكون مناسبة للظروف المناخية المحلية مثل درجة الحرارة والرطوبة وطول النهار.',
    iconName: 'Sun',
    cardGradient: 'from-cyan-400 to-cyan-600',
    iconBgColor: 'bg-cyan-500',
    glowColor: 'rgba(6,182,212,0.6)',
  },
  {
    key: 'storage',
    cardTitle: 'التخزين السليم',
    title: 'التخزين السليم',
    description: 'البذور يجب أن تُخزن في ظروف مناسبة من الرطوبة ودرجة الحرارة للحفاظ على حيويتها لأطول فترة ممكنة.',
    iconName: 'Package',
    cardGradient: 'from-emerald-500 to-green-700',
    iconBgColor: 'bg-emerald-600',
    glowColor: 'rgba(5,150,105,0.6)',
  },
];

export const DEFAULT_INFO: Omit<QualityFactor, 'cardTitle' | 'cardGradient' | 'glowColor'> = {
  key: 'default',
  title: 'اختر أحد العوامل لتعرف المزيد',
  description: 'انقر على أي من البطاقات أدناه لتتعلم عن العوامل المهمة التي تحدد جودة البذور.',
  iconName: 'Info',
  iconBgColor: 'bg-green-500',
};
