/**
 * Repeats a string for a specified amount of times.
 *
 * @param {string} string The string to repeat
 * @param {number} repetitions The number of times the string has to be repeated.
 * It's value is an integer between 0 and +∞, where 0 is included and +∞ is excluded.
 *
 * @throws {RangeError} If the number of repetitions passed is negative or +∞
 *
 * @returns {string} The string repeated the amount of times specified
 */
export function repeatify(string, repetitions) {
   if (repetitions < 0 || repetitions === Infinity) {
      throw new RangeError('Invalid repetitions number');
   }

   const cache = new Map();

   function repeat(string, repetitions) {
      if (repetitions === 0) {
         return '';
      }

      const log = Math.floor(Math.log2(repetitions));
      let result;

      if (cache.has(log)) {
         result = cache.get(log);
      } else {
         result = string;

         for (let i = 1; i <= log; i++) {
            result += result;
            cache.set(i, result);
         }
      }

      const repetitionsProcessed = Math.pow(2, log);
      const repetitionsLeft = repetitions - repetitionsProcessed;

      return result + repeat(string, repetitionsLeft);
   }

   return repeat(string, repetitions);
}