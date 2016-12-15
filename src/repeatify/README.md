# Exercise

Implement a `repeatify` function that accepts two parameters, a string and a number,
which will be referred as `string` and `repetitions`. The function returns a string
made of `string` repeated `repetitions` amount of times. The value of `repetitions`
is an integer between 0 and +∞, where 0 is included and +∞ is excluded. The function
throws a `RangeError` if the number passed is negative or +∞.

## Examples

### Example 1 - Positive value

Given the call:

`repeatify('*', 3)`

the function should return:

`'***'`

### Example 2 - Zero

Given the call:

`repeatify('*', 0)`

the function should return:

`''`

### Example 3 - Negative value

Given the call:

`repeatify('*', -2)`

the function should throw a `RangeError`.

## Article

The solution for this exercise is discussed in my article
"[From JavaScript developer to JavaScript engineer: Re-imlementing ECMAScript 2015's String.prototype.repeat() method](https://www.audero.it/blog/2016/12/16/from-javascript-developer-to-javascript-engineer-re-implementing-ecmascript-2015s-string-prototype-repeat-method/)"