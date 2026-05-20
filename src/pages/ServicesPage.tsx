import ScrollReveal from '../components/ScrollReveal';
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  Cloud,
  Headphones,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  MessageSquare,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TimerReset,
  Users,
} from 'lucide-react';

const whatsappBase = 'https://wa.me/5521987968794?text=';

const createWhatsappLink = (message: string) => {
  return `${whatsappBase}${encodeURIComponent(message)}`;
};

const services = [
  {
    name: 'Loja Virtual',
    description: 'Venda produtos e serviços online',
    priceLabel: 'Sob medida',
    popular: false,
    icon: ShoppingBag,
    color: 'from-blue-400 to-cyan-500',
    borderColor: 'border-blue-500/35',
    hoverBorder: 'hover:border-blue-400/75',
    background:
      'bg-gradient-to-b from-blue-950/35 via-[#071226]/80 to-[#050b18]',
    cardGlow: 'from-blue-500/30 via-cyan-500/15 to-transparent',
    cornerGlow: 'from-blue-500 to-cyan-500',
    shadow: 'hover:shadow-blue-500/25',
    badgeBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-500/10',
    checkColor: 'text-blue-300',
    buttonClass:
      'border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400/80 hover:bg-blue-500/10',
    features: [
      'Catálogo de produtos ou serviços',
      'Carrinho e fluxo de pedido',
      'Integração com WhatsApp ou pagamento',
      'Painel administrativo',
      'Layout responsivo e otimizado',
    ],
    ctaText: 'Criar loja virtual',
    message: 'Oi! Tenho interesse em criar uma plataforma de loja virtual para minha empresa.',
  },
  {
    name: 'Agendamento',
    description: 'Organize horários e atendimentos',
    priceLabel: 'Por escopo',
    popular: true,
    icon: CalendarCheck,
    color: 'from-cyan-400 to-emerald-400',
    borderColor: 'border-cyan-400/60',
    hoverBorder: 'hover:border-cyan-300/90',
    background:
      'bg-gradient-to-b from-cyan-950/50 via-[#071b31] to-[#050b18]',
    cardGlow: 'from-cyan-500/45 via-emerald-400/25 to-transparent',
    cornerGlow: 'from-cyan-500 to-emerald-400',
    shadow: 'shadow-cyan-500/25 hover:shadow-cyan-500/35',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-500/10',
    checkColor: 'text-cyan-300',
    buttonClass: '',
    features: [
      'Agenda com horários disponíveis',
      'Cadastro de serviços e profissionais',
      'Confirmação de agendamentos',
      'Histórico de clientes',
      'Painel de controle para equipe',
    ],
    ctaText: 'Criar sistema de agenda',
    message: 'Oi! Tenho interesse em criar um sistema de agendamento para minha empresa.',
  },
  {
    name: 'Helpdesk',
    description: 'Atendimento com relatórios salvos',
    priceLabel: 'Personalizado',
    popular: false,
    icon: Headphones,
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/35',
    hoverBorder: 'hover:border-violet-400/75',
    background:
      'bg-gradient-to-b from-violet-950/30 via-[#0b0d1f]/85 to-[#050b18]',
    cardGlow: 'from-violet-500/35 via-purple-500/18 to-transparent',
    cornerGlow: 'from-violet-500 to-purple-500',
    shadow: 'hover:shadow-violet-500/25',
    badgeBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-300',
    iconBg: 'bg-violet-500/10',
    checkColor: 'text-violet-300',
    buttonClass:
      'border-violet-500/40 text-violet-200 hover:text-white hover:border-violet-400/80 hover:bg-violet-500/10',
    features: [
      'Abertura de chamados',
      'Status, prioridade e responsáveis',
      'Histórico por cliente ou empresa',
      'Relatórios salvos',
      'Canal com identidade da marca',
    ],
    ctaText: 'Criar helpdesk',
    message: 'Oi! Tenho interesse em criar um sistema de helpdesk e atendimento personalizado para minha empresa.',
  },
];

const trustStats = [
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    label: 'Design moderno',
    desc: 'Interface bonita e funcional',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    label: 'Sistema online',
    desc: 'Acesso pela nuvem',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    label: 'Fluxo seguro',
    desc: 'Estrutura profissional',
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    label: 'Suporte humano',
    desc: 'Acompanhamento real',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos o problema da empresa, os gargalos e o que precisa sair do improviso.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Definimos telas, usuários, permissões, relatórios, integrações e prioridades.',
    icon: LayoutDashboard,
    color: 'from-cyan-500 to-emerald-500',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Construímos o sistema com interface responsiva, visual premium e código preparado para evoluir.',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10',
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Publicamos, testamos e ajustamos a solução para sua equipe usar sem precisar fazer pacto com planilha.',
    icon: Check,
    color: 'from-emerald-500 to-emerald-600',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/10',
  },
];

