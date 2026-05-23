# HospedaShop — components refatorados

Alterações principais:

- Removido todo resíduo do preço antigo R$49,90/mês.
- Oferta principal ajustada para site profissional a partir de R$449,90.
- Copy do Hero, Benefícios, Serviços, CTA, FAQ, Depoimentos e Contato reescrita para defender melhor valor e reduzir objeções.
- CTA de ServicesCTA corrigido de /servicos para #servicos.
- Número do Footer corrigido para bater com o WhatsApp: +55 21 98796-8794.
- FAQ ampliada para 12 perguntas e max-height aumentado para não cortar resposta.
- Formulário de contato agora deixa explícito que abre o WhatsApp com mensagem pronta.
- Select de serviço atualizado com valores atuais.
- Hero deixou de usar Math.random no render e passou a usar partículas fixas.
- Preloader encurtado de 2s para 900ms para reduzir atrito na entrada do site.
- ServicesCTA foi limpo para remover bloco comentado antigo e deixar o arquivo mais saudável.

Substitua a pasta `components` atual pelos arquivos desta pasta, preservando seus demais hooks, estilos globais e dependências.
