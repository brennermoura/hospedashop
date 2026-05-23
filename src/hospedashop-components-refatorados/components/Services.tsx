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

const WHATSAPP_NUMBER = '5521987968794';
const whatsappBase = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

const createWhatsappLink = (message: string) => {
  return `${whatsappBase}${encodeURIComponent(message)}`;
};

const services = [
  {
    name: 'Loja Virtual',
    description:
      'Para empresas que querem vender produtos ou serviços online com uma estrutura organizada, visual profissional e caminho de compra mais simples.',
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
      'Estrutura para apresentar produtos e categorias',
      'Carrinho e fluxo de pedido mais objetivo',
      'Direcionamento para WhatsApp ou checkout',
      'Base para gerenciar produtos e estoque',
      'Layout pensado para facilitar a decisão de compra',
    ],
    ctaText: 'Solicitar orçamento',
    message:
      'Olá! Tenho interesse em criar uma loja virtual profissional com a HospedaShop. Pode me orientar sobre valores, prazo e próximos passos?',
  },
  {
    name: 'Desenvolvimento de Sites',
    description:
      'Para empresas que precisam sair do improviso e ter uma presença digital clara, bonita, responsiva e pronta para gerar contatos.',
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
      'Site responsivo para celular, tablet e computador',
      'Apresentação clara da empresa e dos serviços',
      'Botões de contato e WhatsApp bem posicionados',
      'Visual moderno alinhado à identidade da marca',
      'SEO básico e estrutura preparada para o Google',
      'Publicação, configuração inicial e orientação técnica',
    ],
    ctaText: 'Quero meu site profissional',
    message:
      'Oi! Tenho interesse em criar um site profissional a partir de R$449,90 com a HospedaShop. Pode me explicar como funciona?',
  },
  {
    name: 'Sistemas e Apps Híbridos',
    description:
      'Para empresas que precisam organizar processos, substituir planilhas soltas e criar uma solução sob medida para a operação.',
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
      'Mapeamento do processo antes do desenvolvimento',
      'Telas e fluxos criados para sua operação',
      'Automação de tarefas repetitivas quando fizer sentido',
      'Painel administrativo e controle de dados',
      'Base para evoluir como sistema web ou app híbrido',
    ],
    ctaText: 'Falar sobre meu projeto',
    message:
      'Oi! Preciso de um sistema ou aplicativo sob medida para minha operação. Pode me ajudar a entender escopo, prazo e orçamento?',
  },
];

const infrastructure = [
  {
    icon: Sparkles,
    title: 'Conteúdo que orienta',
    description:
      'Organizamos a mensagem para o visitante entender rapidamente o que você faz, para quem faz e por que vale a pena falar com sua empresa.',
  },
  {
    icon: LayoutDashboard,
    title: 'Fluxo sem bagunça',
    description:
      'A navegação é planejada para reduzir dúvidas e levar o cliente para a ação certa: WhatsApp, formulário, orçamento ou pedido.',
  },
  {
    icon: ShieldCheck,
    title: 'Base segura para evoluir',
    description:
      'O projeto começa no tamanho certo e pode crescer com novas páginas, recursos, integrações e melhorias conforme a necessidade aparecer.',
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
              Soluções digitais para sua empresa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                vender mais confiança
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Comece com o formato certo para o seu momento: site profissional, loja virtual ou sistema sob medida.
              Tudo com escopo claro antes do desenvolvimento.
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

                    <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div
                          className={`w-12 h-12 rounded-2xl ${service.iconBg} border ${service.borderColor} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={2} />
                        </div>

                        {service.featured && (
                          <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 text-[11px] font-bold uppercase tracking-wider">
                            Mais procurado
                          </span>
                        )}
                      </div>

                      <div className="mb-6">
                        <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight mb-3">
                          {service.name}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className={`mb-6 rounded-2xl border ${service.badgeBg} p-4`}>
                        <span className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">
                          Investimento inicial
                        </span>

                        <strong className={`block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                          {service.priceLabel}
                        </strong>
                      </div>

                      <ul className="space-y-3 mb-7 flex-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                            <CheckIcon className={service.checkColor} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={createWhatsappLink(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn relative w-full px-5 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                          service.featured
                            ? 'btn-primary text-white z-10'
                            : `border ${service.buttonClass}`
                        }`}
                      >
                        <span className="relative z-10">{service.ctaText}</span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={240}>
          <div className="mt-16 relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-violet-500/[0.08]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 p-6 sm:p-8 lg:p-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mais que código
                </span>

                <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tight mb-4">
                  Recurso inteligente para organizar e vender melhor.
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Antes de desenvolver, alinhamos objetivo, páginas, chamadas, fluxo de contato e próximos passos.
                  Assim o projeto não nasce bonito e inútil, que é basicamente um enfeite caro com hospedagem.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {infrastructure.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl p-5 bg-slate-950/40 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5" strokeWidth={2} />
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-base mb-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
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
        </ScrollReveal>
      </div>
    </section>
  );
}
