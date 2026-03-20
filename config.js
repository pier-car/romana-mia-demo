/**
 * ============================================================
 *  CONFIGURAZIONE SITO — Romana Mia, Pizza al Taglio Gourmet
 *  ============================================================
 *  👋 Ciao! Questo è il file di configurazione del tuo sito.
 *  Puoi modificare qui tutti i dati senza toccare le pagine HTML.
 *
 *  Come si usa:
 *  - Modifica i valori tra virgolette
 *  - Salva il file
 *  - Carica il file aggiornato sul server
 * ============================================================
 */
window.SITO = {

  // --- IDENTITÀ AZIENDA ---
  nomeAzienda:      "Romana Mia",
  slogan:           "La vera pizza romana in teglia a Torino",
  descrizioneBreve: "Dal 2018 portiamo la vera pizza romana in teglia nel cuore di Torino. Impasto ad alta idratazione, ingredienti DOP e IGP, scrocchiarella come da tradizione.",
  anniEsperienza:   "6+",
  annoFondazione:   "2018",
  annoCorrente:     new Date().getFullYear(),

  // --- CONTATTI ---
  telefono:         "011 198 6630",        // Numero visualizzato in pagina
  telefonoHref:     "0111986630",          // Solo cifre, usato per href="tel:..."
  whatsapp:         "393476147360",        // Prefisso internazionale 39 + numero senza zero iniziale
  email:            "info@romanamia.it",

  // --- SEDE ---
  indirizzo:        "Via Mercanti 3/B",
  citta:            "Torino",
  cap:              "10122",
  provincia:        "TO",
  mappaQuery:       "Via+Mercanti,+3B,+10122+Torino+TO",
  mappaEmbed:       "https://maps.google.com/maps?q=Via+Mercanti,+3B,+10122+Torino+TO&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // --- RECENSIONI GOOGLE ---
  // Link diretto alla scheda Google Maps per lasciare una recensione
  googleMapsReviewLink: "https://www.google.com/maps/place/Romana+Mia+Pizza+Al+Taglio+Gourmet/@45.0700,7.6858,17z",

  // --- WHATSAPP ---
  // Messaggio precompilato che il cliente troverà già scritto su WhatsApp
  whatsappMessaggio:        "Ciao! Vorrei ordinare delle pizze 🍕",
  whatsappMessaggioEncoded: "Ciao!%20Vorrei%20ordinare%20delle%20pizze%20%F0%9F%8D%95",

  // --- ORARI ---
  // ✏️ Modifica qui gli orari di apertura
  orariSettimana:   "Lun–Dom: 11:00–15:00 / 17:00–21:30",
  orariSabato:      "Aperto tutti i giorni",

  // --- DATI LEGALI ---
  pIva:             "IT10123456789",

  // --- SEO ---
  titoloPagineBase: "Romana Mia — Pizza al Taglio Gourmet a Torino",
  localita:         "Torino",

  // --- SOCIAL (lascia vuoto "" per nascondere il pulsante) ---
  facebook:         "",
  instagram:        "https://www.instagram.com/pizzeriaromanamia/",

  // ============================================================
  //  📸 INSTAGRAM — Come aggiungere foto dal bancone:
  //
  //  Inserisci qui gli URL diretti delle immagini Instagram.
  //  Il sito popolerà automaticamente la griglia "Direttamente
  //  dal Bancone" con queste foto.
  //
  //  Esempio:
  //  "https://www.instagram.com/p/XXXXX/media/?size=l",
  // ============================================================
  instagramImages: [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=700&auto=format&fit=crop",
  ],

  // ============================================================
  //  🍕 MENU — Come aggiungere o modificare una pizza:
  //
  //  1. Trova la categoria giusta (Le Classiche, Le Gourmet, ecc.)
  //  2. Aggiungi un oggetto { nome, ingredienti, prezzo } nell'array "pizze"
  //  3. Salva e carica il file
  //
  //  Esempio:
  //  { nome: "Nuova Pizza", ingredienti: "Ingrediente 1, Ingrediente 2", prezzo: "4,00 €/hg" },
  // ============================================================
  menu: [
    {
      categoria: "Le Classiche 🍅",
      descrizioneCategoria: "Le ricette della tradizione romana, fatte come si deve",
      pizze: [
        { nome: "Margherita Scrocchiarella", ingredienti: "Pomodoro San Marzano DOP, Fior di Latte, Basilico", prezzo: "3,50 €/hg" },
        { nome: "Rossa al Basilico",         ingredienti: "Pomodoro San Marzano DOP, Origano, Olio EVO",        prezzo: "2,50 €/hg" },
        { nome: "Bianca all'Olio",           ingredienti: "Olio EVO, Sale grosso marino, Rosmarino fresco",     prezzo: "2,50 €/hg" },
        { nome: "Cacio e Pepe",              ingredienti: "Pecorino Romano DOP, Pepe nero macinato, Fior di latte", prezzo: "3,50 €/hg" },
        { nome: "Patate e Rosmarino",        ingredienti: "Patate, Rosmarino, Olio EVO, Sale",                  prezzo: "3,00 €/hg" },
      ]
    },
    {
      categoria: "Le Gourmet ⭐",
      descrizioneCategoria: "Ingredienti selezionati, abbinamenti ricercati",
      pizze: [
        { nome: "Burrata e Pomodorini",      ingredienti: "Pomodorini confit, Burrata fresca, Basilico, Origano",                        prezzo: "4,50 €/hg" },
        { nome: "Mortadella e Pistacchio",   ingredienti: "Mortadella di Bologna IGP, Crema di pistacchio, Fior di latte",               prezzo: "4,50 €/hg" },
        { nome: "Salmone e Rucola",          ingredienti: "Salmone norvegese affumicato, Rucola, Scamorza affumicata, Limone",           prezzo: "5,00 €/hg" },
        { nome: "Nduja e Stracciatella",     ingredienti: "'Nduja di Spilinga, Stracciatella pugliese, Pomodoro, Basilico",              prezzo: "4,50 €/hg" },
        { nome: "Fungi Porcini e Tartufo",   ingredienti: "Porcini trifolati, Crema di tartufo, Fior di latte, Prezzemolo",             prezzo: "5,50 €/hg" },
      ]
    },
    {
      categoria: "Le Stagionali 🌿",
      descrizioneCategoria: "In base alla disponibilità del mercato — chiedi al bancone!",
      pizze: [
        { nome: "Del Momento",               ingredienti: "Chiedi al bancone per la proposta del giorno",                                prezzo: "variabile" },
        { nome: "Stagionale dello Chef",     ingredienti: "Ingredienti freschi di stagione selezionati ogni settimana",                  prezzo: "variabile" },
      ]
    }
  ],

  // ============================================================
  //  ⭐ RECENSIONI — Come aggiungere una recensione:
  //
  //  1. Aggiungi un oggetto nell'array qui sotto
  //  2. stelle: numero da 1 a 5
  //  3. data: stringa libera (es. "2 settimane fa")
  //
  //  Esempio:
  //  { nome: "Mario R.", stelle: 5, testo: "Fantastica!", data: "1 giorno fa" },
  // ============================================================
  recensioni: [
    { nome: "Marco T.",     stelle: 5, testo: "Pizza fantastica! La scrocchiarella è croccante al punto giusto e gli ingredienti sono di altissima qualità. La Mortadella e Pistacchio è una bomba di gusto!", data: "2 mesi fa" },
    { nome: "Giulia R.",    stelle: 5, testo: "Finalmente una vera pizza romana a Torino! Il personale è gentilissimo e l'atmosfera è accogliente. Tornerò sicuramente.",                                     data: "3 settimane fa" },
    { nome: "Alessandro B.", stelle: 5, testo: "La migliore pizza al taglio che abbia mai mangiato in città. La bianca all'olio è semplicemente perfetta. Prezzi onestissimi.",                               data: "1 mese fa" },
    { nome: "Sofia M.",     stelle: 5, testo: "Impasto leggero e digeribile, condimenti freschi e abbondanti. Provate la Burrata e Pomodorini — è paradisiaca!",                                             data: "1 settimana fa" },
    { nome: "Luca P.",      stelle: 5, testo: "Locale carino nel centro di Torino, vicino al Mercato. La Nduja e Stracciatella è la mia preferita! Staff super disponibile.",                                data: "5 giorni fa" },
    { nome: "Elena C.",     stelle: 4, testo: "Ottima pizza al taglio gourmet! Un po' di fila all'ora di pranzo ma ne vale assolutamente la pena. La Cacio e Pepe è squisita.",                              data: "2 settimane fa" },
  ],
};

