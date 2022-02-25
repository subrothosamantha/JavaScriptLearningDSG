//flags
//g - global
//i - case insensitivity

let reg = /From/i;

let s = 'This regular expression I learned from code with harry';

//will return if present or null
let result = reg.exec(s);
// console.log(result.input);

//will return true of false
let result1 = reg.test(s);
// console.log(result1);

//match will return an array of result or null
let result3 = s.match(reg);
// console.log(result3);

//search() will search for a word

let result4 = s.search(reg);
// console.log(result4)

let result5 = s.replace(reg,'subroto');
console.log(result5)


