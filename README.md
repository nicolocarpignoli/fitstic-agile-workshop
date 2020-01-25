# Istruzioni

## Prima di iniziare

* Installare nodejs sulla propria macchina (se non è installato: per verificare, lanciare `node -v`)
* Lanciare `npm install mocha -g`

## Avviare l'applicazione

`node <nome-task>/src/index.js`

## Lanciare i test

`mocha <nome-task/test/index.js`

Come testare: ogni 'it' rappresenta un caso di test, un caso d'uso.

Esempio:
* `it('dovrebbe fare correttamente login con dati corretti')`
* `it('dovrebbe dare errore inserendo dati sbagliati')`

Negli 'it' va chiamato il metodo con dei parametri in ingresso, che cambiano da 'it' a 'it'.
Per verificare che il metodo funzioni, vanno fatte delle 'asserzioni'.
La documentazione di riferimento si trova qua: https://mochajs.org/

## Debuggare

Utilizzare nel codice `console.log('stringa', <variabile>)` per vedere lo stato di alcune variabili
e trovare eventuali problemi mentre si sviluppa.



