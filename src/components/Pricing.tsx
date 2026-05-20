import ScrollReveal from './ScrollReveal';
import {
  ArrowRight,
  Building2,
  Check,
  Cloud,
  Gem,
  Headset,
  LayoutTemplate,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '19,90',
    popular: false,
    description: 'Ideal para começar',
    color: 'from-blue-400 to-cyan-500',
    accent: 'blue',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-400/70',
    background:
      'bg-gradient-to-b from-blue-950/35 via-[#071226]/80 to-[#050b18]',
    cardGlow: 'from-blue-500/25 via-cyan-500/10 to-transparent',
    cornerGlow: 'from-blue-500 to-cyan-500',
    shadow: 'hover:shadow-blue-500/20',
    badgeBg: 'bg-blue-500/10 border-blue-500/20',
    icon: Rocket,
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-500/10',
    checkColor: 'text-blue-300',
    buttonClass:
      'border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400/80 hover:bg-blue-500/10',
    features: [
      'Design básico',
      'Hospedagem com SSL',
      '1 email profissional',
      '1 atualização mensal',
      'Suporte técnico',
    ],
    ctaText: 'Escolher Plano',
    ctaStyle: 'outline' as const,
  },
  {
    name: 'Profissional',
    price: '29,90',
    popular: true,
    description: 'Para negócios em crescimento',
    color: 'from-blue-500 to-cyan-400',
    accent: 'cyan',
    borderColor: 'border-cyan-400/60',
    hoverBorder: 'hover:border-cyan-300/90',
    background:
      'bg-gradient-to-b from-blue-950/90 via-[#071b31] to-[#050b18]',
    cardGlow: 'from-blue-500/45 via-cyan-400/30 to-transparent',
    cornerGlow: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/25 hover:shadow-cyan-500/30',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
    icon: Gem,
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-500/10',
    checkColor: 'text-cyan-300',
    buttonClass: '',
    features: [
      'Design Aprimorado',
      'Hospedagem com SSL',
      '3 emails profissionais',
      '1 atualização mensal',
      'Alterações de design sob demanda',
      'Suporte extra',
    ],
    ctaText: 'Escolher Plano',
    ctaStyle: 'primary' as const,
  },
  {
    name: 'Empresarial',
    price: '59,90',
    popular: false,
    description: 'Para grandes empresas',
    color: 'from-violet-500 to-purple-500',
    accent: 'violet',
    borderColor: 'border-violet-500/35',
    hoverBorder: 'hover:border-violet-400/75',
    background:
      'bg-gradient-to-b from-violet-950/30 via-[#0b0d1f]/85 to-[#050b18]',
    cardGlow: 'from-violet-500/30 via-purple-500/15 to-transparent',
    cornerGlow: 'from-violet-500 to-purple-500',
    shadow: 'hover:shadow-violet-500/25',
    badgeBg: 'bg-violet-500/10 border-violet-500/20',
    icon: Building2,
    iconColor: 'text-violet-300',
    iconBg: 'bg-violet-500/10',
    checkColor: 'text-violet-300',
    buttonClass:
      'border-violet-500/40 text-violet-200 hover:text-white hover:border-violet-400/80 hover:bg-violet-500/10',
    features: [
      'Design exclusivo',
      'Hospedagem com SSL',
      '5 emails profissionais',
      '2 atualizações mensais',
      'Suporte prioritário',
    ],
    ctaText: 'Escolher Plano',
    ctaStyle: 'outline' as const,
  },
];

const trustStats = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'E-mails Profissionais',
    desc: 'Sua marca em cada mensagem',
  },
  {
    icon: <Headset className="w-6 h-6" />,
    label: 'Suporte Humano',
    desc: 'Atendimento direto e real',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    label: 'Hospedagem Cloud',
    desc: 'Velocidade e 99.9% uptime',
  },
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    label: 'Design Moderno',
    desc: 'Interfaces que convertem',
  },
];

