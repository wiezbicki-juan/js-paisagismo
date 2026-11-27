# JS Paisagismo — site

Site de uma página (HTML + CSS, sem build), publicado na Netlify em https://jspaisagismo.netlify.app
(publica automaticamente o branch configurado na Netlify a cada push).

## Arquivos
- `index.html` — a página inteira (estilos e scripts no próprio arquivo).
- `img/` — imagens ilustrativas geradas no Canva (otimizadas). `og.jpg` é a prévia do link no WhatsApp/redes.
- `netlify.toml` — configuração da Netlify (publica a raiz, cabeçalho `noindex`).
- `robots.txt`

## Contato
Os botões "Enviar mensagem" abrem o Direct do Instagram (@js.paisagismo).
Para usar WhatsApp, preencher `WHATSAPP_NUMERO` no fim do `index.html` (55 + DDD + número, só dígitos):
os botões passam a abrir o WhatsApp automaticamente.

## Trocar imagens por fotos reais
Colocar a foto em `img/` com o mesmo nome do arquivo a substituir (JPG, 1200–1920 px de largura, idealmente < 300 KB).

## Quando for para o domínio próprio
- Remover `<meta name="robots" ...>` do `index.html` e o `X-Robots-Tag` do `netlify.toml`.
- Atualizar `og:url` e `og:image` no `index.html` para o novo domínio.
- Na Netlify: *Domain management → Add a domain* (ex.: `jspaisagismo.com.br`) e seguir as instruções de DNS.
