// ============================================================
//  CONFIGURATION SUGAR DADDIMT
//  Modifie ce fichier pour ouvrir/fermer les commandes
// ============================================================

const CONFIG = {

  // --- VENTE ---
  // Mets true pour ouvrir les commandes, false pour les fermer
  saleOpen: true,

  // --- LIEN GOOGLE FORM ---
  // Colle ici ton lien Google Form quand tu ouvres une vente
  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSffTpsWJfgvQ1f695YdwSNXsw9rwDs_8c6_hc1JE6I09SsJew/viewform?usp=dialog",

  // --- DETAILS DE LA VENTE ---
  // Chaque texte existe dans les 5 langues (fr, en, it, es, de).
  // Si tu mets juste un texte simple ("..."), il sera affiché dans toutes les langues.

  // Titre affiché sur le site quand la vente est ouverte
  saleTitle: {
    fr: "Commandes ouvertes !",
    en: "Orders are open!",
    it: "Ordini aperti!",
    es: "¡Pedidos abiertos!",
    de: "Bestellungen geöffnet!",
  },

  // Description de la vente en cours
  saleDescription: {
    fr: "Une nouvelle fournée de tiramisu maison vous attend. Passez votre commande avant la date limite !",
    en: "A new batch of homemade tiramisu is waiting for you. Place your order before the deadline!",
    it: "Una nuova infornata di tiramisù fatto in casa ti aspetta. Effettua il tuo ordine prima della scadenza!",
    es: "Una nueva hornada de tiramisú casero te espera. ¡Haz tu pedido antes de la fecha límite!",
    de: "Eine neue Ladung hausgemachtes Tiramisu wartet auf dich. Bestelle vor Ablauf der Frist!",
  },

  // Date limite de commande (texte libre, ex: "20 mai 2026 à 23h59")
  // Peut aussi être traduite : { fr: "20 mai", en: "May 20", ... }
  saleDeadline: {
    fr: "mardi 6 octobre 11h",
    en: "Tuesday 6 October, 11am",
    it: "martedì 6 ottobre ore 11",
    es: "martes 6 de octubre a las 11h",
    de: "Dienstag, 6. Oktober, 11 Uhr",
  },

  // --- INFOS CONTACT (optionnel) ---
  contactEmail: "",
  instagramLink: "",
};
