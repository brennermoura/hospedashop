import ScrollReveal from './ScrollReveal';
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  LayoutTemplate,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const whatsappBase = 'https://wa.me/5521987968794?text=';

const createWhatsappLink = (message: string) => {
  return `${whatsappBase}${encodeURIComponent(message)}`;
};

const services = [
  {
    name: 'Loja Virtual',
    description: 'Sua estrutura completa para vender na internet de forma organizada, profissional e sem intermediários.',
    priceLabel: 'A partir de R$928,90',
    featured: false,
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
      'Exibição limpa de produtos e serviços',
      'Carrinho de compras e checkout direto',
      'Recebimento de pedidos no WhatsApp',
      'Painel simples para gerenciar estoque',
      'Design fluido focado na decisão do cliente',
    ],
    ctaText: 'Solicitar orçamento',
    message: 'Olá! Tenho interesse em montar uma loja virtual profissional com vocês.',
  },
  {
    name: 'Desenvolvimento de Sites',
    description: 'Um site sob medida para fixar sua marca no mercado, passar seriedade e atrair novos contatos.',
    priceLabel: 'A partir de R$449,90',
    featured: true,
    icon: LayoutTemplate,
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
      'Página otimizada para receber visitas',
      'Apresentação clara dos seus serviços',
      'Botão de contato direto no seu WhatsApp',
      'Visual moderno alinhado à sua marca',
      'E-mail profissional com certificado SSL',
      'Hospedagem em nuvem e suporte inclusos',
    ],
    ctaText: 'Quero meu site profissional',
    message: 'Oi! Quero iniciar o meu site profissional com a assinatura mensal de R$49,90.',
  },
  {
    name: 'Sistemas e Apps Híbridos',
    description: 'Plataformas personalizadas para tirar sua empresa do papel, integrar sua equipe e simplificar a gestão em um só lugar.',
    priceLabel: 'A partir de R$1.487,90',
    featured: false,
    icon: LayoutDashboard,
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
      'Desenvolvimento moldado para qualquer nicho de mercado',
      'Substituição de planilhas soltas por um sistema único',
      'Automação de tarefas repetitivas para ganhar tempo',
      'Controle total da sua operação de onde você estiver',
      'Estrutura feita sob medida para as regras do seu negócio',
    ],
    ctaText: 'Falar sobre meu projeto',
    message: 'Oi! Preciso de um sistema ou aplicativo sob medida para a minha operação.',
  },
];

const infrastructure = [
  {
    icon: Sparkles,
    title: 'Mensagem direta',
    description:
      'Organizamos o conteúdo pensando exatamente no que o seu cliente busca. Sem enrolação ou textos difíceis, direto ao ponto para prender a atenção dele.',
  },
  {
    icon: LayoutDashboard,
    title: 'Fácil de navegar',
    description:
      'Eliminamos as distrações e a bagunça visual. A página inteira é desenhada para guiar o visitante de forma natural até o botão de contato no WhatsApp.',
  },
  {
    icon: ShieldCheck,
    title: 'Pronto para crescer',
    description:
      'Seu projeto começa no tamanho certo para o seu momento atual. Você pode iniciar com um site simples hoje e expandir para uma loja ou sistema quando o negócio pedir.',
  },
];

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full bg-current/15 flex items-center justify-center flex-shrink-0 ${className}`}
  >
    <Check className="w-3 h-3" strokeWidth={3} />
  </span>
);

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070e1f] to-[#050b18]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="orb w-96 h-96 bg-blue-600/10 -top-20 left-1/4 animate-pulse-slow" />
      <div
        className="orb w-80 h-80 bg-cyan-500/10 bottom-0 right-1/4 animate-pulse-slow"
        style={{ animationDelay: '1.4s' }}
      />
      <div className="orb w-72 h-72 bg-violet-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 badge-glow">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                O que desenvolvemos
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Soluções sob medida para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                sua empresa crescer
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Escolha o modelo ideal para o momento atual do seu negócio. Entregamos plataformas prontas para gerar resultados, sem burocracia.
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
                    service.featured ? 'md:-mt-4 md:mb-4' : ''
                  }`}
                >
                  <div
                    className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${service.cardGlow} blur transition duration-700 ${
                      service.featured
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

                    {service.featured && (
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

                        <p className="text-slate-400 text-sm leading-relaxed">
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

                      {service.featured ? (
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

        <ScrollReveal delay={200}>
          <div className="mt-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000" />

            <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 mb-5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                      <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Compromisso com o resultado
                      </span>
                    </div>

                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                      Recursos inteligentes, para organizar e trazer resultados reais.
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      Desenvolvemos recursos que resolvem tarefas reais da sua rotina. Uma estrutura limpa e intuitiva para você e para seu cliente.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {infrastructure.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="group/card relative rounded-2xl p-5 sm:p-6 bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full card-hover"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-cyan-500/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="relative z-10 flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/card:scale-110 transition-transform duration-300 flex-shrink-0">
                              <Icon className="w-6 h-6 text-blue-400" />
                            </div>

                            <div>
                              <h4 className="text-white font-bold text-base mb-2">
                                {item.title}
                              </h4>
                              <p className="text-slate-400 text-sm leading-relaxed group-hover/card:text-slate-300 transition-colors duration-300">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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