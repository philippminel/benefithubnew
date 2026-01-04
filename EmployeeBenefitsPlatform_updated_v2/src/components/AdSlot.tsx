interface AdSlotProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function AdSlot({ className = '', size = 'medium' }: AdSlotProps) {
  const heights = {
    small: 'h-20',
    medium: 'h-32',
    large: 'h-64'
  };

  return (
    <div className={className}>
      <div className={`${heights[size]} bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-xs text-neutral-500 mb-1">Anzeige</p>
          <p className="text-sm text-neutral-400">Google AdSense Platzhalter</p>
        </div>
      </div>
    </div>
  );
}
