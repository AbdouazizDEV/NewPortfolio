import { getTechMeta } from '../../data/techIcons';

type TechBadgeProps = {
  tech: string;
  size?: 'sm' | 'md';
};

const TechBadge = ({ tech, size = 'sm' }: TechBadgeProps) => {
  const meta = getTechMeta(tech);
  const Icon = meta.icon;
  const iconSize = size === 'sm' ? 14 : 18;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-white font-medium text-[#14241c] shadow-sm ${
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      <Icon size={iconSize} color={meta.color} aria-hidden />
      {meta.label}
    </span>
  );
};

export default TechBadge;
