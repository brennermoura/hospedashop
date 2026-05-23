import ScrollReveal from './ScrollReveal';
import {
  Crown,
  Layers3,
  LifeBuoy,
  Palette,
  PenLine,
  Target,
} from 'lucide-react';

const benefits = [
  {
    icon: Palette,
    color: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    title: 'Visual que passa confiança',
    description:
      'Seu site precisa causar uma boa impressão logo de cara. Criamos uma apresentação moderna, limpa e profissional para sua empresa parecer tão séria quanto ela realmente é.',
  },
  {
    icon: PenLine,
    color: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    title: 'Texto claro para vender melhor',
    description:
      'Organizamos títulos, chamadas e explicações para o cliente entender rápido o que você faz, por que isso importa e qual é o próximo passo para falar com sua empresa.',
  },
  {
    icon: Target,
    color: 'from-emerald-500 to-emerald-600',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    title: 'Foco em contato e conversão',
    description:
      'A estrutura é pensada para transformar visitas em oportunidades: WhatsApp visível, formulário simples, navegação objetiva e menos distração no caminho do cliente.',
  },
  {
    icon: Layers3,
    color: 'from-violet-500 to-violet-600',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    title: 'Estrutura pronta para crescer',
    description:
      'Você pode começar com um site profissional e evoluir depois para loja virtual, área interna, painel administrativo, sistema sob medida ou app híbrido.',
  },
  {
    icon: Crown,
    color: 'from-orange-500 to-orange-600',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    title: 'Posicionamento mais profissional',
    description:
      'Ajustamos a comunicação para sua marca não parecer improvisada. O objetivo é transmitir valor antes mesmo do cliente pedir preço.',
  },
  {
    icon: LifeBuoy,
    color: 'from-pink-500 to-pink-600',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/20',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    title: 'Orientação depois da entrega',
    description:
      'Ajudamos sua empresa a entender os próximos passos depois do lançamento, com suporte, ajustes combinados e melhorias conforme o projeto evolui.',
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070e1f] to-[#050b18]" />
      <div className="orb w-96 h-96 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                Por que escolher a HospedaShop
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Seu site precisa fazer mais do que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                existir online
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A gente organiza visual, mensagem e caminho de contato para sua empresa parecer profissional,
              ser entendida rápido e gerar mais oportunidades.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

            return (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div
                  className={`group relative rounded-2xl p-6 sm:p-7 bg-white/[0.03] border ${benefit.border} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div
                    className={`relative z-10 w-12 h-12 rounded-xl ${benefit.iconBg} border ${benefit.border} flex items-center justify-center mb-5 shadow-lg ${benefit.glow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${benefit.iconColor}`} strokeWidth={2} />
                  </div>

                  <h3 className="relative z-10 text-white font-bold text-lg mb-3 transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${benefit.color} opacity-[0.06] rounded-bl-3xl rounded-tr-2xl pointer-events-none`}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />

            <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

              <div className="relative z-10 p-8 sm:p-16 text-center">
                <span className="absolute top-6 left-8 text-7xl text-blue-500/10 font-serif pointer-events-none">
                  “
                </span>

                <div className="max-w-4xl mx-auto">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Um site profissional não é só uma vitrine bonita. Ele precisa{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      explicar, convencer e facilitar o contato
                    </span>
                    {' '}sem deixar o cliente perdido no caminho.
                  </h2>

                  <p className="mt-5 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Por isso, cada projeto começa com clareza: o que sua empresa oferece, quem ela quer alcançar e qual ação o visitante precisa tomar.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="#servicos"
                      className="btn-primary relative w-full sm:w-auto px-7 py-4 text-sm font-bold rounded-2xl text-white z-10 inline-flex items-center justify-center gap-2 group/btn"
                    >
                      <span className="relative z-10">Ver serviços</span>
                      <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>

                    <a
                      href="#contato"
                      className="w-full sm:w-auto px-7 py-4 text-sm font-bold rounded-2xl border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      Pedir diagnóstico
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
