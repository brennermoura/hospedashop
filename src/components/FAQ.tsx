import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'Quanto tempo leva para meu site ficar pronto?',
    answer: 'Sites institucionais costumam ficar prontos em até 10 dias úteis após o envio das informações. Lojas virtuais, sistemas e apps híbridos têm prazo definido por escopo, porque dependem de funcionalidades, integrações e volume de conteúdo.',
  },
  {
    question: 'O que está incluso no site de R$49,90/mês?',
    answer: 'O plano de site inclui desenvolvimento do site profissional, hospedagem na nuvem, site protegido, e-mail corporativo, suporte técnico e atualizações mensais. O domínio é contratado à parte, mas fazemos a orientação e a configuração.',
  },
  {
    question: 'Preciso comprar o domínio separado?',
    answer: 'Sim, o domínio (ex: www.suaempresa.com.br) deve ser adquirido separadamente. Podemos orientar sobre onde e como comprar, além de fazer toda a configuração para você sem custo adicional.',
  },
  {
    question: 'Vocês também criam lojas virtuais, sistemas e apps?',
    answer: 'Sim. Além de sites, criamos lojas virtuais, sistemas web e apps híbridos que podem funcionar no navegador e no celular. Esses projetos são orçados conforme o escopo, porque cada operação precisa de fluxos, telas e integrações diferentes.',
  },
  {
    question: 'Como funciona o e-mail profissional?',
    answer: 'Configuramos e-mails personalizados com o domínio da sua empresa, como contato@suaempresa.com.br. Isso ajuda a transmitir mais credibilidade e mantém a comunicação alinhada com a marca.',
  },
  {
    question: 'Onde os projetos ficam hospedados?',
    answer: 'Os projetos são publicados em hospedagem na nuvem, em um ambiente seguro e preparado para manter seu site, loja, sistema ou app sempre disponível para os clientes.',
  },
  {
    question: 'O site vai aparecer no Google?',
    answer: 'Sim! O Google vai conseguir encontrar e ler o seu site sem problemas, porque seguimos todos os padrões de otimização que o buscador exige. Para quem busca um crescimento mais acelerado, vale a pena considerar também o tráfego pago, que coloca sua marca em destaque para quem já está procurando pelo seu serviço.',
  },
  {
    question: 'O site funciona em celular e tablet?',
    answer: 'Sim. Os projetos são pensados para funcionar bem em celular, tablet e desktop. No caso de apps híbridos, a proposta é entregar uma experiência que possa ser usada como app e também como sistema web.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] to-[#070e1f]" />
      <div className="orb w-80 h-80 bg-cyan-600/8 top-1/2 -translate-y-1/2 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Dúvidas frequentes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Frequentes
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              As dúvidas que mais recebemos — respondidas de forma clara e direta
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'bg-blue-950/30 border-blue-500/30'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors duration-200 pr-4 ${
                    openIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-blue-500 rotate-45'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-colors duration-200 ${openIndex === index ? 'text-white' : 'text-slate-400'}`}
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent mb-4" />
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
