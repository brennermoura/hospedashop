import { useEffect, useState } from 'react';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDuration = 2000;
    let frame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / minDuration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onFinish, 600);
        }, 300);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030810] transition-all duration-600 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
      style={{ transitionDuration: '600ms' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Animated orbs */}
      <div className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" style={{ top: '20%', left: '30%' }} />
      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/15 blur-[80px] animate-pulse" style={{ bottom: '20%', right: '25%', animationDelay: '0.5s' }} />
      <div className="absolute w-48 h-48 rounded-full bg-indigo-600/15 blur-[70px] animate-pulse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '1s' }} />

      {/* Spinning ring */}
      <div className="absolute w-48 h-48 sm:w-56 sm:h-56">
        <svg className="w-full h-full animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="8 12" />
        </svg>
      </div>

      {/* Secondary ring */}
      <div className="absolute w-64 h-64 sm:w-72 sm:h-72">
        <svg className="w-full h-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="0.5" strokeDasharray="4 20" />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/40">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Hospeda<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Shop</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-56 h-1 bg-white/5 rounded-full overflow-hidden mb-4 backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer on progress bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
          </div>
        </div>

        {/* Percentage */}
        <div className="flex items-center gap-2">
          <span className="text-blue-400/70 text-xs font-mono tracking-widest">
            {progress}%
          </span>
        </div>

        {/* Floating data points */}
        <div className="absolute -inset-32 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 3) * 35}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