/**
 * Popola automaticamente tutti gli elementi [data-config="chiave"]
 * e aggiorna gli href tramite [data-config-href="template{chiave}"].
 */
(function initConfig() {
  document.addEventListener('DOMContentLoaded', function () {

    // Popola testo degli elementi con data-config
    document.querySelectorAll('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config');
      if (window.SITO[key] !== undefined) {
        el.textContent = window.SITO[key];
      }
    });

    // Popola href con template tipo "https://wa.me/{whatsapp}?text={whatsappMessaggioEncoded}"
    document.querySelectorAll('[data-config-href]').forEach(function (el) {
      var tpl = el.getAttribute('data-config-href');
      el.href = tpl.replace(/\{(\w+)\}/g, function (_, k) {
        return window.SITO[k] !== undefined ? window.SITO[k] : '';
      });
    });

    // Anno corrente
    document.querySelectorAll('[data-anno]').forEach(function (el) {
      el.textContent = window.SITO.annoCorrente;
    });

    // Iframe mappa: carica solo se l'utente ha accettato i cookie
    window.loadConsentedMap = function () {
      var consent = localStorage.getItem('cookieConsent');
      var placeholder = document.getElementById('map-placeholder');
      var iframe = document.getElementById('map-iframe');
      if (consent === 'accepted') {
        if (iframe && !iframe.src) {
          iframe.src = window.SITO.mappaEmbed;
        }
        if (placeholder) { placeholder.style.display = 'none'; }
        if (iframe) { iframe.style.display = 'block'; }
      } else {
        if (placeholder) { placeholder.style.display = 'flex'; }
        if (iframe) { iframe.style.display = 'none'; }
      }
    };
    window.loadConsentedMap();

    // Schema.org JSON-LD aggiornato dinamicamente
    var schemaEl = document.getElementById('schema-org');
    if (schemaEl) {
      var schema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": window.SITO.nomeAzienda,
        "description": window.SITO.descrizioneBreve,
        "telephone": window.SITO.telefono,
        "email": window.SITO.email,
        "servesCuisine": "Pizza",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": window.SITO.indirizzo,
          "addressLocality": window.SITO.citta,
          "postalCode": window.SITO.cap,
          "addressRegion": window.SITO.provincia,
          "addressCountry": "IT"
        },
        "openingHours": ["Mo-Su 11:00-15:00", "Mo-Su 17:00-21:30"],
        "foundingDate": window.SITO.annoFondazione,
        "url": "https://romanamia.it",
        "sameAs": [window.SITO.instagram]
      };
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    }

    // Inizializza menu, recensioni e instagram se i container esistono
    initMenu();
    initRecensioni();
    initInstagram();
  });
})();

