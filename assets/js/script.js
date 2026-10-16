/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
   {
      nome: 'Monitor',
      categoria: 'Periferiche',
      prezzo: 99.99,
      rating: 5,
      immagine: 'Monitor.png',
      disponibile: 'true',
   },
   {
      nome: 'Stampante',
      categoria: 'Periferiche',
      prezzo: 299.99,
      rating: 4,
      immagine: 'Stampante.png',
      disponibile: 'false',
   },
   {
      nome: 'Mouse',
      categoria: 'Periferiche',
      prezzo: 19.99,
      rating: 2,
      immagine: 'Mouse.png',
      disponibile: 'true',
   },
   {
      nome: 'Tastiera',
      categoria: 'Periferiche',
      prezzo: 49.99,
      rating: 3,
      immagine: 'Tastiera.png',
      disponibile: 'true',
   },
   {
      nome: 'RAM',
      categoria: 'Hardware',
      prezzo: 79.99,
      rating: 5,
      immagine: 'RAM.png',
      disponibile: 'true',
   },
   {
      nome: 'Scheda video',
      categoria: 'Hardware',
      prezzo: 149.99,
      rating: 4,
      immagine: 'Scheda-video.png',
      disponibile: 'true',
   },
   {
      nome: 'Ventole',
      categoria: 'Hardware',
      prezzo: 59.99,
      rating: 2,
      immagine: 'Ventole.png',
      disponibile: 'false',
   },
   {
      nome: 'Tablet',
      categoria: 'Dispositivi',
      prezzo: 599.99,
      rating: 4,
      immagine: 'Tablet.png',
      disponibile: 'true',
   },
   {
      nome: 'Cellulare',
      categoria: 'Dispositivi',
      prezzo: 899.99,
      rating: 4,
      immagine: 'Cellulare.png',
      disponibile: 'true',
   },
   {
      nome: 'Smartwatch',
      categoria: 'Dispositivi',
      prezzo: 119.99,
      rating: 2,
      immagine: 'Smartwatch.png',
      disponibile: 'true',
   },
   {
      nome: 'Playstaition',
      categoria: 'Console',
      prezzo: 379.99,
      rating: 5,
      immagine: 'Playstaition.png',
      disponibile: 'true',
   },
   {
      nome: 'Xbox',
      categoria: 'Console',
      prezzo: 224.99,
      rating: 3,
      immagine: 'Xbox.png',
      disponibile: 'true',
   },
]

console.table(prodotti);

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo = 0) {
   if (prezzo >= 0) {
      let stringa = String(prezzo.toFixed(2));
      return stringa = '€ ' + stringa.replace('.', ',');
   } else {
      return 'Numero inserito non valido';
   }
}
console.log('Monitor: ' + formattaPrezzo(150.00));

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating = 0) {
   let stelle = '';
   if (rating > 0 && rating <= 5) {
      for (let i = 0; i < rating; i++) {
         stelle += '★';
      }
      for (let i2 = 0; i2 < (5 - rating); i2++) {
         stelle += '☆';
      }
      return `${stelle}`;
   } else {
      return 'Numero inserito non valido';
   }
}
console.log('Monitor: rating 3 → "' + stelline(3) + '"');

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function scegliCategoria(nomeCategoria) {
   let listaCategoria = [];
   for (let i = 0; i < prodotti.length; i++) {
      if (nomeCategoria === prodotti[i].categoria) {
         listaCategoria.push(prodotti[i]);
      }
   }
   return listaCategoria;
}
console.table(scegliCategoria('Dispositivi'));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroProdotti() {
   let listaFiltrata = [];
   for (let i = 0; i < prodotti.length; i++) {
      if (prodotti[i].disponibile === 'true' && prodotti[i].rating >= 3) {
         listaFiltrata.push(prodotti[i]);
      }
   }
   return listaFiltrata;
}
console.table(filtroProdotti());

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function griglia(array = []) {
   let container = document.getElementById("griglia");
   let product = "";
   for (let i = 0; i < array.length; i++) {
      let costo = formattaPrezzo(array[i].prezzo);
      let stelle = stelline(array[i].rating);
      product = product +
         `<article class="products">
         <img src="https://placehold.co/350x320/EEEEEE/333333?text=${array[i].nome}" alt="${array[i].nome}"">
         <h4>${array[i].nome}</h4>
         <div class="rating">
            <p class="stars">${stelle}</p>
            <p class="vote"> (${array[i].rating})</p>
         </div>
         <div class="price-container">
            <p class="price">${costo}</p>
         </div>     
         <button type="button" onclick="contCarrello(this)" name="${array[i].nome}" class="acquisto">Aggiungi al carrello</button>
      </article>`;
   }
   container.innerHTML = product;
}
griglia(prodotti);


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 0;
function contCarrello(bottone) {
   const contAcquisti = document.querySelector(".cont");
   for (let i = 0; i < prodotti.length; i++) {
      if (bottone.name === prodotti[i].nome) {
         if (prodotti[i].disponibile === 'true') {
            c++;
            contAcquisti.innerText = `${c}`;
         } else {
            bottone.disabled = true;
            bottone.innerText = "Esaurito";
         }
         break;
      }
   }
}
/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
