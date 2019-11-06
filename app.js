'use strict';

// var kids = prompt('How many kids does jerome have?');
// console.log('number of kids:', kids);

// var shoes = prompt('How many shoes does Jerome have?');
// console.log('num shoes:', shoes);

// if(kids === '2' || kids === '3'){
//     console.log('kids eval:', 'wonderful');
// }

// if(shoes === '6' || kids === '6'){
//     console.log('shoes eval:', 'right')
// }

var userName = prompt('Welcome to my site! What is your name?');
console.log('Welcome to my site ' + userName + '!');

//Origin
var origin = prompt('Where is Jerome from?');
origin = origin.toUpperCase();
console.log('Where is Jerome from? ' + origin);

if(origin === 'THE GAMBIA' || origin === 'the gambia'){
    alert('You are right!');
} else {
    alert('Jerome is from The Gambia')
}

//Kids
var kids = prompt('Does Jerome have any kids?');
kids = kids.toUpperCase();
console.log('Does Jerome have any kids? ' + kids);

if(kids === 'YES' || kids === 'y'){
    alert('You got it');
} else {
    alert('I have one kid');
}

//Sports
var sports = prompt('Is soccer Jerome\'s favorite sport?');
sports = sports.toUpperCase();
console.log('Is soccer Jerome\'s favorite sport? ' + sports);

if(sports === 'YES' || sports === 'y'){
    alert('Hell Yeah!');
} else {
    alert('Actually soccer is my favorite sport');
}

//Visited
var visited = prompt('How many Countries has Jerome visited?');
visited = visited.toUpperCase();
console.log('How many Countries has Jerome visited? ' + visited);

//Language
var language = prompt('Does Jerome speak spanish?');
language = language.toUpperCase();
console.log('Does Jerome speak spanish? ' + language);