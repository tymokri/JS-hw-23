"use strict";

// Task 1

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let arrNew1 = arrA.concat(arrB);

console.log(arrNew1);

// Task 2

let arr2 = [1, 2, 3];

let arrReversed = arr2.reverse();

console.log(arrReversed);

// Task 3

let arr3 = [1, 2, 3];

let total3 = arr3.push(4, 5, 6);

console.log(arr3);
console.log(total3);

// Task 4

let arr4 = [1, 2, 3];

let total4 = arr4.unshift(4, 5, 6);

console.log(arr4);
console.log(total4);

// Task 5

let arr5 =  ['js', 'css', 'jq'];

alert(arr5.shift());

// Task 6

let arr6 =  ['js', 'css', 'jq'];

alert(arr6.pop());

// Task 7

let arr7 = [1, 2, 3, 4, 5];

let arrNew7 = arr7.splice(0,3);

console.log(arrNew7);

// Task 8

let arr8 = [1, 2, 3, 4, 5];

let arrNew8 = arr8.splice(-2);

console.log(arrNew8);

// Task 9

let arr9 = [1, 2, 3, 4, 5];

arr9.splice(1,2);

console.log(arr9);

// Task 10

let arr10 = [1, 2, 3, 4, 5];

let arrNew10 = arr10.slice(1, 4);

console.log(arrNew10);

// Task 11

let arr11 = [1, 2, 3, 4, 5];

arr11.splice(3, 0, 'a', 'b', 'c');

console.log(arr11);

// Task 12

let arr12 = [1, 2, 3, 4, 5];

arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.splice(8, 0, 'e');

console.log(arr12);

// Task 13

let arr13 = [3, 4, 1, 2, 7];

console.log(arr13.sort());

// Task 14

let arr14 = [5, 6, 7, 8, 9];

let total14 = arr14.reduce(function (a,b) {
    return a + b;
});

console.log(total14);

// Task 15

let arr15 = [5, 6, 7, 8, 9];

let arrNew15 = [];

 arr15.forEach(function (item) {
    arrNew15.push(item * item);
});

console.log(arrNew15);

// Task 16

let arr16 = [1,-3, 5, 6,-7, 8, 9,-11];

let arrNew16 = arr16.filter(function (item) {
     return item < 0;
});

console.log(arrNew16);

// Task 17

let arr17 = [1,-3, 5, 6,-7, 8, 9,-11];

let arrNew17 = arr17.filter(function (item) {
     return item > 0;
});

console.log(arrNew17);

// Task 18

let arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

let arrNew18 = arr18.filter(function (item) {
     return item.length > 5;
});

console.log(arrNew18);

// Task 19

let arr19 = [1, 2, [3, 4], 5, [6, 7]];

let arrNew19 = arr19.filter(function (item) {
    return Array.isArray(item);
});

console.log(arrNew19);

// Task 20

let arr20 = [5,-3, 6,-5, 0,-7, 8, 9];

let arrNew20 = arr20.filter(function (item) {
     return item < 0;
});

console.log(arrNew20.length);