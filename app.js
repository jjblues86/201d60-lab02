'use strict';
var correctGuess = 0;

var userName = prompt('Welcome to my site! What is your name?');
console.log('Welcome to my site ' + userName + '!');
alert('Welcome to my site ' + userName + '!');

//Origin
function nationalOrigin(){
var origin = prompt('Where is Jerome from?');
origin = origin.toUpperCase();
console.log('Where is Jerome from? ' + origin);

if(origin === 'THE GAMBIA' || origin === 'the gambia'){
    alert('You are right!');
    correctGuess++;
} else {
    alert('Jerome is from The Gambia')
}
}

//Kids
function hasKids(){
var kids = prompt('Does Jerome have any kids?');
kids = kids.toUpperCase();
console.log('Does Jerome have any kids? ' + kids);

if(kids === 'YES' || kids === 'y'){
    alert('You got it');
    correctGuess++;
} else {
    alert('I have one kid');
}
}

//Sports
function favSport(){
var sports = prompt('Is soccer Jerome\'s favorite sport?');
sports = sports.toUpperCase();
console.log('Is soccer Jerome\'s favorite sport? ' + sports);

if(sports === 'YES' || sports === 'y'){
    alert('Hell Yeah!');
    correctGuess++;
} else {
    alert('Actually soccer is my favorite sport');
}
}

//Visited
function placeVisited (){

    var visited = prompt('Has Jerome been to China before?');
    visited = visited.toUpperCase();
    console.log('How many Countries has Jerome visited? ' + visited);
    
    if(visited === 'NO' || visited === 'no'){
        alert('You guessed it right');
        correctGuess++;
    } else {
        alert('I have never been to China before');
    }
}

//Language
function langSpoken(){
var language = prompt('Does Jerome speak spanish?');
language = language.toUpperCase();
console.log('Does Jerome speak spanish? ' + language);

if(language === 'NO' || language === 'no'){
    alert('Mi no habla espanola');
    correctGuess++;
} else {
    alert('You really believe in me :)');
}
}
// Let user guess your favorite number

function favNumber(){
var myNum = 8;
var tries = 4;

while(tries > 0){

    var userInput = prompt('Can you guess my favorite number?');
    var userInputInt = parseInt(userInput);

    if(userInputInt < myNum){
        alert('too small');
        tries --;
    } else if(userInputInt > myNum){
        alert('too large');
        tries --;
    } else if(userInputInt === NaN || userInputInt === ''){
        alert('You need to enter a value');
    }
    else if(userInputInt === myNum){
        tries = 0;
        alert('You are a winner 👯‍♂️');
        correctGuess++;
        break;
        correctGuess--;
    }
}
}
// Guess my favorite colors

function favColor(){
var colors = ['blue', 'red', 'grey', 'purple'];
// var len = colors.length;

for( var i = 5; i >= 0; i--){

    var userGuess = prompt('Can you guess my favorite colors?');
    userGuess = userGuess.toLowerCase();

    if(colors.includes(userGuess)){
        alert('That was a good guess buddy. Blue, Red, Grey and Purple are my favorite colors');
        console.log(userGuess);
        correctGuess++;
        break;
    } else {
        alert('Please continue guessing. You have ' + i + ' guesses left');
    }
}
}
nationalOrigin();
hasKids();
favSport();
placeVisited();
langSpoken();
favNumber();
alert('You guessed ' + correctGuess + ' out of 7 correct');