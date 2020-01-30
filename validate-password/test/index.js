var assert = require('assert');
var validate = require('../src/index.js');

describe('Test', function() {
  describe('validate-password', function() {
    // Suggerimento: realizzare un 'it' per ognuna delle validazioni richieste nella consegna


  it('ha 5 caratteri', function() {
    // esempio, il test controlla la funzioni torni undefined, perchè non è
    // stata implementata, e non ritorna nulla
    
    var result = validate('!Iiii');
    assert.equal(false, result);
});

it('non ha alcun carattere speciale', function() {
  // esempio, il test controlla la funzioni torni undefined, perchè non è
  // stata implementata, e non ritorna nulla
  
  var result = validate('123456M');
  assert.equal(false, result);
});

it('no password == password', function() {
  // esempio, il test controlla la funzioni torni undefined, perchè non è
  // stata implementata, e non ritorna nulla
  
  var result = validate('!Password');
  assert.equal(false, result);
});

  });
});
