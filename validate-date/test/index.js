var assert = require('assert');
var validate = require('../src/index.js');

describe('Test', function() {
  describe('validate-date', function() {
    // Suggerimento: realizzare un 'it' per ognuna delle validazioni richieste nella consegna
    it('è lunga esattamente 6 caratteri', function() {
        var result = validate('001666');
        assert.equal(result, true);
    });
    it('non è lunga esattamente 6 caratteri', function() {
      var result = validate('00116666');
      assert.equal(result, false);
    });
    it('i primi due numeri sono compresi tra 1 e 31', function() {
      var result = validate('230000');
      assert.equal(result, true);
    });
  });
});
