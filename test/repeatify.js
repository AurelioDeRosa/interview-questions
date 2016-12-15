import { assert } from 'chai';
import sinon from 'sinon';
import { repeatify } from '../src/repeatify/after';

describe('repeatify()', function() {
   it('should throw an exception if the number of repetitions is invalid', function() {
      assert.throws(repeatify.bind(null, '*', -1), RangeError);
      assert.throws(repeatify.bind(null, '*', Infinity), RangeError);
   });

   it('should repeat the string when valid inputs are passed', function() {
      assert.strictEqual(repeatify('*', 0).length, 0, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 1).length, 1, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 16).length, 16, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 102).length, 102, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 2731).length, 2731, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 72910).length, 72910, 'The returned value is correct');
      assert.strictEqual(repeatify('*', 839302).length, 839302, 'The returned value is correct');
   });
});