import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';
import {
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5521987968794';

const serviceLabels: Record<string, string> = {
  site: 'Site profissional — a partir de R$449,90',
  loja: 'Loja virtual — a partir de R$928,90',
  sistema: 'Sistema ou app híbrido — a partir de R$1.487,90',
  email: 'E-mail corporativo e infraestrutura',
  duvida: 'Ainda não sei, preciso de orientação',
};

export default function LeadCapture() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedService = serviceLabels[form.plan] || form.plan;

    const message = `*Novo contato - HospedaShop*

*Nome:* ${form.name}
*E-mail:* ${form.email}
*WhatsApp:* ${form.phone}
*Interesse:* ${selectedService}
*Mensagem:* ${form.message || 'Não informado'}

Mensagem enviada pelo formulário do site.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1f] to-[#050b18]" />
      <div className="orb w-[600px] h-[600px] bg-blue-600/10 -top-40 left-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left" distance={50}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                  Comece com clareza
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Pronto para estruturar seu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  projeto digital?
                </span>
              </h2>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                Conte o que sua empresa precisa agora: site, loja virtual, e-mail corporativo, sistema ou app híbrido.
                A gente organiza o escopo e indica o caminho mais simples para começar sem gastar energia à toa.
              </p>

              <div className="space-y-4">
                {[
                  { icon: MessageSquare, text: 'Entendimento do momento atual da empresa' },
                  { icon: LayoutDashboard, text: 'Indicação do melhor formato para começar' },
                  { icon: ShoppingBag, text: 'Escopo claro para site, loja, sistema ou app' },
                  { icon: ShieldCheck, text: 'Proposta organizada antes do desenvolvimento' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-base flex-shrink-0">
                      <item.icon className="w-4 h-4 text-slate-100" strokeWidth={2} />
                    </div>
                    <span className="text-slate-300 text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5521987968794?text=Oi!%20Tenho%20interesse%20em%20um%20projeto%20digital%20da%20HospedaShop.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={50} delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl p-7 sm:p-9 shadow-2xl shadow-black/30">
                {!submitted ? (
                  <>
                    <div className="mb-7">
                      <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">
                        Solicite uma conversa
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Preencha os dados e abriremos o WhatsApp com sua solicitação pronta para envio.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="(21) 99999-9999"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Serviço de interesse
                        </label>
                        <select
                          name="plan"
                          value={form.plan}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0a1628] border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Selecione um serviço</option>
                          <option value="site">Site profissional — a partir de R$449,90</option>
                          <option value="loja">Loja virtual — a partir de R$928,90</option>
                          <option value="sistema">Sistema ou app híbrido — a partir de R$1.487,90</option>
                          <option value="email">E-mail corporativo e infraestrutura</option>
                          <option value="duvida">Ainda não sei, preciso de orientação</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          O que você precisa?
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Ex: quero um site para apresentar minha empresa e receber contatos pelo WhatsApp."
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary relative w-full py-4 text-base font-bold rounded-2xl text-white z-10 flex items-center justify-center gap-2 group mt-2 disabled:opacity-80 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span className="relative z-10">Preparando mensagem...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">Enviar pelo WhatsApp</span>
                            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-center text-slate-600 text-xs flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                        Seus dados serão usados apenas para responder sua solicitação.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-2">
                      Mensagem pronta no WhatsApp
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      Abrimos uma conversa com sua solicitação preenchida. Agora é só conferir e enviar para nossa equipe receber tudo certinho.
                    </p>

                    <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <p className="text-blue-300 text-sm">
                        <Sparkles className="inline-block w-4 h-4 mr-1.5 align-[-2px]" />
                        Se o WhatsApp não abriu, revise se o navegador bloqueou pop-up e tente enviar novamente.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
