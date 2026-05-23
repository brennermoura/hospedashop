import ScrollReveal from './ScrollReveal';
import {
  ArrowRight,
  CheckCircle,
  LayoutDashboard,
  MessageSquare,
  ShoppingBag,
} from 'lucide-react';

const particles = [
  { left: 7, top: 18, delay: 0.1, duration: 2.7, opacity: 0.36, scale: 1.1 },
  { left: 18, top: 76, delay: 1.4, duration: 3.6, opacity: 0.44, scale: 1.7 },
  { left: 29, top: 31, delay: 2.2, duration: 4.2, opacity: 0.3, scale: 1.3 },
  { left: 41, top: 84, delay: 0.7, duration: 3.1, opacity: 0.5, scale: 2.1 },
  { left: 53, top: 14, delay: 1.9, duration: 4.6, opacity: 0.34, scale: 1.6 },
  { left: 64, top: 63, delay: 0.4, duration: 3.8, opacity: 0.42, scale: 1.4 },
  { left: 76, top: 26, delay: 2.5, duration: 4.1, opacity: 0.28, scale: 1.9 },
  { left: 86, top: 72, delay: 1.1, duration: 3.4, opacity: 0.48, scale: 1.2 },
  { left: 93, top: 41, delay: 0.9, duration: 4.8, opacity: 0.32, scale: 1.8 },
  { left: 12, top: 47, delay: 2.8, duration: 3.9, opacity: 0.39, scale: 1.5 },
  { left: 34, top: 8, delay: 1.6, duration: 4.4, opacity: 0.26, scale: 2 },
  { left: 70, top: 88, delay: 0.2, duration: 3.2, opacity: 0.45, scale: 1.3 },
];

const trustItems = [
  { icon: CheckCircle, text: 'Preço de entrada claro' },
  { icon: MessageSquare, text: 'WhatsApp integrado' },
  { icon: ShoppingBag, text: 'Loja virtual sob demanda' },
  { icon: LayoutDashboard, text: 'Sistemas e apps' },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20">
      <div className="orb w-96 h-96 bg-blue-600/20 top-10 -left-20 animate-pulse-slow" />
      <div
        className="orb w-80 h-80 bg-cyan-500/15 bottom-20 -right-10 animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="orb w-64 h-64 bg-indigo-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              opacity: particle.opacity,
              transform: `scale(${particle.scale})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal delay={100} distance={20}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-sm mb-8 badge-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
              Site profissional, direto ao ponto
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250} distance={30}>
          <h1 className="text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-wide">
            <span className="text-white">Sua empresa com presença </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
              digital profissional
            </span>
            <br />
            <span className="text-white uppercase text-xl sm:text-4xl md:text-6xl font-bold tracking-wider">
              a partir de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                R$449,90
              </span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400} distance={20}>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Criamos sites, lojas virtuais e sistemas para empresas que precisam explicar melhor seus serviços,
            passar mais confiança e transformar visitantes em{' '}
            <span className="text-slate-200 font-medium">conversas reais com clientes.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550} distance={20}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicos"
              className="btn-primary relative w-full sm:w-auto px-8 py-4 text-base font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group"
            >
              <span className="relative z-10">Ver planos e possibilidades</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={700} distance={15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200">
                <item.icon className="w-4 h-4 text-slate-200/90" strokeWidth={2} />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />
    </section>
  );
}
