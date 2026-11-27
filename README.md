# JS Paisagismo — site modelo

Site de uma página (HTML + CSS puro, sem build), publicado na Netlify.

**É um modelo:** está com `noindex` (meta tag em `index.html` e cabeçalho `X-Robots-Tag` em `netlify.toml`).
Todo texto marcado com o selo laranja **PROVISÓRIO** (e contorno tracejado) é exemplo.

## Arquivos
- `index.html` — a página inteira (estilos e script dentro do próprio arquivo).
- `netlify.toml` — configuração da Netlify (publica a raiz, cabeçalho noindex).
- `robots.txt`
- `img/` — imagens **ilustrativas** geradas no Canva (marcadas no site com o selo "Imagem ilustrativa"). Trocar pelas fotos reais dos trabalhos.

## O que trocar quando chegar o material
1. **WhatsApp:** no fim do `index.html`, `WHATSAPP_NUMERO = "5500000000000"` → `55` + DDD + número, só dígitos.
2. **Textos provisórios:** procurar `class="prov"` e `class="selo"` no `index.html`; trocar o texto e apagar a marcação.
3. **Fotos:** colocar as fotos reais em `img/` (JPG, ~1200–1920px de largura, idealmente < 300 KB), trocar o `src` das imagens
   ilustrativas (ou os blocos `<div class="vaga">` da galeria) e apagar o selo `<span class="ilustrativa">`.
4. **Faixa laranja do topo e rodapé** ("site modelo"): apagar quando for oficial.

## Quando o site for oficial (domínio próprio)
- Remover `<meta name="robots" ...>` do `index.html` e o `X-Robots-Tag` do `netlify.toml`.
- Na Netlify: *Domain management → Add a domain* (ex.: `jspaisagismo.com.br`) e seguir as instruções de DNS no Registro.br.
