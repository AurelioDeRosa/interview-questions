import { assert } from 'chai';
import sinon from 'sinon';
import { findCelebrities } from '../src/celebrities/after';

describe('findCelebrities()', function() {
   context('with zero people', function() {
      const people = [];

      it('should return no celebrities', function() {
         function likes(i, j) {
            return true;
         }

         assert.sameMembers(findCelebrities(people, likes), []);
      });
   });

   context('with one person', function() {
      const people = ['Mark'];

      it('should return the only one person', function() {
         function likes(i, j) {
            return true;
         }

         assert.sameMembers(findCelebrities(people, likes), ['Mark']);
      });
   });

   context('with many people', function() {
      const people = [
         'Mark',
         'David',
         'John',
         'Aurelio',
         'Anna',
         'Peter'
      ];

      it('should return no celebrities if everybody likes everybody', function() {
         function likes(i, j) {
            return true;
         }

         assert.sameMembers(findCelebrities(people, likes), []);
      });

      it('should return no celebrities if everybody dislikes everybody', function() {
         function likes(i, j) {
            return false;
         }

         assert.sameMembers(findCelebrities(people, likes), []);
      });

      it('should return a celebrity if everybody likes one person and the latter dislikes everybody', function() {
         function likes(i, j) {
            return i !== 'John' && j !== 'Mark';
         }

         assert.sameMembers(findCelebrities(people, likes), ['John']);
      });

      it('should return a celebrity if everybody likes everybody and one person dislikes everybody', function() {
         function likes(i, j) {
            return i !== 'Peter';
         }

         assert.sameMembers(findCelebrities(people, likes), ['Peter']);
      });

      it('should return no celebrities if everybody is not liked by everybody', function() {
         function likes(i, j) {
            const likesMap = new Map([
               ['Mark', ['David', 'John', 'Aurelio', 'Anna', 'Peter']],
               ['David', ['Mark', 'Anna', 'Peter']],
               ['John', ['Mark', 'David', 'Aurelio']],
               ['Aurelio', ['Peter']],
               ['Anna', ['David', 'Aurelio']],
               ['Peter', ['Aurelio']]
            ]);

            return likesMap.get(i).includes(j);
         }

         assert.sameMembers(findCelebrities(people, likes), []);
      });
   });
});