const metrics = [
  {
    label: 'Chamados resolvidos',
    value: '248',
    detail: '+18% no mês',
    icon: <Headphones className="w-5 h-5" />,
  },
  {
    label: 'Tempo médio',
    value: '2h 14m',
    detail: '-32% de espera',
    icon: <TimerReset className="w-5 h-5" />,
  },
  {
    label: 'Satisfação',
    value: '94%',
    detail: 'Relatórios salvos',
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full bg-current/15 flex items-center justify-center flex-shrink-0 ${className}`}
  >
    <Check className="w-3 h-3" strokeWidth={3} />
  </span>
);

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#050b18]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-28 pb-20 noise">
        <div className="orb w-96 h-96 bg-blue-600/20 top-10 -left-20 animate-pulse-slow" />
        <div
          className="orb w-80 h-80 bg-cyan-500/15 bottom-20 -right-10 animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="orb w-64 h-64 bg-indigo-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(26)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white rounded-full animate-pulse"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${(i % 8) * 0.35}s`,
                animationDuration: `${2 + (i % 5) * 0.5}s`,
                opacity: 0.22 + (i % 6) * 0.08,
                transform: `scale(${1 + (i % 3)})`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal delay={100} distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-sm mb-8 badge-glow">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
                Sistemas personalizados para empresas
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250} distance={30}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
              <span className="text-white">Sua operação </span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                mais profissional
              </span>

              <br />

              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                com sistemas{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  sob medida
                </span>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400} distance={20}>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Criamos plataformas para lojas virtuais, sistemas de agendamento e canais de atendimento personalizados
              com relatórios salvos, histórico e painel administrativo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={550} distance={20}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#solucoes"
                className="btn-primary relative w-full sm:w-auto px-8 py-4 text-base font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10">Ver soluções</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={createWhatsappLink('Oi! Quero conversar sobre um sistema personalizado para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-2xl text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Pedir orçamento
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700} distance={15}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: '🛒', text: 'Lojas Virtuais' },
                { icon: '📅', text: 'Agendamentos' },
                { icon: '🎧', text: 'Helpdesk' },
                { icon: '📊', text: 'Relatórios' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />
      </section>

      <section id="solucoes" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] to-[#070e1f]" />
        <div className="orb w-96 h-96 bg-blue-600/10 -top-20 left-1/4" />
        <div className="orb w-80 h-80 bg-violet-600/10 bottom-0 right-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                  Soluções disponíveis
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Sistemas para empresas que precisam{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  sair do improviso
                </span>
              </h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Cada solução é pensada conforme o fluxo da empresa. Nada de sistema genérico com cara de boleto vencido.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.name} delay={index * 150}>
                  <div
                    className={`relative rounded-3xl transition-all duration-500 h-full group ${
                      service.popular ? 'md:-mt-4 md:mb-4' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-white text-xs font-black tracking-wider uppercase shadow-lg shadow-cyan-500/30">
                          ✦ Mais procurado
                        </div>
                      </div>
                    )}

                    <div
                      className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${service.cardGlow} blur transition duration-700 ${
                        service.popular
                          ? 'opacity-60 group-hover:opacity-90'
                          : 'opacity-25 group-hover:opacity-65'
                      }`}
                    />

                    <div
                      className={`relative h-full rounded-3xl overflow-hidden border ${service.borderColor} ${service.hoverBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.shadow} ${service.background} backdrop-blur-sm`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

                      <div
                        className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${service.cornerGlow} opacity-[0.12] rounded-bl-[3rem] pointer-events-none`}
                      />

                      <div
                        className={`absolute -top-24 -right-20 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-[90px] opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                      />

                      <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] opacity-10 group-hover:opacity-25 transition-opacity duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent pointer-events-none" />

                      {service.popular && (
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/[0.05] to-transparent pointer-events-none" />
                      )}

                      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <div className="flex items-center justify-between gap-4 mb-5">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${service.badgeBg}`}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />

                              <span
                                className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                              >
                                {service.name}
                              </span>
                            </div>

                            <div
                              className={`w-11 h-11 rounded-xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className={`w-5 h-5 ${service.iconColor}`} />
                            </div>
                          </div>

                          <p className="text-slate-400 text-sm">
                            {service.description}
                          </p>
                        </div>

                        <div className="mb-8">
                          <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
                            Investimento
                          </span>

                          <div
                            className={`mt-2 text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                          >
                            {service.priceLabel}
                          </div>
                        </div>

                        <div className={`w-full h-px bg-gradient-to-r ${service.color} opacity-35 mb-6`} />

                        <ul className="space-y-3 mb-8 flex-1">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckIcon className={service.checkColor} />

                              <span className="text-slate-200 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {service.popular ? (
                          <a
                            href={createWhatsappLink(service.message)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary relative w-full py-4 text-center text-sm font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group/btn overflow-hidden"
                          >
                            <span className="relative z-10">{service.ctaText}</span>

                            <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <a
                            href={createWhatsappLink(service.message)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-4 text-center text-sm font-bold rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2 group/btn ${service.buttonClass}`}
                          >
                            {service.ctaText}

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
                <div className="group text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="text-sm sm:text-base font-bold text-slate-200 mb-1">
                    {stat.label}
                  </div>

                  <div className="text-slate-500 text-[10px] sm:text-xs leading-tight">
                    {stat.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] via-[#050b18] to-[#070e1f]" />
        <div className="orb w-[520px] h-[520px] bg-emerald-600/10 top-20 right-0" />
        <div className="orb w-96 h-96 bg-cyan-500/10 bottom-0 left-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left" distance={50}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">
                    Atendimento com relatórios
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Um canal de atendimento com{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-glow">
                    controle de verdade
                  </span>
                </h2>

                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                  Para empresas que precisam controlar suporte, reclamações, solicitações internas ou atendimento B2B,
                  criamos uma área própria com chamados, status, histórico e indicadores.
                </p>

                <div className="space-y-4">
                  {[
                    'Controle de solicitações por cliente, setor ou prioridade',
                    'Histórico completo para evitar perda de informações',
                    'Relatórios salvos para acompanhar volume, tempo e qualidade',
                    'Interface personalizada com a identidade visual da empresa',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-lg shadow-emerald-500/20">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>

                      <span className="text-slate-300 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={50} delay={150}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000" />

                <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/30">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
                  <div className="absolute bottom-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                  <div className="relative z-10 p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">
                          Painel helpdesk
                        </p>

                        <h3 className="text-white font-bold text-lg">
                          Relatórios de atendimento
                        </h3>
                      </div>

                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                      {metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="group/metric rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <p className="text-slate-500 text-xs">
                              {metric.label}
                            </p>

                            <div className="text-emerald-400 group-hover/metric:scale-110 transition-transform">
                              {metric.icon}
                            </div>
                          </div>

                          <p className="text-white text-2xl font-black tracking-tight">
                            {metric.value}
                          </p>

                          <p className="text-emerald-400 text-xs mt-1">
                            {metric.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          client: 'Cliente Alpha',
                          status: 'Em atendimento',
                          tag: 'Alta',
                          color: 'text-red-300 border-red-500/20 bg-red-500/10',
                        },
                        {
                          client: 'Loja Central',
                          status: 'Aguardando cliente',
                          tag: 'Média',
                          color: 'text-yellow-300 border-yellow-500/20 bg-yellow-500/10',
                        },
                        {
                          client: 'Operação B2B',
                          status: 'Resolvido',
                          tag: 'Baixa',
                          color: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/10',
                        },
                      ].map((ticket) => (
                        <div
                          key={ticket.client}
                          className="flex items-center justify-between gap-4 rounded-2xl bg-white/[0.035] border border-white/10 p-4 hover:bg-white/[0.055] hover:border-blue-500/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                              <Users className="w-5 h-5" />
                            </div>

                            <div>
                              <p className="text-white font-semibold text-sm">
                                {ticket.client}
                              </p>

                              <p className="text-slate-500 text-xs mt-1">
                                {ticket.status}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`px-3 py-1 rounded-full border text-xs font-semibold ${ticket.color}`}
                          >
                            {ticket.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] to-[#050b18]" />
        <div className="orb w-96 h-96 bg-blue-600/10 top-0 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
                  Como funciona
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Do problema ao sistema pronto,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  sem enrolação técnica
                </span>
              </h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                O processo transforma uma necessidade operacional em uma solução utilizável,
                bonita e prática.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.number} delay={index * 100}>
                  <div
                    className={`group relative rounded-2xl p-6 sm:p-7 bg-white/[0.03] border ${step.border} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full`}
                  >
                    <div className="absolute -top-8 -right-8 text-8xl font-black text-white/[0.03] group-hover:text-blue-500/[0.06] transition-colors duration-300">
                      {step.number}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div
                      className={`relative z-10 w-12 h-12 rounded-xl ${step.iconBg} border ${step.border} flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>

                    <h3 className="relative z-10 text-white font-bold text-lg mb-3 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    <div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${step.color} opacity-[0.06] rounded-bl-3xl rounded-tr-2xl pointer-events-none`}
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden noise">
        <div className="absolute inset-0 bg-[#050b18]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="orb w-[520px] h-[520px] bg-cyan-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000" />

              <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                <div className="relative z-10 p-8 sm:p-16 text-center">
                  <span className="absolute top-6 left-8 text-7xl text-blue-500/10 font-serif pointer-events-none">
                    “
                  </span>

                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                      Quer transformar uma ideia em{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        sistema real
                      </span>
                      , com visual profissional e fluxo bem pensado?
                    </h2>

                    <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                      Chama a gente, explica o processo da empresa e montamos uma proposta com escopo,
                      prazo e investimento. Sem promessa mágica e sem sistema Frankenstein.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={createWhatsappLink('Oi! Quero criar um sistema personalizado para minha empresa e gostaria de conversar sobre orçamento.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowRight
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                        strokeWidth={3}
                      />
                    </a>

                    <a
                      href="/#contato"
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-xs font-medium uppercase tracking-widest transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Prefiro preencher formulário
                    </a>
                  </div>

                  <span className="absolute bottom-2 right-8 text-7xl text-blue-500/10 font-serif rotate-180 pointer-events-none">
                    “
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}