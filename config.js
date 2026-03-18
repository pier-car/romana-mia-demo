/**
 * ============================================================
 *  CONFIGURAZIONE SITO — Atelier Gioberti
 *  Modifica solo questo file per adattare il sito a un nuovo cliente.
 * ============================================================
 */
window.SITO = {

  // --- IDENTITÀ AZIENDA ---
  nomeAzienda:      "Atelier Gioberti",
  slogan:           "Eccellenza Artigiana dal 1987",
  descrizioneBreve: "Nella tradizione sartoriale torinese, ogni creazione è un gesto di cura verso chi la indossa. Passione per i dettagli, rispetto per i materiali e un'attenzione al cliente che dura nel tempo.",
  anniEsperienza:   "35+",
  numeroProgetti:   "2.000+",
  titolare:         "Chiara Sartori",

  // --- CONTATTI ---
  telefono:         "011 567 8901",          // Numero visualizzato
  telefonoHref:     "0115678901",            // Solo cifre, per href="tel:..."
  whatsapp:         "390115678901",          // Prefisso internazionale 39 + numero
  email:            "info@ateliergioberti.it",

  // --- SEDE ---
  indirizzo:        "Corso Galileo Ferraris 12",
  citta:            "Torino",
  cap:              "10121",
  provincia:        "TO",
  mappaQuery:       "Corso+Galileo+Ferraris+12+Torino",     // Per il link Google Maps
  mappaEmbed:       "https://maps.google.com/maps?q=Corso+Galileo+Ferraris,+12,+10121+Torino+TO&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // --- ORARI ---
  orariSettimana:   "Mar – Sab: 10:00 – 19:00",
  orariSabato:      "Lun: su appuntamento",

  // --- DATI LEGALI ---
  pIva:             "IT09876543210",
  annoFondazione:   "1987",
  annoCorrente:     new Date().getFullYear(),

  // --- SEO ---
  titoloPagineBase: "Atelier Gioberti — Eccellenza Artigiana a Torino Crocetta",
  localita:         "Torino",               // Usato nelle meta description

  // --- SOCIAL (lascia vuoto "" per nascondere il pulsante) ---
  facebook:         "",
  instagram:        "",

  // --- BRAND COLORS (modifica anche :root in style.css) ---
  // coloreAccento:  "#B8973A",  // Oro Antico — cambia in style.css nella sezione :root
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

    // Popola href con template tipo "https://wa.me/{whatsapp}"
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
        "@type": "ClothingStore",
        "name": window.SITO.nomeAzienda,
        "description": window.SITO.descrizioneBreve,
        "telephone": window.SITO.telefono,
        "email": window.SITO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": window.SITO.indirizzo,
          "addressLocality": window.SITO.citta,
          "postalCode": window.SITO.cap,
          "addressRegion": window.SITO.provincia,
          "addressCountry": "IT"
        },
        "openingHours": ["Tu-Sa 10:00-19:00"],
        "foundingDate": window.SITO.annoFondazione
      };
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    }
  });
})();
