import ScrollReveal from './ScrollReveal';
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Headphones,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    title: 'Lojas virtuais',
    description:
      'Catálogo, carrinho, checkout, painel de gestão e uma experiência pronta para vender sem parecer loja feita no susto.',
    icon: ShoppingBag,
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  {
    title: 'Agendamentos',
    description:
      'Sistema para clientes marcarem horários, serviços, consultas ou atendimentos com muito mais organização.',
    icon: CalendarCheck,
    color: 'from-cyan-500 to-emerald-500',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  {
    title: 'Helpdesk personalizado',
    description:
      'Canal de atendimento com chamados, histórico, status, responsáveis e relatórios salvos para sua empresa.',
    icon: Headphones,
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    glow: 'shadow-violet-500/20',
  },
];

export default function ServicesCTA() {
  return (
    <section
      id="servicos-personalizados"
      className="relative py-24 sm:py-32 overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] via-[#050b18] to-[#070e1f]" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="orb w-96 h-96 bg-blue-600/10 -top-20 left-1/4 animate-pulse-slow" />
      <div
        className="orb w-80 h-80 bg-cyan-500/10 bottom-0 right-1/4 animate-pulse-slow"
        style={{ animationDelay: '1.4s' }}
      />
      <div className="orb w-72 h-72 bg-violet-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 badge-glow">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                Novas soluções digitais
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Além de sites, criamos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                sistemas para sua operação
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Plataformas para vender, agendar e atender melhor. Tudo seguindo o mesmo cuidado visual,
              técnico e profissional que o seu site precisa ter.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000" />

            <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 mb-5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />

                      <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Soluções personalizadas
                      </span>
                    </div>

                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                      Transforme seu site em uma ferramenta real de venda, atendimento e gestão.
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-7">
                      Se sua empresa precisa parar de resolver tudo em planilha, WhatsApp perdido e anotação no caderno,
                      criamos um sistema com cara profissional e fluxo pensado para o seu negócio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="/servicos"
                        className="btn-primary relative w-full sm:w-auto px-7 py-4 text-sm font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group/btn"
                      >
                        <span className="relative z-10">Conhecer serviços</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="https://wa.me/5521987968794?text=Oi!%20Tenho%20interesse%20em%20um%20sistema%20personalizado%20para%20minha%20empresa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-7 py-4 text-sm font-bold rounded-2xl border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        Falar no WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.title}
                          className={`group/card relative rounded-2xl p-5 sm:p-6 bg-white/[0.03] border ${service.border} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full card-hover`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-cyan-500/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div
                            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-[0.07] rounded-bl-3xl rounded-tr-2xl pointer-events-none`}
                          />

                          <div className="relative z-10 flex gap-4 items-start">
                            <div
                              className={`w-12 h-12 rounded-xl ${service.iconBg} border ${service.border} flex items-center justify-center shadow-lg ${service.glow} group-hover/card:scale-110 transition-transform duration-300 flex-shrink-0`}
                            >
                              <Icon className={`w-6 h-6 ${service.iconColor}`} />
                            </div>

                            <div>
                              <h4 className="text-white font-bold text-base mb-2">
                                {service.title}
                              </h4>

                              <p className="text-slate-400 text-sm leading-relaxed group-hover/card:text-slate-300 transition-colors duration-300">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    {
                      icon: <BarChart3 className="w-5 h-5" />,
                      label: 'Relatórios salvos',
                      desc: 'Histórico e indicadores',
                    },
                    {
                      icon: <Headphones className="w-5 h-5" />,
                      label: 'Atendimento real',
                      desc: 'Fluxos por cliente',
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      label: 'Visual premium',
                      desc: 'Mesmo padrão do site',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group/stat flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-blue-500/20 transition-all duration-300"
                    >
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover/stat:scale-110 group-hover/stat:bg-blue-500/20 transition-transform duration-300">
                        {item.icon}
                      </div>

                      <div>
                        <div className="text-sm font-bold text-slate-200">
                          {item.label}
                        </div>

                        <div className="text-slate-500 text-xs leading-tight">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}