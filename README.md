# Romana Mia — Sito Web Ufficiale 🍕

Sito web di **Romana Mia — Pizza al Taglio Gourmet**, Torino.  
Realizzato con HTML, CSS e JavaScript vanilla. Nessun framework, nessuna dipendenza pesante.

---

## 📁 Struttura File

```
romana-mia-demo/
├── config.js          ← ⭐ FILE PRINCIPALE: modifica qui menu, orari, contatti
├── style.css          ← Stile grafico (dark theme, Poppins)
├── index.html         ← Home page
├── servizi.html       ← Il Nostro Metodo
├── galleria.html      ← Galleria fotografica
├── contatti.html      ← Pagina contatti con form e mappa
├── grazie.html        ← Pagina di conferma dopo invio form
├── privacy.html       ← Privacy Policy
├── cookie.html        ← Cookie Policy
├── favicon.svg        ← Favicon del sito
└── images/            ← Immagini locali (se necessario)
```

---

## ✏️ Come Aggiornare il Menu

Apri `config.js` e cerca la sezione `menu`. Ogni categoria ha un array `pizze`.

**Per aggiungere una pizza:**

```javascript
// Nel file config.js, trova la categoria giusta e aggiungi:
{ nome: "La Tua Nuova Pizza", ingredienti: "Ingrediente 1, Ingrediente 2, Ingrediente 3", prezzo: "4,00 €/hg" },
```

**Per modificare il prezzo:**
```javascript
{ nome: "Margherita Scrocchiarella", ingredienti: "...", prezzo: "4,00 €/hg" },
//                                                               ↑ cambia questo
```

**Per aggiungere una categoria:**
```javascript
{
  categoria: "Le Speciali 🔥",
  descrizioneCategoria: "Solo nel weekend",
  pizze: [
    { nome: "Pizza Speciale", ingredienti: "...", prezzo: "5,00 €/hg" },
  ]
},
```

---

## ⭐ Come Aggiornare le Recensioni

Nel file `config.js`, cerca l'array `recensioni`:

```javascript
{ nome: "Mario R.", stelle: 5, testo: "Fantastica pizza!", data: "1 settimana fa" },
```

- `stelle`: da 1 a 5
- `data`: testo libero (es. "ieri", "2 settimane fa", "ottobre 2024")

---

## 🕐 Come Aggiornare Orari e Dati Aziendali

Tutto è in `config.js` nella sezione in cima al file:

```javascript
// Orari — modifica questi valori
orariSettimana: "Lun–Dom: 11:00–15:00 / 17:00–21:30",
orariSabato:    "Aperto tutti i giorni",

// Telefono
telefono:    "011 198 6630",
telefonoHref: "0111986630",   // solo cifre per href="tel:..."

// Indirizzo
indirizzo: "Via Mercanti 3/B",
citta:     "Torino",
```

---

## 🚀 Deploy

### Netlify (consigliato — gratuito)
1. Crea account su [netlify.com](https://netlify.com)
2. Trascina la cartella del sito nella dashboard Netlify
3. Il sito va online in 30 secondi

Il form di contatto funziona automaticamente con Netlify Forms (grazie all'attributo `data-netlify="true"`).

### GitHub Pages
1. Carica i file su un repository GitHub pubblico
2. Vai in Settings → Pages → Source: `main` branch
3. Il sito sarà disponibile su `username.github.io/repo-name`

### cPanel / Hosting tradizionale
1. Connettiti via FTP con FileZilla o simili
2. Carica tutti i file nella cartella `public_html`
3. Il sito è subito online

---

## 🔍 SEO e Google Search Console

1. **Verifica il sito**: inserisci il codice di verifica Google nella meta tag in ogni HTML:
   ```html
   <meta name="google-site-verification" content="IL_TUO_CODICE_QUI">
   ```

2. **URL canonico**: dopo il deploy, aggiorna il tag canonical in ogni pagina:
   ```html
   <link rel="canonical" href="https://www.romanamia.it/index.html">
   ```

3. **Schema.org**: il sito genera automaticamente il markup strutturato di tipo `Restaurant` tramite `config.js`. Google lo legge per i risultati arricchiti.

4. **Sitemap**: crea un file `sitemap.xml` con gli URL delle pagine principali e caricalo su Google Search Console.

---

## 📞 Supporto

Per assistenza tecnica sul sito: contatta chi ha realizzato il sito.  
Per aggiornare contenuti: modifica solo `config.js` come descritto sopra.
