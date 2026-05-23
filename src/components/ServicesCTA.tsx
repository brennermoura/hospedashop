import ScrollReveal from './ScrollReveal';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

const whatsappMessage = encodeURIComponent(
  'Oi! Quero entender qual solução digital faz mais sentido para minha empresa.'
);

const whatsappUrl = `https://wa.me/5521987968794?text=${whatsappMessage}`;

export default function ServicesCTA() {
  return (
    <section
      id="servicos-personalizados"
      className="relative py-16 sm:py-20 overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] via-[#050b18] to-[#070e1f]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="orb w-80 h-80 bg-blue-600/10 -top-28 left-1/4 animate-pulse-slow" />
      <div
        className="orb w-72 h-72 bg-cyan-500/10 bottom-[-6rem] right-1/4 animate-pulse-slow"
        style={{ animationDelay: '1.2s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 rounded-[2rem] blur opacity-15 group-hover:opacity-30 transition duration-700" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-[80px]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
                    <Sparkles className="w-4 h-4 text-cyan-300" />

                    <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                      Comece com clareza
                    </span>
                  </div>

                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                    Seu projeto não precisa começar perfeito.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient text-glow">
                      Precisa começar certo.
                    </span>
                  </h2>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                    Conte sua ideia para a HospedaShop e a gente te ajuda a entender se o melhor
                    caminho é um site, uma loja virtual, um sistema ou uma solução mais simples para
                    começar agora.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      'Sem compromisso',
                      'Sem enrolação técnica',
                      'Site a partir de R$449,90',
                    ].map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-[280px]">
                  <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full px-6 py-4 text-sm font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group/btn overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

                      <MessageCircle className="relative z-10 w-5 h-5" />

                      <span className="relative z-10">
                        Falar no WhatsApp
                      </span>

                      <ArrowRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="#servicos"
                      className="mt-3 w-full px-6 py-4 text-sm font-bold rounded-2xl border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      Ver serviços primeiro
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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