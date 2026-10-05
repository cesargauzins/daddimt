// ============================================================
//  TRADUCTIONS SUGAR DADDIMT
//  Chaque texte du site existe dans les 5 langues ci-dessous.
// ============================================================

const LANGUAGES = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English",  flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "es", name: "Español",  flag: "🇪🇸" },
  { code: "de", name: "Deutsch",  flag: "🇩🇪" },
];

const TRANSLATIONS = {
  fr: {
    "page.title": "Sugar Daddimt – Tiramisu Maison",
    "lang.choose": "Choisissez votre langue",
    "hero.tagline": "Tiramisu artisanal fait avec amour",
    "hero.cta": "Commander",
    "order.title": "Commander",
    "photo.soon": "Photo à venir",
    "product.classic.name": "Tiramisu Classique",
    "product.classic.desc": "La recette traditionnelle — café, mascarpone, biscuits boudoirs et cacao en poudre.",
    "product.nutella.name": "Tiramisu Nutella Spéculoos",
    "product.nutella.desc": "Notre création signature — Nutella fondant, spéculoos croquants et crème onctueuse.",
    "sale.badge": "Vente ouverte",
    "sale.button": "Passer ma commande",
    "sale.deadline": "Commandes jusqu'au ",
    "closed.title": "Pas de vente en cours",
    "closed.desc": "Aucune commande n'est ouverte pour le moment.<br/>Revenez bientôt pour la prochaine fournée !",
    "about.title": "Notre histoire",
    "about.p1": "Sugar Daddimt est une association passionnée dédiée à l'art du tiramisu maison. Tout commenca en J152 lorsque Daddy Pépéroni vola la recette secrete de la mama Ricotina Mozzarella. Son rêve: faire des tiramisus et redoré le blason de la famille Parmigiano, autrefois célèbre pour ses fondant au chocolat de l'espace.",
    "about.p2": "Nous organisons régulièrement des ventes pour partager nos créations avec tous les amateurs de douceurs. Restez connectés pour ne pas rater la prochaine commande !",
    "badge.eggs": "Œufs frais",
    "badge.mascarpone": "Mascarpone",
    "badge.coffee": "Café serré",
    "badge.ladyfingers": "Boudoirs",
    "badge.cocoa": "Cacao pur",
    "about.img": "Notre tiramisu",
    "footer.copy": "Association – Tiramisu artisanal &copy; 2026",
  },

  en: {
    "page.title": "Sugar Daddimt – Homemade Tiramisu",
    "lang.choose": "Choose your language",
    "hero.tagline": "Handmade tiramisu made with love",
    "hero.cta": "Order",
    "order.title": "Order",
    "photo.soon": "Photo coming soon",
    "product.classic.name": "Classic Tiramisu",
    "product.classic.desc": "The traditional recipe — coffee, mascarpone, ladyfingers and cocoa powder.",
    "product.nutella.name": "Nutella Speculoos Tiramisu",
    "product.nutella.desc": "Our signature creation — melting Nutella, crunchy speculoos and smooth cream.",
    "sale.badge": "Sale open",
    "sale.button": "Place my order",
    "sale.deadline": "Orders until ",
    "closed.title": "No sale at the moment",
    "closed.desc": "No orders are open right now.<br/>Come back soon for the next batch!",
    "about.title": "Our story",
    "about.p1": "Sugar Daddimt is a passionate association dedicated to the art of homemade tiramisu. It all began on D152 when Daddy Pépéroni stole the secret recipe of mama Ricotina Mozzarella. His dream: to make tiramisus and restore the honour of the Parmigiano family, once famous for its chocolate fondants from outer space.",
    "about.p2": "We regularly organise sales to share our creations with everyone who loves sweets. Stay tuned so you don't miss the next order!",
    "badge.eggs": "Fresh eggs",
    "badge.mascarpone": "Mascarpone",
    "badge.coffee": "Strong coffee",
    "badge.ladyfingers": "Ladyfingers",
    "badge.cocoa": "Pure cocoa",
    "about.img": "Our tiramisu",
    "footer.copy": "Association – Handmade tiramisu &copy; 2026",
  },

  it: {
    "page.title": "Sugar Daddimt – Tiramisù fatto in casa",
    "lang.choose": "Scegli la tua lingua",
    "hero.tagline": "Tiramisù artigianale fatto con amore",
    "hero.cta": "Ordina",
    "order.title": "Ordina",
    "photo.soon": "Foto in arrivo",
    "product.classic.name": "Tiramisù Classico",
    "product.classic.desc": "La ricetta tradizionale — caffè, mascarpone, savoiardi e cacao in polvere.",
    "product.nutella.name": "Tiramisù Nutella Speculoos",
    "product.nutella.desc": "La nostra creazione firma — Nutella fondente, speculoos croccanti e crema vellutata.",
    "sale.badge": "Vendita aperta",
    "sale.button": "Effettua il mio ordine",
    "sale.deadline": "Ordini fino al ",
    "closed.title": "Nessuna vendita in corso",
    "closed.desc": "Al momento non ci sono ordini aperti.<br/>Torna presto per la prossima infornata!",
    "about.title": "La nostra storia",
    "about.p1": "Sugar Daddimt è un'associazione appassionata dedicata all'arte del tiramisù fatto in casa. Tutto iniziò il G152 quando Daddy Pépéroni rubò la ricetta segreta della mamma Ricotina Mozzarella. Il suo sogno: fare tiramisù e ridare lustro alla famiglia Parmigiano, un tempo famosa per i suoi tortini al cioccolato dello spazio.",
    "about.p2": "Organizziamo regolarmente vendite per condividere le nostre creazioni con tutti gli amanti dei dolci. Restate connessi per non perdere il prossimo ordine!",
    "badge.eggs": "Uova fresche",
    "badge.mascarpone": "Mascarpone",
    "badge.coffee": "Caffè ristretto",
    "badge.ladyfingers": "Savoiardi",
    "badge.cocoa": "Cacao puro",
    "about.img": "Il nostro tiramisù",
    "footer.copy": "Associazione – Tiramisù artigianale &copy; 2026",
  },

  es: {
    "page.title": "Sugar Daddimt – Tiramisú casero",
    "lang.choose": "Elige tu idioma",
    "hero.tagline": "Tiramisú artesanal hecho con amor",
    "hero.cta": "Pedir",
    "order.title": "Pedir",
    "photo.soon": "Foto próximamente",
    "product.classic.name": "Tiramisú Clásico",
    "product.classic.desc": "La receta tradicional — café, mascarpone, bizcochos de soletilla y cacao en polvo.",
    "product.nutella.name": "Tiramisú Nutella Speculoos",
    "product.nutella.desc": "Nuestra creación estrella — Nutella fundente, speculoos crujientes y crema suave.",
    "sale.badge": "Venta abierta",
    "sale.button": "Hacer mi pedido",
    "sale.deadline": "Pedidos hasta el ",
    "closed.title": "No hay venta en curso",
    "closed.desc": "No hay pedidos abiertos por el momento.<br/>¡Vuelve pronto para la próxima hornada!",
    "about.title": "Nuestra historia",
    "about.p1": "Sugar Daddimt es una asociación apasionada dedicada al arte del tiramisú casero. Todo empezó el D152 cuando Daddy Pépéroni robó la receta secreta de la mamma Ricotina Mozzarella. Su sueño: hacer tiramisús y devolver el prestigio a la familia Parmigiano, antaño famosa por sus coulants de chocolate del espacio.",
    "about.p2": "Organizamos ventas con regularidad para compartir nuestras creaciones con todos los amantes de los dulces. ¡Mantente atento para no perderte el próximo pedido!",
    "badge.eggs": "Huevos frescos",
    "badge.mascarpone": "Mascarpone",
    "badge.coffee": "Café intenso",
    "badge.ladyfingers": "Soletillas",
    "badge.cocoa": "Cacao puro",
    "about.img": "Nuestro tiramisú",
    "footer.copy": "Asociación – Tiramisú artesanal &copy; 2026",
  },

  de: {
    "page.title": "Sugar Daddimt – Hausgemachtes Tiramisu",
    "lang.choose": "Wähle deine Sprache",
    "hero.tagline": "Handgemachtes Tiramisu, mit Liebe zubereitet",
    "hero.cta": "Bestellen",
    "order.title": "Bestellen",
    "photo.soon": "Foto folgt",
    "product.classic.name": "Klassisches Tiramisu",
    "product.classic.desc": "Das traditionelle Rezept — Kaffee, Mascarpone, Löffelbiskuits und Kakaopulver.",
    "product.nutella.name": "Tiramisu Nutella Spekulatius",
    "product.nutella.desc": "Unsere Signature-Kreation — schmelzende Nutella, knuspriger Spekulatius und cremige Creme.",
    "sale.badge": "Verkauf geöffnet",
    "sale.button": "Jetzt bestellen",
    "sale.deadline": "Bestellungen bis ",
    "closed.title": "Kein Verkauf im Moment",
    "closed.desc": "Derzeit sind keine Bestellungen möglich.<br/>Schau bald wieder vorbei für die nächste Ladung!",
    "about.title": "Unsere Geschichte",
    "about.p1": "Sugar Daddimt ist ein leidenschaftlicher Verein, der sich der Kunst des hausgemachten Tiramisus widmet. Alles begann am T152, als Daddy Pépéroni das Geheimrezept von Mama Ricotina Mozzarella stahl. Sein Traum: Tiramisus zu machen und den Ruf der Familie Parmigiano wiederherzustellen, die einst für ihre Schokoladenküchlein aus dem Weltall berühmt war.",
    "about.p2": "Wir organisieren regelmäßig Verkäufe, um unsere Kreationen mit allen Naschkatzen zu teilen. Bleib dran, damit du die nächste Bestellung nicht verpasst!",
    "badge.eggs": "Frische Eier",
    "badge.mascarpone": "Mascarpone",
    "badge.coffee": "Starker Kaffee",
    "badge.ladyfingers": "Löffelbiskuits",
    "badge.cocoa": "Reiner Kakao",
    "about.img": "Unser Tiramisu",
    "footer.copy": "Verein – Handgemachtes Tiramisu &copy; 2026",
  },
};

