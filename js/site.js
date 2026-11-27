/* Juliana Saes Paisagismo — comportamento compartilhado por todas as páginas. */
(function () {
  // ===== CONTATO =====
  // WhatsApp: 55 + DDD + número, só dígitos.
  var WHATSAPP_NUMERO = "5519998433729";
  var WHATSAPP_MENSAGEM = "Olá, Juliana! Vi o seu site e gostaria de conversar sobre um projeto.";

  function linkWhats(texto) {
    return "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(texto || WHATSAPP_MENSAGEM);
  }
  document.querySelectorAll(".js-msg").forEach(function (a) {
    a.href = linkWhats(a.getAttribute("data-msg"));
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll(".js-ano").forEach(function (s) { s.textContent = new Date().getFullYear(); });

  // ===== Menu do celular =====
  var topo = document.getElementById("topo"), burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var a = topo.classList.toggle("aberto");
      burger.setAttribute("aria-expanded", a);
      burger.setAttribute("aria-label", a ? "Fechar menu" : "Abrir menu");
    });
    document.querySelectorAll("#menu a").forEach(function (l) {
      l.addEventListener("click", function () { topo.classList.remove("aberto"); burger.setAttribute("aria-expanded", false); });
    });
  }

  // ===== Cabeçalho sólido e botão flutuante =====
  var flut = document.getElementById("flutuante");
  function aoRolar() {
    var y = window.scrollY;
    if (topo) topo.classList.toggle("solido", y > 40);
    if (flut) flut.classList.toggle("ver", y > window.innerHeight * 0.7);
  }
  window.addEventListener("scroll", aoRolar, { passive: true }); aoRolar();

  // ===== Revelação ao rolar =====
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add("on"); }); }

  // ===== Abertura com fotos em sequência =====
  var capa = document.querySelector(".capa");
  if (capa) {
    var slides = capa.querySelectorAll(".slide"), idx = 0, timer = null;
    var tit = capa.querySelector(".js-leg-tit"), sub = capa.querySelector(".js-leg-sub"), num = capa.querySelector(".js-num"), barra = capa.querySelector(".barra i");
    var parado = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function vai(i) {
      slides[idx].classList.remove("ativo");
      idx = (i + slides.length) % slides.length;
      var s = slides[idx]; s.classList.add("ativo");
      var im = s.querySelector("img"); if (im.dataset.src) { im.src = im.dataset.src; im.removeAttribute("data-src"); }
      if (tit) tit.textContent = s.dataset.titulo;
      if (sub) sub.textContent = s.dataset.sub;
      if (num) num.textContent = ("0" + (idx + 1)).slice(-2) + " / " + ("0" + slides.length).slice(-2);
      if (barra) { barra.classList.remove("corre"); void barra.offsetWidth; if (!parado) barra.classList.add("corre"); }
      agenda();
    }
    function agenda() { clearTimeout(timer); if (!parado) timer = setTimeout(function () { vai(idx + 1); }, 6000); }
    var ant = capa.querySelector(".js-ant"), prox = capa.querySelector(".js-prox");
    if (ant) ant.addEventListener("click", function () { vai(idx - 1); });
    if (prox) prox.addEventListener("click", function () { vai(idx + 1); });
    vai(0);
  }

  // ===== Filtros do portfólio =====
  var filtros = document.querySelectorAll(".filtros button");
  filtros.forEach(function (b) {
    b.addEventListener("click", function () {
      filtros.forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      var f = b.dataset.f;
      document.querySelectorAll(".card-proj").forEach(function (c) {
        c.classList.toggle("oculto", f !== "todos" && (" " + c.dataset.cat + " ").indexOf(" " + f + " ") < 0);
      });
    });
  });

  // ===== Comparador projeto 3D x executado =====
  document.querySelectorAll(".compara").forEach(function (c) {
    var r = c.querySelector("input");
    function atual() { c.style.setProperty("--corte", r.value + "%"); }
    r.addEventListener("input", atual); atual();
  });

  // ===== Visualizador de imagens =====
  var grupos = document.querySelectorAll("[data-galeria]");
  if (grupos.length) {
    var lb = document.createElement("div");
    lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Imagem ampliada");
    lb.innerHTML = '<button class="fechar" aria-label="Fechar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<button class="ant" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5l-7 7 7 7"/></svg></button>' +
      '<img alt=""><button class="prox" aria-label="Próxima"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 5l7 7-7 7"/></svg></button><p></p>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img"), lbTxt = lb.querySelector("p"), itens = [], atualI = 0, origem = null;
    function mostra(i) {
      atualI = (i + itens.length) % itens.length;
      var im = itens[atualI].querySelector("img");
      lbImg.src = itens[atualI].dataset.full || im.currentSrc || im.src; lbImg.alt = im.alt;
      lbTxt.textContent = itens[atualI].dataset.legenda || im.alt;
    }
    function fecha() { lb.classList.remove("ver"); document.body.style.overflow = ""; if (origem) origem.focus(); }
    grupos.forEach(function (g) {
      var lista = Array.prototype.slice.call(g.querySelectorAll("[data-lb]"));
      lista.forEach(function (el, i) {
        el.setAttribute("tabindex", "0"); el.setAttribute("role", "button");
        function abre() { itens = lista; origem = el; mostra(i); lb.classList.add("ver"); document.body.style.overflow = "hidden"; lb.querySelector(".fechar").focus(); }
        el.addEventListener("click", abre);
        el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abre(); } });
      });
    });
    lb.querySelector(".fechar").addEventListener("click", fecha);
    lb.querySelector(".ant").addEventListener("click", function () { mostra(atualI - 1); });
    lb.querySelector(".prox").addEventListener("click", function () { mostra(atualI + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) fecha(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("ver")) return;
      if (e.key === "Escape") fecha();
      if (e.key === "ArrowLeft") mostra(atualI - 1);
      if (e.key === "ArrowRight") mostra(atualI + 1);
    });
  }

  // ===== Briefing do contato: monta a mensagem e abre o WhatsApp =====
  var form = document.getElementById("briefing");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form), linhas = ["Olá, Juliana! Vim pelo site e gostaria de conversar sobre um projeto.", ""];
      function add(rot, val) { if (val && String(val).trim()) linhas.push("*" + rot + ":* " + String(val).trim()); }
      add("Nome", d.get("nome"));
      add("Cidade / bairro", d.get("cidade"));
      add("Tipo de imóvel", d.get("imovel"));
      add("Serviços de interesse", d.getAll("servico").join(", "));
      add("Fase da obra", d.get("fase"));
      add("Área aproximada", d.get("area"));
      add("Arquiteto(a) responsável", d.get("arquiteto"));
      add("Como conheceu", d.get("origem"));
      if (d.get("mensagem")) { linhas.push(""); linhas.push(String(d.get("mensagem")).trim()); }
      window.open(linkWhats(linhas.join("\n")), "_blank", "noopener");
    });
  }
})();
