export default function TitleSection({ fadeIn, progress = 0 }) {
  const nightFade = progress / 100;      // 0 → 1
  const dayFade   = 1 - nightFade;        // 1 → 0

  return (
    <div className="text-center mb-12 sm:mb-16 px-2">

      {/* ----- Main Title ----- */}
      <div className="relative inline-block">
        {/* Original gradient (day) */}
        <h1
          className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold 
            bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 
            bg-clip-text text-transparent tracking-tight leading-none
            absolute inset-0 transition-all duration-700
            ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
          style={{ opacity: dayFade }}
        >
          Resep
        </h1>

        {/* White version (night) */}
        <h1
          className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold 
            text-white tracking-tight leading-none transition-all duration-700
            ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
          style={{ opacity: nightFade }}
        >
          Resep
        </h1>
      </div>

      {/* ----- Subtitle (same technique) ----- */}
      <div className="relative inline-block">
        {/* Day version */}
        <h2
          className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-semibold 
            bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 
            bg-clip-text text-transparent transition-all duration-700
            ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
          style={{ opacity: dayFade }}
        >
          Nusantara
        </h2>

        {/* Night version */}
        <h2
          className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-semibold 
            text-white transition-all duration-700
            absolute inset-0
            ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
          style={{ opacity: nightFade }}
        >
          Nusantara
        </h2>
      </div>

      {/* ----- Small subtitle text also fades to white ----- */}
      <p
        className={`text-sm xs:text-base sm:text-lg font-medium leading-relaxed max-w-xs mx-auto transition-all duration-700
          ${!fadeIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}
        style={{
          transitionDelay: '300ms',
          color: `rgba(255,255,255,${nightFade})`,         // fade to white
          opacity: 1
        }}
      >
        Warisan Kuliner Indonesia<br />
        <span
          className="text-xs xs:text-sm font-normal"
          style={{ color: `rgba(255,255,255,${nightFade * 0.8})` }}
        >
          Tradisi Rasa Nusantara
        </span>
      </p>
    </div>
  );
}
