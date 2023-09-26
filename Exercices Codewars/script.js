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

// ==================================Créer une fonction pour enlever la première et dernière lettre ================= https://www.youtube.com/watch?v=CSTtfCSAabE
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

// ==================================Méthode pour supprimer un élément à la fin d'un tableau  ===============

// let arr = [1, 2, 3];

// arr.pop(); //permet de supprimer le dernier élément du tableau

// console.log(arr);

// ==================================Méthode pour trouver un élément dans tableau  ===============
//la méthode indexOf()
//  la méthode indexOf ==> renvoie l'index du premier élément trouvé. Si l'élément n'est pas dans le tableau la méthode renverra -1
// par exemple

// const tableau = [1, 42, 42, 3];
// console.log(tableau.indexOf(42));
// console.log(tableau.indexOf(5));

// la méthode indexOf permet aussi de passer en deuxième argument la position à partir de laquelle l'élément doit être recherché
// const tableau = [1, 42, 42, 3];
// const indexes = [];
// let index = tableau.indexOf(42);
// while (index !== -1) {
//   indexes.push(index);
//   index = tableau.indexOf(42, index + 1);
// }
// console.log(indexes);

// La méthode includes()
// La méthode includes() permet de vérifier si un tableau contient une valeur . Elle retourne un booléen, si le tableau contient l'élément elle retournera true, sinon false.
// const tableau = [1, 42, 42, 3];
// console.log(tableau.lastIndexOf(42)); // 2
// console.log(tableau.lastIndexOf(5)); // -1

// La méthode find()
// La méthode find() renvoie le premier élément trouvé dans le tableau qui vérifie la condition testée par une fonction.
// Cette méthode prend une fonction de rappel (callback) qui va tester la condition pour chaque élément du tableau.
// Dès que la fonction de test retournera true, alors la méthode find() retournera l'élément. Si la condition n'est jamais vérifiée, alors elle retournera undefined.
// const tableau = [2, 5, 8, 12, 24, 52];
// const sup = tableau.find((el) => el > 10);
// console.log(sup); // 12

// La fonction de rappel reçoit de un à trois arguments. Vous pouvez les nommer comme vous voulez.

// Le premier argument, obligatoire, est l'élément du tableau sur lequel est effectué le test. Par convention, on utilise souvent e ou el pour élément.
// Le second argument, facultatif, est l'index de l'élément sur lequel est effectué le test. Par convention, on utilise souvent i pour index
// Le troisième argument, facultatif est le tableau sur lequel est utilisée la méthode find(). Par convention, on utilise souvent t ou arr pour tableau ou array.
// const tableau = [2, 5, 8, 12, 24, 52];
// const sup = tableau.find((el, i, t) => el > 10 && i < 2);
// console.log(sup); // undefined

// Ici la fonction de test va vérifier deux choses pour chaque élément : que l'élément est supérieur à 10 et que son index est inférieur à 2.
// Comme le test n'est jamais vérifié, la méthode retournera undefined.

// La méthode findIndex()
// la méthode findIndex() renvoie l'index du PREMIER élément trouvé dans le tableau qui vérifie la condition testée par une fonction.
// Elle peut également utiliser les mêmes arguments que la méthode find().

// const tableau = [2, 5, 8, 12, 24, 52];
// const sup = tableau.findIndex(el => el > 10);
// console.log(sup); // 3

// ==================================Méthode pour copier un tableau  ===============

// de façon "superficielle"

// avec le spread operator
// const tableau = [1, 2, 3];
// const tableau2 = [...tableau];
// tableau2.push(50);
// console.log(tableau);
// console.log(tableau2);

// Les deux tableaux n'ont plus la même référence ! Vous avez bien deux tableaux uniques.

// En revanche, comme les objets sont passés par référence, si votre tableau contient des objets (donc des tableaux, fonctions etc), ils conserveront la même référence lors de la copie, et leur modification pourra entraîner des effets indésirables :
// const tableau = [[1, 2], { a: 1 }];
// const tableau2 = [...tableau];
// tableau2[0].push(42);
// tableau2[1].a = 2;
// console.log(tableau); // [[1, 2, 42], {a: 2}]
// console.log(tableau2);

// avec la méthode slice()
// La méthode slice() renvoie un nouveau tableau, contenant une copie superficielle d'une partie du tableau d'origine.
// La méthode peut prendre facultativement en premier paramètre un index de début et en second un index de fin exclus.

// const tableau = [1, 2, 3, 4];
// const tableau2 = tableau.slice();
// const tableau3 = tableau.slice(1, 2);
// console.log(tableau);
// console.log(tableau2); // [1, 2, 3]
// console.log(tableau3); // [2]

// avec la méthode Array.from()
// const tableau = [1, 2, 3];
// const tableau2 = Array.from(tableau);
// tableau2.push(42);
// console.log(tableau); // [1, 2, 3]

// copier un tableau en profondeur
// Pour obtenir une copie profonde d'un tableau qui ne partage aucune référence en commun avec le tableau source il faut utiliser, comme nous l'avons vu pour les objets : JSON.parse(JSON.stringify(objet)).

// Prenons un exemple :
// const tableau = [[1,2], {a: 1}];
// const tableau2 = JSON.parse(JSON.stringify(tableau));

// tableau2[0].push(42);
// tableau2[1].a = 2;

// console.log(tableau); // [[1,2], {a: 1}]
