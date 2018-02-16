// * Single regex that matches either of these:
const str1 = 'antelope rocks out';
const str2 = 'antelopes rock out';
console.log(str2.match(/antelopes? rocks? out/g));
// or
console.log(str2.match(/(antelope rocks out|antelopes rock out)/g));

// goat moat
// but not:
// boat

const str3 = 'goat';
const str4 = 'moat';
const str5 = 'boat';

console.log(str5.match(/[gm]oat/g));

// Regex that matches dates in YYYY-MM-DD format. 
// (Year can be 1-4 digits, and month and day can each be 1-2 digits). 
// This does not need to verify the date is correct (e.g 33333-33-33 can match).

const str6 = '910-10-12 1999-1-20';
console.log(str6.match(/\d{1,4}-\d{1,2}-\d{1,2}/g));


// The VT-100 terminal
// ESC[12;45f
// ESC[1m

const rowColumn = /\e\[\d+;\d+f/;
const bold = /\e\[1m/;