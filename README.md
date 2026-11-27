# Juliana Saes Paisagismo — site

Site estático (HTML + CSS + JS, sem build), publicado na Netlify em https://jspaisagismo.netlify.app.
A Netlify publica automaticamente o branch `claude/determined-mccarthy-52hjzl` a cada envio.

## Páginas
| Arquivo | Conteúdo |
|---|---|
| `index.html` | Início: abertura com projetos em sequência, escritório, projetos selecionados, abordagem, 3D, serviços, parceria com arquitetos |
| `projetos.html` | Portfólio com filtros (fachadas, lazer, corredores, executados, 3D) |
| `projeto-*.html` | Uma página por projeto: ficha técnica, conceito, espécies, galeria e próximo projeto |
| `escritorio.html` | A paisagista, filosofia, trajetória e região de atendimento |
| `servicos.html` | Serviços, etapas do projeto e perguntas frequentes |
| `contato.html` | Canais e formulário de briefing (abre o WhatsApp com as respostas organizadas) |
| `404.html` | Página de "não encontrado" |

- `css/site.css` — estilos de todas as páginas (cores e fontes no topo do arquivo).
- `js/site.js` — menu, animações, abertura em sequência, filtros, galeria ampliada e formulário.
  **Número do WhatsApp:** `WHATSAPP_NUMERO` no topo deste arquivo (vale para o site inteiro).
- `img/` — fotos dos projetos, logo e `og.jpg` (prévia do link no WhatsApp/redes); `img/detalhes/` — recortes de detalhe.
- O cabeçalho e o rodapé se repetem em cada página: ao mudar um item do menu, mudar em todas.

## Conteúdo provisório (trocar quando houver a informação real)
- Números do início (15+ anos, 200+ jardins).
- Fichas técnicas dos projetos (cidade, área, ano) e as listas de espécies.
- Texto de biografia e a trajetória (2010, 2015, 2020) em `escritorio.html`.
- Prazos das etapas e respostas das perguntas frequentes em `servicos.html`.
- Horário de atendimento e região (rodapé e `contato.html`).
- Foto da Juliana: hoje o espaço do retrato em `escritorio.html` mostra a logo.

## Adicionar um projeto
1. Colocar as fotos em `img/` (JPG, 1200–1920 px de largura, idealmente < 300 KB).
2. Duplicar um `projeto-*.html`, trocar textos, ficha e imagens, e ajustar os links "Próximo projeto".
3. Incluir um cartão em `projetos.html` (e, se quiser, na abertura e nos destaques do `index.html`).

## Como colaborar
O repositório é público, então a Netlify (plano grátis) publica alterações de qualquer colaborador.
Basta enviar para o branch `claude/determined-mccarthy-52hjzl`. Combinem antes quem está editando, para ninguém sobrescrever o trabalho do outro.

## Quando for para o domínio próprio
- Remover `<meta name="robots" ...>` de todas as páginas e o `X-Robots-Tag` do `netlify.toml`.
- Trocar `https://jspaisagismo.netlify.app/` pelo novo domínio nas tags `og:` das páginas.
- Na Netlify: *Domain management → Add a domain* e seguir as instruções de DNS.
