import logoUrl from '../../assets/LOGORN.png';

export default function LogoContainer({ progress = 0 }) {
  // Scale logo from 1 → 1.35
  const logoScale = 1 + (progress / 100) * 0.35;
  const boxScale  = 1 + (progress / 100) * 0.15;

  return (
    <div className="mb-10 sm:mb-16 relative group transition-transform duration-700"
      style={{ transform: `scale(${boxScale})` }}
    >
      <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 
        bg-white/20 backdrop-blur-xl border border-white/30 
        rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/10 
        transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
      >
        <img
          src={logoUrl}
          alt="Logo"
          className="object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-110"
          style={{
            width: `calc(4rem + ${progress * 0.15}px)`,     // grows smoothly
            height: `calc(4rem + ${progress * 0.15}px)`,
            transform: `scale(${logoScale})`
          }}
        />
      </div>

      {/* particles unchanged */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '300ms' }} />
      <div className="absolute top-1/4 -right-3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 -left-3 w-1 h-1 bg-blue-500 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}
