import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'Quanto tempo leva para meu site ficar pronto?',
    answer:
      'Sites institucionais normalmente ficam prontos em até 10 dias úteis após recebermos todas as informações necessárias. Projetos maiores, como lojas virtuais, sistemas e apps, têm prazo definido depois do entendimento do escopo, porque envolvem mais telas, integrações e validações.',
  },
  {
    question: 'O que está incluso no site a partir de R$449,90?',
    answer:
      'O valor inicial cobre a criação de um site profissional, responsivo e preparado para apresentar sua empresa com clareza. Também cuidamos da publicação e da configuração inicial. Recursos extras, páginas adicionais, integrações, manutenção recorrente e e-mails profissionais podem ser adicionados conforme a necessidade do projeto.',
  },
  {
    question: 'Esse valor de R$449,90 é fixo para qualquer site?',
    answer:
      'Não. R$449,90 é o investimento inicial para projetos mais simples. O valor final depende da quantidade de páginas, conteúdo, funcionalidades, integrações e nível de personalização. Antes de qualquer contratação, alinhamos o escopo para você saber exatamente o que será entregue.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer:
      'Depende do que for contratado. Alguns projetos podem ter apenas o valor de desenvolvimento. Outros podem incluir mensalidade para hospedagem, suporte, manutenção, atualizações, e-mail profissional ou evolução contínua. Tudo é explicado antes, sem surpresa escondida em letra miúda feito contrato de operadora.',
  },
  {
    question: 'Preciso comprar o domínio separado?',
    answer:
      'Sim. O domínio, como www.suaempresa.com.br, é contratado separadamente e fica registrado no nome da sua empresa. A parte boa: você não precisa se virar sozinho com DNS e configuração. Orientamos a compra e deixamos tudo apontado corretamente.',
  },
  {
    question: 'Vocês também criam lojas virtuais, sistemas e apps?',
    answer:
      'Sim. Além de sites institucionais, desenvolvemos lojas virtuais, sistemas web e apps híbridos. Esses projetos são orçados conforme a necessidade, porque cada operação possui regras, telas, fluxos e integrações diferentes.',
  },
  {
    question: 'Como funciona o e-mail profissional?',
    answer:
      'Configuramos e-mails com o domínio da sua empresa, como contato@suaempresa.com.br, quando esse serviço fizer parte do projeto. Isso passa mais confiança para o cliente e evita aquele ar de negócio sério usando e-mail pessoal para vender. Convenhamos, ajuda bastante.',
  },
  {
    question: 'Onde os projetos ficam hospedados?',
    answer:
      'Os projetos podem ser publicados em hospedagem na nuvem, em um ambiente preparado para manter seu site, loja, sistema ou app disponível. A melhor opção depende do tipo de projeto, volume esperado de acessos e recursos necessários.',
  },
  {
    question: 'O site vai aparecer no Google?',
    answer:
      'Sim. Desenvolvemos o site com uma estrutura que pode ser encontrada e lida pelo Google, usando boas práticas de performance, organização de conteúdo e SEO básico. Para resultados mais rápidos, também podemos orientar estratégias com tráfego pago.',
  },
  {
    question: 'O site funciona bem em celular?',
    answer:
      'Sim. Todos os projetos são pensados para funcionar bem em celular, tablet e computador. Isso é obrigatório hoje, porque boa parte dos clientes acessa pelo celular. Se o mobile for ruim, o visitante fecha a página e vai embora sem cerimônia.',
  },
  {
    question: 'Eu preciso saber mexer com site ou tecnologia?',
    answer:
      'Não. A HospedaShop cuida da parte técnica e orienta você no que for necessário. Você não precisa decorar servidor, SSL, DNS ou qualquer outro palavrão técnico para ter seu projeto online.',
  },
  {
    question: 'Como faço para começar?',
    answer:
      'O primeiro passo é chamar nossa equipe e explicar o que sua empresa precisa. A partir disso, entendemos o objetivo, indicamos o melhor caminho, alinhamos prazo, investimento e próximos passos. Assim você começa com clareza, sem chute e sem orçamento tirado da cartola.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] to-[#070e1f]" />
      <div className="orb w-80 h-80 bg-cyan-600/8 top-1/2 -translate-y-1/2 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                Dúvidas frequentes
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Perguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Frequentes
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Respostas diretas para você entender valores, prazo, domínio, suporte e próximos passos antes de começar.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 50}>
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'bg-blue-950/30 border-blue-500/30'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 pr-4 ${
                      openIndex === index
                        ? 'text-white'
                        : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-blue-500 rotate-45'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-colors duration-200 ${
                        openIndex === index ? 'text-white' : 'text-slate-400'
                      }`}
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
                    openIndex === index ? 'max-h-[720px]' : 'max-h-0'
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
