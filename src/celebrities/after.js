/**
 * Finds all celebrities in a given set of people.
 *
 * @param {string[]} people The set of people in which the celebrities
 * will be searched
 * @param {Function} likes The function that verifies if a person
 * likes another
 *
 * @returns {string[]} The set of all the celebrities found
 */
export function findCelebrities(people, likes) {
   if (people.length < 2) {
      return people.slice();
   }

   let candidate = 0;

   for (let i = 1; i < people.length; i++) {
      if (likes(people[candidate], people[i])) {
         candidate = i;
      } else if (!likes(people[i], people[candidate])) {
         candidate = ++i;
      }
   }

   if (candidate === people.length) {
      return [];
   }

   for (let i = 0; i < candidate; i++) {
      if (likes(people[candidate], people[i]) || !likes(people[i], people[candidate])) {
         return [];
      }
   }

   return people.slice(candidate, candidate + 1);
}