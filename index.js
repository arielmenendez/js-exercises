// Multiply 2 numbers without using the multiplication symbol

const multiply = (a, b) => {
  let result = 0;
  const positive = Math.abs(b) == b;
  for (i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a;
  }

  return result;
};

const a = multiply(50, 50);
console.log(a);

// Get the largest number in an array by iterating through the array only once

const getBiggest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el));
const b = getBiggest([50, -1500, 1000, 0, 1, 54]);
console.log(b);

// By iterating through an array only once, write a function that removes undefined, false, zeros, and null values

const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);

const c = clean([1, false, true, undefined, null, 0, 2, 3]);
console.log(c);

// Write a function that flattens arrays one level deep

const arr = [[1, 2], [[3, 4]], [1, []]];
// [1, 2, [3, 4], 1, []]

const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
const d = flatten(arr);
console.log(d);

// Write a function that counts the number of times a word is repeated

const repeated = (str) => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(' ');
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  );
};

const e = repeated('this is a repeated word test this is a a');
console.log(e);

// Check if a string is a palindrome

const isPalindrome = (str) => {
  str = str.replace(/\s/g, '');
  const lowered = str.toLowerCase();
  const splitted = lowered.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return lowered == joined;
};

const f = isPalindrome('Ana');
console.log(f);

// Write a function that generates all permutations given a list of numbers

const getPermutations = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      const newPermutations = [];
      acc.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
          const newPerm = [...perm.slice(0, i), curr, ...perm.slice(i)];
          newPermutations.push(newPerm);
        }
      });
      return newPermutations;
    },
    [[]]
  );
};

const numbers = [1, 2, 3];
const g = getPermutations(numbers);
console.log(g);

// Write a function that searches for a string within another string

const searchSubstring = (str, substr) => {
  const lowerStr = str.toLowerCase();
  const lowerSubstr = substr.toLowerCase();

  return lowerStr.includes(lowerSubstr);
};

const str = 'This is my example string!';
const substr = 'my';
const h = searchSubstring(str, substr);
console.log(h);
