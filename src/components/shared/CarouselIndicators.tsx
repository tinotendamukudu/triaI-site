'use client';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  progress: number;
  isPlaying: boolean;
  onSelect: (index: number) => void;
  className?: string;
  activeColor?: string;
}

export default function CarouselIndicators({
  total,
  current,
  progress,
  isPlaying,
  onSelect,
  className = '',
  activeColor = 'bg-secondary'
}: CarouselIndicatorsProps) {
  // Create an array to map over based on total count
  const items = Array.from({ length: total });

  return (
    <div className={`flex gap-2.5 ${className}`}>
      {items.map((_, idx) => (
        <button
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(idx);
          }}
          className="relative h-1.5 w-12 bg-gray-200 dark:bg-zinc-600 rounded-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-secondary rounded-sm"
          aria-label={`Go to slide ${idx + 1}`}
        >
          {/* Background */}
          <div
            className={`absolute inset-0 ${activeColor} transition-all duration-300 ease-linear
                ${current === idx ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              width: current === idx ? `${progress}%` : '0%',
            }}
          />
          {/* Hover state */}
          <div
            className={`absolute inset-0 bg-secondary/30 transition-opacity duration-300
                ${current === idx ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
            `}
          />
          {/* Active but paused indicator (full width) */}
          {current === idx && !isPlaying && (
            <div className={`absolute inset-0 ${activeColor} w-full`} />
          )}
        </button>
      ))}
    </div>
  );
}
