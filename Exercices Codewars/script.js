/*=================Créer une fonction pour multiplier deux paramètres ======

function multiply(a, b){
    return (a * b)
}


best practice :
multiply = (a, b) => a * b;
*/

// ================================= Créer une fonction pour additionner des données dans un array======================
// You get an array of numbers, return the sum of all of the positives ones.    https://www.youtube.com/watch?v=sNZU6YRBKDw    /   https://www.youtube.com/watch?v=HnDgcu6dqOk

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     return arr.reduce((a,b) => a + (b > 0 ? b : 0),0)
//   }

// ======================= Créer une fonction pour retourner un un négatif ==============================

// function makeNegative(num) {
//     return -Math.abs(num);
//   }

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }

// ==================================Créer une fonction pour reverse une String =================

// function solution(str){
//     return str.split('').reverse().join('');
//   }

// ==================================Créer une fonction pour convertir un nombre en une String =================
// function numberToString(num) {
//     return num.toString();
//   }

//   best practice:
//   function numberToString(num) {
//     // Return a string of the number here!
//     return String(num);
//   }

// ==================================Créer une fonction pour enlever la première et dernière lettre =================
// function removeChar(str){
//     return str.slice(1, -1)
//     };

// ==================================Créer une fonction pour reverse un nombre =================
// function opposite(number) {
//     return(-number);
//   }

// ==================================Créer une fonction pour répéter une string =================
// function repeatStr (n, s) {
//     return s.repeat(n);
// }

// ==================================Créer une fonction pour faire le carré d'un nombre + additionner  =================
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum
//     },0)
//     }

// ==================================Méthode pour ajouter/supprimer un élément au début d'un tableau  =================

// let arr = [1, 2, 3];

// arr.unshift(-1, 0); //permet d'ajouter un élément à gauche du tableau
// arr.push(-10, 50); //permet d'ajouter un élément à droit en dernier du tableau

// // arr.splice;(0, 1 ) //permet de supprimer des éléments. Le 0 c'est l'index, le 1 le nombre d'élément à supprimer. Donc ici on part du début du tableau et on supprime un élément
// arr.splice(1, 0, -1.5); //permet d'ajouter des éléments. Le 1 c'est l'index, le 0 le nombre d'élément à supprimer. Donc ici on part deuxième élément du tableau et on rajouter -1.5
// console.log(arr);
