// Realizzare una funzione che data in ingresso la pass
// Controlli che:

// la password abbia almeno:
// 6 caratteri
// un carattere fra i seguenti !"£$%%&/()=?^*°§
// una lettera maiuscola
// non contenga la parola password
// non contenga lo username

// il metodo deve ritornare true se passa la validazione sopracitata,
// altrimenti false.


var validate = function(password) {
    if (password.length < 6) {
        return false;
    }   
    
};


// validate('sss');

module.exports = validate;


