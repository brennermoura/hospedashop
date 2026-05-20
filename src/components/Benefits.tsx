import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03442 19.1785 5.12741 19.4243 5.10657 19.6732L4.92308 21.875C4.8936 22.2287 5.21556 22.5135 5.55393 22.3996L7.90696 21.6074C8.13601 21.5303 8.38676 21.5647 8.58913 21.7011C9.62479 21.897 10.7992 22 12 22Z" fill="currentColor" fillOpacity="0.15" />
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
        <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
        <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    title: 'Design que Transmite Confiança',
    description:
      'Criamos uma primeira impressão impecável. Seu site ganha um visual moderno, elegante e estratégico, transmitindo a autoridade que sua empresa merece desde o primeiro clique.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
    title: 'Copywriting Estratégico',
    description:
      'Textos e chamadas criados sob medida para o seu público. Comunicamos o value do seu serviço de forma simples, direta e altamente persuasiva para facilitar a decisão de compra.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-600',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/10',
    title: 'Foco Total em Conversão',
    description:
      'Estrutura planejada para transformar visitantes em oportunidades reais. Levamos o cliente direto para o seu WhatsApp, formulário ou carrinho de forma natural e sem fricção.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
    color: 'from-violet-500 to-violet-600',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10',
    title: 'Estrutura Escalável',
    description:
      'Seu projeto nasce pronto para o futuro. O ecossistema é modular, permitindo expandir seu site para uma loja virtual, área de membros ou sistema interno conforme seu negócio cresce.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor" fillOpacity="0.15" />
        <path d="M5 20h14a2 2 0 0 0 2-2V16H3v2a2 2 0 0 0 2 2z" />
      </svg>
    ),
    color: 'from-orange-500 to-orange-600',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    iconBg: 'bg-orange-500/10',
    title: 'Posicionamento Premium',
    description:
      'Alinhamos sua identidade visual e comunicação para destacar sua marca da concorrência. Construímos uma presença digital séria e marcante que atrai os clientes certos.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
    color: 'from-pink-500 to-pink-600',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/20',
    iconBg: 'bg-pink-500/10',
    title: 'Suporte e Evolução Contínua',
    description:
      'Não te deixamos sozinho após o lançamento. Acompanhamos os primeiros passos do projeto, aplicando ajustes, melhorias e garantindo que sua plataforma rode 100% estabilizada.',
  },
];
export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-[#070e1f] to-[#050b18]" />
      <div className="orb w-96 h-96 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                Por que nos escolher
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Por que escolher a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                HospedaShop?
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Mais do que publicar páginas, organizamos a forma como sua empresa se apresenta,
              vende e evolui no digital.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 100}>
              <div
                className={`group relative rounded-2xl p-6 sm:p-7 bg-white/[0.03] border ${benefit.border} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 h-full`}
              >
                {/* Card hover glow - behind content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl ${benefit.iconBg} border ${benefit.border} flex items-center justify-center mb-5 shadow-lg ${benefit.glow} group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                {/* Content - all relative z-10 to stay above the glow */}
                <h3 className="relative z-10 text-white font-bold text-lg mb-3 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative z-10 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${benefit.color} opacity-[0.06] rounded-bl-3xl rounded-tr-2xl pointer-events-none`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote Banner */}
        <ScrollReveal delay={200}>
          <div className="mt-16 relative group">
            {/* Glow Externo para dar profundidade */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

            <div className="relative rounded-3xl overflow-hidden bg-slate-950/50 border border-white/10 backdrop-blur-md">
              {/* Gradientes de fundo animados (Blur decorativo) */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

              <div className="relative z-10 p-8 sm:p-16 text-center">
                {/* Aspas estilizadas */}
                <span className="absolute top-6 left-8 text-7xl text-blue-500/10 font-serif pointer-events-none">
                  “
                </span>

                <div className="max-w-4xl mx-auto">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                    Um site profissional vai muito além de{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      linhas de código
                    </span>
                    . Ele precisa ser fácil de entender, direto ao ponto e pronto para gerar contatos.
                  </h2>

                  <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                    Por isso entregamos o pacote completo: visual limpo, textos claros e uma estrutura que funciona sem complicação.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#servicos"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
                  >
                    <span>Ver Serviços</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>

                  <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">
                    Clareza antes de complexidade
                  </span>
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
  );
}
