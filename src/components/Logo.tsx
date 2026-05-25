interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 'md', showTagline = true, variant = 'dark' }: LogoProps) {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl';
  const textColor = variant === 'light' ? 'text-white' : 'text-ink';
  const tagColor = variant === 'light' ? 'text-mint-200' : 'text-mint-600';

  return (
    <a href="#" className="flex items-center gap-3 group">
      <div className={`${iconSize} rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 flex items-center justify-center shadow-lg shadow-mint-500/25 group-hover:shadow-mint-500/40 transition-shadow`}>
        <svg className="w-[55%] h-[55%] text-white" viewBox="0 0 100 100" fill="none">
          <path d="M20 50C20 32 36 24 50 24C64 24 80 32 80 50C80 68 64 76 50 76C36 76 20 68 20 50Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M32 46C40 36 60 36 68 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
          <path d="M38 58C44 63 56 63 62 58" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${titleSize} font-display ${textColor} leading-tight tracking-tight`}>
          smileyfacealigner
        </span>
        {showTagline && (
          <span className={`text-[10px] uppercase font-semibold ${tagColor} tracking-[0.2em] mt-1`}>
            Clear Aligners
          </span>
        )}
      </div>
    </a>
  );
}
