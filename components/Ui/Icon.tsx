import { type LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type Props = {
  as: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({
  as: I,
  className,
  size = 20,
  strokeWidth = 1.75,
}: Props) {
  return (
    <I
      aria-hidden="true"
      className={clsx(
        'inline-block align-middle',
        'size-5',                               // Tailwind 3 alias for h-5 w-5
        'opacity-100',                          // ensure icon is never transparent
        'text-ink-700',                         // safe default color
        '[&>*]:stroke-current [&>*]:fill-none', // enforce stroke color
        className
      )}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
