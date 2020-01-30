// Nel portale di Quiz, sono presenti degli Easter Egg, degli scherzi
// nascosti dagli sviluppatori per rendere l'esperienza più divertente.
// Durante gli esercizi di testo libero, in caso l'utente inserisca una parola
// palindroma, uscirà un messaggio a schermo per comunicarglielo.
// Le parole palindrome sono quelle che lette da sinistra a destra, o viceversa,
// risultano uguali (es. anna)

// Si realizzi un metodo che verifica che la stringa in ingresso, come unico parametro
// sia palindroma, e torna true in caso positivo, altrimenti false.

var validate = function(text) {
    var i;
    for(i=0; i<text.length; i++)
    {
        console.log(text[i],text[text.length-1-i] )
        if (text[i] != text[text.length-1-i]){
            return false
        }
    }
    return true
}

validate('anna');

module.exports = validate;
