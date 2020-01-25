// Nel form di iscrizione, dobbiamo validare la mail inserita.
// Vi sono già due campi per inserire e re-inserire la mail.

// Realizzare un metodo che dato in ingresso entrambe le mail, come stringhe,
// controlla che siano identiche e in caso torna true, altrimenti torna un errore - ovvero una stringa.

// L'errore da tornare dipende dal numero di caratteri sbagliati.
// Tornare un messaggio di questo tipo:

// Se gli errori sono più del 30% della lunghezza della mail stessa: 'La mail inserita è diversa. Riprovare.'
// Se gli errori sono tra il 15 e il 30% della lunghezza della mail stessa: 'Controlla la mail, alcuni caratteri inseriti non sono gli stessi.'
// Se gli errori sono meno del 15% della lunghezza della mail stessa: 'La mail risulta leggermente diversa. Controllare.'

var validate = function(email, email2) {

};

module.exports = validate;
