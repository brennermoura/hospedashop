import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    stars: 5,
    text:
      'Ter um site é como ter uma casa arrumada para receber empresas. Consegui contratos graças a ele e fiquei muito satisfeito com a forma como minhas ideias viraram realidade.',
    name: 'Rafael Carloto',
    role: 'CEO, Smart X English',
    result: 'Site institucional para gerar autoridade e contatos',
    initials: 'RC',
    color: 'from-blue-500 to-blue-600',
  },
  {
    stars: 5,
    text:
      'Gostaria de agradecer pela atualização do nosso site. Ficou ótimo. Muito obrigado pela atenção de sempre. Super recomendo!',
    name: 'Doriney Braga',
    role: 'CEO, Lliz Ambiental',
    result: 'Atualização de presença digital corporativa',
    initials: 'DB',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] to-[#050b18]" />
      <div className="orb w-96 h-96 bg-yellow-500/5 top-0 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
                Depoimentos reais
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              O que nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                clientes dizem
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Empresas que confiaram na HospedaShop para melhorar sua presença digital e transmitir mais profissionalismo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 150}>
              <div className="group relative rounded-3xl p-7 sm:p-8 bg-white/[0.03] border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/10 h-full">
                <div className="absolute top-6 right-6 text-6xl text-blue-500/10 font-serif leading-none select-none">&quot;</div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5 italic">
                  “{testimonial.text}”
                </p>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs mb-6">
                  {testimonial.result}
                </div>

                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${testimonial.color} opacity-20`} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