let currentLang = "fr";

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.fr[key] || "";
}

// Renvoie le texte d'une option de CONFIG dans la langue choisie
// (accepte soit un texte simple, soit un objet { fr: "...", en: "...", ... })
function configText(value) {
  if (value && typeof value === "object") return value[currentLang] || value.fr || "";
  return value || "";
}

function applyLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : "fr";
  document.documentElement.lang = currentLang;
  document.title = t("page.title");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    el.alt = t(el.dataset.i18nAlt);
  });

  const current = LANGUAGES.find(l => l.code === currentLang);
  const switchBtn = document.getElementById("lang-switch");
  if (switchBtn) switchBtn.textContent = current.flag + " " + current.code.toUpperCase();

  if (typeof renderSale === "function") renderSale();
}

// ----- Fenêtre de choix de langue -----
(function () {
  const modal = document.getElementById("lang-modal");
  const list  = document.getElementById("lang-list");

  LANGUAGES.forEach(lang => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-modal__option";
    btn.innerHTML = '<span class="lang-modal__flag">' + lang.flag + '</span><span>' + lang.name + '</span>';
    btn.addEventListener("click", () => {
      try { localStorage.setItem("lang", lang.code); } catch (e) {}
      applyLanguage(lang.code);
      closeModal();
    });
    list.appendChild(btn);
  });

  function openModal() {
    modal.hidden = false;
    document.body.classList.add("no-scroll");
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  document.getElementById("lang-switch").addEventListener("click", openModal);

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}

  applyLanguage(saved || "fr");
  // Première visite : on affiche directement la fenêtre de choix
  if (!saved) openModal();
})();
