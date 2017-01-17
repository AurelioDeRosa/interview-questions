# Exercise

A person is considered a celebrity is he/she likes nobody and everybody
likes him/her. Given a set of people and a function `likes(i, j)`,
which takes the names of two people as parameters and returns `true`
if `i` likes `j` and `false` otherwise, write a `findCelebrities()`
function to return all celebrities in the given set.

## Examples

### Example 1 - No people

Given an empty set of people:

`const people = [];`

regardless of the values returned by the `likes()` function,
`findCelebrities()` should return:

`[]`

### Example 2 - One person

Given a set with one person:

`const people = ['Mark'];`

regardless of the values returned by the `likes()` function,
`findCelebrities()` should return a copy of the given set:

`['Mark']`

### Example 3 - Many people

Given a set with many people:

```js
const people = [
   'Mark',
   'David',
   'John',
   'Aurelio',
   'Anna',
   'Peter'
];
```

and the following `likes()` function:

```js
function likes(i, j) {
   return i !== 'Peter';
}
```

`findCelebrities()` should return:

`['Peter']`

## Article

The solution for this exercise is discussed in my article
"[From JavaScript developer to JavaScript engineer: find all celebrities in a set of people](https://www.audero.it/blog/2017/01/18/from-javascript-developer-to-javascript-engineer-find-all-celebrities-in-a-set-of-people)"