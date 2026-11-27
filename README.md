# Juliana Saes Paisagismo — site

Site de uma página (HTML + CSS, sem build), publicado na Netlify em https://jspaisagismo.netlify.app
(publica automaticamente o branch configurado na Netlify a cada push).

## Arquivos
- `index.html` — a página inteira (estilos e scripts no próprio arquivo).
- `img/` — projetos da Juliana (imagens 3D e obra executada, recortadas sem marca d'água), logo (`logo.png`, `logo-arvores.png`, `favicon.png`). `og.jpg` é a prévia do link no WhatsApp/redes.
- `netlify.toml` — configuração da Netlify (publica a raiz, cabeçalho `noindex`).
- `robots.txt`

## Contato
Os botões de contato abrem o WhatsApp (19) 99843-3729 com uma mensagem pronta.
Número e mensagem ficam em `WHATSAPP_NUMERO` / `WHATSAPP_MENSAGEM` no fim do `index.html`.

## Trocar ou adicionar projetos
Colocar a foto em `img/` (JPG, 1200–1920 px de largura, idealmente < 300 KB) e duplicar um bloco `<button class="proj ...">` da seção Projetos.

## Quando for para o domínio próprio
- Remover `<meta name="robots" ...>` do `index.html` e o `X-Robots-Tag` do `netlify.toml`.
- Atualizar `og:url` e `og:image` no `index.html` para o novo domínio.
- Na Netlify: *Domain management → Add a domain* (ex.: `jspaisagismo.com.br`) e seguir as instruções de DNS.

## Como colaborar (sem custo)
A Netlify (plano grátis, repositório privado) só publica alterações enviadas pela dona da conta.
Por isso, quem colabora **não envia direto** para o branch publicado (`claude/determined-mccarthy-52hjzl`):

1. Faça as alterações num branch próprio (ex.: no Claude Code, deixe ele criar o branch da sessão).
2. Abra um **pull request** para `claude/determined-mccarthy-52hjzl` no GitHub.
3. A dona do repositório revisa e toca em **Merge** — a Netlify publica sozinha em ~1 minuto.
