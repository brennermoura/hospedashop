import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10',
    title: 'Alta Performance',
    description:
      'Passe confiança com um site que carrega rápido de verdade. Desenvolvemos projetos totalmente otimizados para rodar bem no celular, tablet e desktop, entregando a fluidez e o profissionalismo que o seu cliente espera.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
        <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-600',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/10',
    title: 'Hospedagem Cloud',
    description:
      'Trabalhamos com uma infraestrutura segura e de alta performance para o seu site carregar rápido e ter estabilidade total. É uma plataforma que cresce junto com o seu negócio, mantendo tudo protegido e sempre online para atender seu público.',
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
    title: 'Segurança SSL Inclusa',
    description:
      'Construa uma presença digital segura logo no início. Seus visitantes navegam em um ambiente com criptografia total, protegendo as informações e garantindo que o seu site seja visto como profissional e confiável pelo público.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-violet-400">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="19" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'from-violet-500 to-violet-600',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10',
    title: 'Tecnologia Moderna',
    description:
      'Use a tecnologia a favor do seu crescimento. Entregamos sites modernos e seguros, desenvolvidos com as ferramentas que os grandes players utilizam. Assim, sua empresa tem uma presença digital sólida, profissional e sempre pronta para evoluir.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-400">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'from-orange-500 to-orange-600',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    iconBg: 'bg-orange-500/10',
    title: 'E-mail Corporativo Confiável',
    description:
      'Passe muito mais confiança com um e-mail personalizado. Esqueça o @gmail ou @outlook e use o nome da sua empresa, tipo contato@suaempresa. É o detalhe que faz toda a diferença para mostrar que o seu negócio é sério e profissional.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pink-400">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'from-pink-500 to-pink-600',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/20',
    iconBg: 'bg-pink-500/10',
    title: 'Suporte Humano Dedicado',
    description:
      'Tenha um suporte que realmente resolve. Esqueça os robôs e as mensagens automáticas. Aqui você fala com gente de verdade, especialistas prontos para ouvir seu caso, entender o que você precisa e resolver tudo com atenção e agilidade.',
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
              Nossos planos garantem a qualidade e a segurança de ponta que sua
              empresa precisa para uma presença digital profissional.
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
                    Tudo isso já incluso em{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      qualquer plano
                    </span>
                    , sem taxas extras ou pegadinhas.
                  </h2>

                  <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                    Transparência total para você focar no que importa: o
                    crescimento do seu negócio.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#planos"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
                  >
                    <span>Quero Meu Site Agora</span>
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
                    Sem letras miúdas
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