const qualityTags = [
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: 'SSL incluso',
  },
  {
    icon: <Zap className="w-4 h-4" />,
    text: 'Entrega otimizada',
  },
  {
    icon: <Cloud className="w-4 h-4" />,
    text: 'Hospedagem configurada',
  },
];

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full bg-current/15 flex items-center justify-center flex-shrink-0 ${className}`}
  >
    <Check className="w-3 h-3" strokeWidth={3} />
  </span>
);

export default function Pricing() {
  return (
    <section id="planos" className="relative py-24 sm:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070e1f] to-[#050b18]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="orb w-96 h-96 bg-blue-600/10 -top-20 left-1/4 animate-pulse-slow" />
      <div
        className="orb w-80 h-80 bg-cyan-500/10 bottom-0 right-1/4 animate-pulse-slow"
        style={{ animationDelay: '1.2s' }}
      />
      <div className="orb w-72 h-72 bg-violet-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 badge-glow">
              <Sparkles className="w-4 h-4 text-cyan-300" />

              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                Preços transparentes
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Planos que cabem no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                seu bolso
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Escolha o plano ideal para o seu negócio. Todos os planos vêm com hospedagem,
              e-mail corporativo e estrutura pronta para colocar sua presença digital no ar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <ScrollReveal key={plan.name} delay={index * 150}>
                <div
                  className={`relative rounded-3xl transition-all duration-500 h-full group ${
                    plan.popular ? 'md:-mt-4 md:mb-4' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-black tracking-wider uppercase shadow-lg shadow-cyan-500/30">
                        ✦ Mais Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${plan.cardGlow} blur transition duration-700 ${
                      plan.popular
                        ? 'opacity-60 group-hover:opacity-90'
                        : 'opacity-25 group-hover:opacity-65'
                    }`}
                  />

                  <div
                    className={`relative h-full rounded-3xl overflow-hidden border ${plan.borderColor} ${plan.hoverBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${plan.shadow} ${plan.background} backdrop-blur-sm`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                    <div
                      className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${plan.cornerGlow} opacity-[0.12] rounded-bl-[3rem] pointer-events-none`}
                    />

                    <div
                      className={`absolute -top-24 -right-20 w-64 h-64 bg-gradient-to-br ${plan.color} rounded-full blur-[90px] opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                    />

                    <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] opacity-10 group-hover:opacity-25 transition-opacity duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent pointer-events-none" />

                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/[0.05] to-transparent pointer-events-none" />
                    )}

                    <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                      <div className="mb-6">
                        <div className="flex items-center justify-between gap-4 mb-5">
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${plan.badgeBg}`}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`} />

                            <span
                              className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}
                            >
                              {plan.name}
                            </span>
                          </div>

                          <div
                            className={`w-11 h-11 rounded-xl ${plan.iconBg} border ${plan.borderColor} flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className={`w-5 h-5 ${plan.iconColor}`} />
                          </div>
                        </div>

                        <p className="text-slate-400 text-sm">
                          {plan.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="flex items-end gap-1">
                          <span className="text-slate-400 text-sm font-medium mb-2">
                            R$
                          </span>

                          <span
                            className={`text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}
                          >
                            {plan.price}
                          </span>

                          <span className="text-slate-400 text-sm mb-2">
                            /mês
                          </span>
                        </div>

                        <p className="text-slate-500 text-xs mt-2">
                          Faturamento mensal
                        </p>
                      </div>

                      <div className={`w-full h-px bg-gradient-to-r ${plan.color} opacity-35 mb-6`} />

                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckIcon className={plan.checkColor} />

                            <span className="text-slate-200 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {plan.ctaStyle === 'primary' ? (
                        <a
                          href="#contato"
                          className="btn-primary relative w-full py-4 text-center text-sm font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group/btn overflow-hidden"
                        >
                          <span className="relative z-10">{plan.ctaText}</span>

                          <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <a
                          href="#contato"
                          className={`w-full py-4 text-center text-sm font-bold rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.buttonClass}`}
                        >
                          {plan.ctaText}

                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 max-w-6xl gap-6">
          {trustStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="group relative text-center p-6 rounded-2xl bg-white/[0.035] border border-white/10 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-cyan-500/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform duration-300 shadow-lg shadow-blue-500/10">
                    {stat.icon}
                  </div>
                </div>

                <div className="relative z-10 text-sm sm:text-base font-bold text-slate-200 mb-1">
                  {stat.label}
                </div>

                <div className="relative z-10 text-slate-500 text-[10px] sm:text-xs leading-tight">
                  {stat.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="relative max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-center overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

              <p className="relative z-10 text-slate-500 text-sm leading-relaxed">
                * Todos os planos possuem uma taxa única de configuração de{' '}
                <span className="text-slate-300 font-semibold">R$250</span>. Essa taxa cobre a criação inicial do site,
                configuração da hospedagem e integração do e-mail profissional, garantindo que você já comece
                com tudo pronto e funcionando.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            {qualityTags.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.035] border border-white/10 hover:border-blue-500/30 hover:text-slate-300 transition-all duration-300"
              >
                <span className="text-blue-400">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}