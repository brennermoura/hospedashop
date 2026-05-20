import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030810]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">
                  Hospeda<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Shop</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-5">
                A HospedaShop cria sites profissionais completos, com hospedagem em nuvem, e-mail personalizado e suporte dedicado. Sua presença online de alto nível começa aqui, com tudo que sua empresa precisa.
              </p>

              {/* Contact info */}
              <div className="space-y-2">
                <a
                  href="mailto:contato@hospeda.shop"
                  className="flex items-center gap-2 text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:text-blue-400 transition-colors" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contato@hospeda.shop
                </a>
                <a
                  href="tel:+5521987568794"
                  className="flex items-center gap-2 text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:text-blue-400 transition-colors" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1.08h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  (21) 98756-8794
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Links Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Benefícios', href: '#beneficios' },
                  { label: 'Planos', href: '#planos' },
                  { label: 'Depoimentos', href: '#depoimentos' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Serviços</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Criação de Sites', href: '#faq' },
                  { label: 'Hospedagem em Nuvem', href: '#planos' },
                  { label: 'Email Corporativo', href: '#beneficios' },
                  { label: 'Suporte Técnico Humano', href: '#contato' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <ScrollReveal delay={100}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">
              © {year} HospedaShop. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Política de Privacidade</a>
              <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Termos de Uso</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
