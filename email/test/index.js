var assert = require('assert');
var validate = require('../src/index.js');

describe('Test', function() {
  describe('email', function() {

    if(validate('ciao','ciao'))
    {
    it('le stringhe devono essere uguali', function() 
    {
        // esempio, il test controlla la funzioni torni undefined, perchè non è
        // stata implementata, e non ritorna nulla
        var result = validate('ciao', 'ciao');

        assert.equal(result, true);
    });
  }
  else
    
      assert.equal(result, false);
  });


  });

