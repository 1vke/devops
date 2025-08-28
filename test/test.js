var main = require('../index');
var assert = require('assert');

describe('Regular factorial value', function() {
    it('should return 24 for factorial(4)', function() {
        assert.strictEqual(main.factorial(4), 24);
    });
    it('should return 1 for factorial(1)', function() {
        assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Irregular factorial value', function() {
    it('should throw error when number is negative', function() {
        assert.strictEqual(main.factorial(-1), undefined);
    });
});