var assert = require('assert');
var validate = require('../src/index.js');

describe('Test', function() {
  describe('palindrome', function() {
    it('è palidroma', function() { 
        var result = validate('anna');
        assert.equal(result, true);
    });
    it('non è palindroma', function() {
      var result = validate('casa');
      assert.equal(result, false);
  });
  });
});
