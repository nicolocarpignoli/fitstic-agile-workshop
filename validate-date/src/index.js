// Realizzare una funzione che data in ingresso una stringa, ovvero la data di nascita
// Controlli che:
//
// la data sia nel formato ggMMYYYY
// il metodo deve ritornare true se tutte le validazioni sopracitate,
// altrimenti false.


var validate = function(birthDate) {
    if (birthDate.length == 6)
    {
        return true;
    }
    else
    {
        return false;
    }
    
    
};


module.exports = validate;