/**
 * initMenu() — Genera dinamicamente il menu pizza a partire da SITO.menu
 * Il menu viene iniettato in #menu-grid
 *
 * ✏️ Per modificare il menu: aggiorna l'array SITO.menu qui sopra
 */
function initMenu() {
  var grid = document.getElementById('menu-grid');
  if (!grid || !window.SITO.menu) return;

  var html = '';
  window.SITO.menu.forEach(function (categoria) {
    html += '<div class="menu-category-card animate-on-scroll">';
    html += '<div class="menu-category-header">';
    html += '<h3 class="menu-category-title">' + categoria.categoria + '</h3>';
    html += '<p class="menu-category-desc">' + categoria.descrizioneCategoria + '</p>';
    html += '</div>';
    html += '<ul class="menu-pizza-list">';
    categoria.pizze.forEach(function (pizza) {
      html += '<li class="menu-pizza-item">';
      html += '<div class="menu-pizza-info">';
      html += '<span class="menu-pizza-nome">' + pizza.nome + '</span>';
      html += '<span class="menu-pizza-ingredienti">' + pizza.ingredienti + '</span>';
      html += '</div>';
      html += '<span class="menu-pizza-prezzo">' + pizza.prezzo + '</span>';
      html += '</li>';
    });
    html += '</ul>';
    html += '</div>';
  });

  grid.innerHTML = html;

  // Rilancia animate-on-scroll per i nuovi elementi
  setTimeout(function () {
    document.querySelectorAll('#menu-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);
}

/**
 * initRecensioni() — Genera dinamicamente le recensioni a partire da SITO.recensioni
 * Le recensioni vengono iniettate in #recensioni-grid
 *
 * ✏️ Per aggiungere una recensione: aggiungi un oggetto in SITO.recensioni qui sopra
 */
function initRecensioni() {
  var grid = document.getElementById('recensioni-grid');
  if (!grid || !window.SITO.recensioni) return;

  var html = '';
  window.SITO.recensioni.forEach(function (rec) {
    // Genera le stelle
    var stelle = '';
    for (var i = 0; i < 5; i++) {
      stelle += i < rec.stelle ? '<span class="star filled">★</span>' : '<span class="star">★</span>';
    }

    // Iniziale del nome per l'avatar
    var iniziale = rec.nome.charAt(0).toUpperCase();

    html += '<div class="recensione-card animate-on-scroll">';
    html += '<div class="recensione-header">';
    html += '<div class="recensione-avatar">' + iniziale + '</div>';
    html += '<div class="recensione-meta">';
    html += '<span class="recensione-nome">' + rec.nome + '</span>';
    html += '<span class="recensione-data">' + rec.data + '</span>';
    html += '</div>';
    html += '<div class="google-icon">G</div>';
    html += '</div>';
    html += '<div class="recensione-stelle">' + stelle + '</div>';
    html += '<p class="recensione-testo">' + rec.testo + '</p>';
    html += '</div>';
  });

  grid.innerHTML = html;

  // Rilancia animate-on-scroll per i nuovi elementi
  setTimeout(function () {
    document.querySelectorAll('#recensioni-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 150);
}

/**
 * initInstagram() — Genera la griglia "Direttamente dal Bancone"
 * Le immagini vengono iniettate in #instagram-grid
 *
 * ✏️ Per aggiornare le foto: modifica l'array SITO.instagramImages qui sopra
 */
function initInstagram() {
  var grid = document.getElementById('instagram-grid');
  if (!grid || !window.SITO.instagramImages || !window.SITO.instagramImages.length) return;

  var instagramUrl = window.SITO.instagram || 'https://www.instagram.com/pizzeriaromanamia/';

  // Sanitize a URL: only allow http(s) URLs to prevent javascript: injection
  function safeUrl(url) {
    if (typeof url !== 'string') return '';
    var trimmed = url.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : '';
  }

  var html = '';
  window.SITO.instagramImages.forEach(function (url, i) {
    var safe = safeUrl(url);
    if (!safe) return;
    html += '<a href="' + safeUrl(instagramUrl) + '" target="_blank" rel="noopener" class="instagram-item animate-on-scroll">';
    html += '<img src="' + safe + '" alt="Romana Mia — foto dal bancone ' + (i + 1) + '" loading="lazy">';
    html += '<div class="instagram-item-overlay"><i class="fa-brands fa-instagram"></i></div>';
    html += '</a>';
  });

  grid.innerHTML = html;

  // Rilancia animate-on-scroll per i nuovi elementi
  setTimeout(function () {
    document.querySelectorAll('#instagram-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);
}
