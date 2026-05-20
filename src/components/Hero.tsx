import ScrollReveal from './ScrollReveal';
import { CheckCircle, LayoutDashboard, MessageSquare, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20">
      {/* Background Orbs */}
      <div className="orb w-96 h-96 bg-blue-600/20 top-10 -left-20 animate-pulse-slow" />
      <div className="orb w-80 h-80 bg-cyan-500/15 bottom-20 -right-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="orb w-64 h-64 bg-indigo-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Stars/Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.2,
              transform: `scale(${1 + Math.random() * 2})`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <ScrollReveal delay={100} distance={20}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-sm mb-8 badge-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
              Inicie sua evolução digital
            </span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={250} distance={30}>
          <h1 className="text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-wide">
            <span className="text-white">Sua empresa </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
              online
            </span>
            <br />
            <span className="text-white uppercase text-xl sm:text-4xl md:text-6xl font-bold tracking-wider">
              a partir de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                R$49,90<span className="text-2xl sm:text-2xl">/mês</span>
              </span>
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={400} distance={20}>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            O ecossistema digital que seu negócio precisa para profissionalizar sua imagem, automatizar processos e transformar acessos em
            <span className="text-slate-200 font-medium">novos clientes.</span>
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={550} distance={20}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicos"
              className="btn-primary relative w-full sm:w-auto px-8 py-4 text-base font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Ver Serviços</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Falar com especialista
            </a>
          </div>
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal delay={700} distance={15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: CheckCircle, text: 'Oferta Clara' },
              { icon: MessageSquare, text: 'Contato Direto' },
              { icon: ShoppingBag, text: 'Lojas Virtuais' },
              { icon: LayoutDashboard, text: 'Sistemas e Apps' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <item.icon className="w-4 h-4 text-slate-200/90" strokeWidth={2} />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />
    </section>
  );
}
