// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1: Using Array.reverse()
  //   const reversed = str.split('').reverse().join('');

  // Solution 2: Loop and add character at start of string
  //   let reversed = '';
  //   for (let c of str) {
  //     reversed = c + reversed;
  //   }

  // OR

  //   let reversed = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }

  // Solution 3: Using Array.reduce() helper
  //   debugger; // call using 'node inspect filename'
  // once inside deebugger, type 'continue' to continue to next debugger break, or 'repl' to enter repl mode to inspect variables
  const reversed = str
    .split('')
    .reduce((reversed, character) => character + reversed, '');

  return reversed;
}

console.log(reverse('Hello World!'));

module.exports = reverse;
