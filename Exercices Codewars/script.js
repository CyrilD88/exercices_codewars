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

// // ==================================Méthode pour fusionner des tableaux  ===============
// Fusionner deux tableaux avec la méthode concat()
// La méthode concat() permet de fusionner plusieurs tableaux en les concaténant, c'est-à-dire en ajoutant les valeurs à la suite.
// Cette méthode ne modifie pas les tableaux d'origine, elle crée un nouveau tableau et le renvoie :

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5];
// const tableau3 = tableau1.concat(tableau2);
// console.log(tableau3); // [1, 2, 3, 4, 5]

// Fusionner deux tableaux avec l'opérateur spread …
// Nous pouvons également fusionner des tableaux en utilisant l'opérateur

// const tableau1 = [1, 2, 3];
// const tableau2 = [4, 5];
// const tableau3 = [...tableau1, ...tableau2];
// console.log(tableau3); // [1, 2, 3, 4, 5]

// ==================================Méthode pour trier des tableaux  ===============

// localeCompare s'utilise sur les chaines de caractères
// const a = ["ananas", "banane", "orange", "kiwi", "prune", "pomme"];

// a.sort((c, d) => c.localeCompare(d) * 1);

// console.log(a);

// on peut mettre ce que l'on veut à la place de c et d.

// pour les nombres
// const a = [1, 4, 6, 10, 50, 3, 25];

// a.sort((c, d) => d - c);

// console.log(a);

// ==================================Méthode pour itérer sur des tableaux  ===============
// Itérer avec une boucle for
// Une boucle for donne le plus de possibilités mais est assez verbeuse :
// const tableau = [1, 2, 3, 4, 5];
//   for (let i = 0; i < tableau.length; i++) {
//       console.log(`A l’index ${i} nous avons ${tableau[i]}`);
//   }
//   // A l’index 0 nous avons 1
//   // A l’index 1 nous avons 2
//   // ….

// Utiliser la méthode forEach()
// La méthode forEach() permet d'utiliser une fonction de rappel sur chacun des éléments.

// Le premier argument reçu par la fonction passée à forEach() est l'élément en cours d'itération.
// Le second argument reçu par la fonction passée à forEach() est l'index de l'élément en cours d'itération. Il est facultatif.

// Le troisième argument reçu par la fonction passée à forEach() est le tableau sur lequel est utilisé la méthode. Il est également facultatif.

// Nous pouvons réécrire la boucle précédente en utilisant la méthode, ce qui est beaucoup plus concis et très clair :
// const tableau = [1, 2, 3, 4, 5];
//   tableau.forEach((el, i) => console.log(`A l’index ${i} nous avons ${el}`));
//   // A l’index 0 nous avons 1
//   // A l’index 1 nous avons 2
//   // ….
//   Utilisez cette méthode lorsque vous voulez itérer sur un tableau en ayant accès aux index.

// N'utilisez pas cette méthode pour créer un nouveau tableau à partir d'un tableau

// Itérer sur un tableau avec l'instruction for...of
// Si vous n'avez pas besoin d'accéder à l'index l'instruction for...of est très concise et efficace pour itérer sur un tableau :
// const tableau = [1, 2, 3, 4, 5];
//   for (const valeur of tableau) {
//     console.log(valeur);
//   }
//   // 1
//   // 2
//   // ...

//   Cette méthode fonctionne avec tous les itérables, donc avec les chaînes de caractères comme nous l'avons vu :
//   const chaine = 'dyma';

//   for (const valeur of chaine) {
//     console.log(valeur);
//   }
//   // d
//   // y
//   // m
//   // a

//   Vous pouvez également utiliser les instructions break ou continue.

// C'est la méthode que nous recommandons dès lors que vous n'avez pas besoin d'accéder aux index lors de l'itération.
// N'utilisez jamais for … in avec un tableau ! Cette instruction sert à énumérer les propriétés d'un objet itérable. Vous aurez donc les index en sortie (0, 1, 2, …) ce qui n'a pas d'intérêt. En outre, dans ce cas, l'ordre des index n'est pas garanti car vous énumérez les propriétés de l'objet, qui rappelez-vous, n'a pas d'ordre garanti !

// ==================================Introduction à la programmation fonctionnelle  ===============

// methode map() et filter()
// dans l'exemple ci dessous. on applique filter() à item (on peut mettre le nom que l'on veut) pour avoir la quantité. Ensuite on utilise la méthode map().
// ces deux méthodes utilisent des fonctions de callback . pour le map(item) on passe l'objet dans la fonction de callback car dans l'exemple c'est un objet. Le ...item signifie que l'on prend TOUS les item , le name écrase l'item

// const array = [
//   {
//     quantity: 5,
//     name: "CHAUSSURES",
//   },
//   {
//     quantity: 10,
//     name: "CHEMISES",
//   },
//   {
//     quantity: 12,
//     name: "PANTALONS",
//   },
// ];

// console.log(array);

// const a = array
//   .filter((item) => item.quantity >= 10)
//   .map((item) => ({ ...item, name: item.name.toLowerCase() }));

// console.log(a);

// La fonction map()
// La méthode map() crée et retourne un nouveau tableau avec les résultats de l'appel d'une fonction de rappel utilisée sur chaque élément du tableau.

// map ne modifie pas le tableau sur lequel elle est utilisée, il s'agit d'une fonction pure.
// const tableau = [1, 2, 3];
// const tableau2 = tableau.map(el => el ** el);
// console.log(tableau2); // [1, 4, 27]

// Nous passons une fonction de rappel qui va être exécutée pour tous les éléments du tableau.

// Ici nous élevons chaque nombre à la puissance du nombre.

// Le premier argument reçu par la fonction de rappel est l'élément en cours d'itération.
// Le second argument reçu par la fonction de rappel est l'index de l'élément en cours d'itération. Il est facultatif.
// Le troisième argument reçu par la fonction de rappel est le tableau sur lequel est utilisé la méthode. Il est également facultatif.
// Il s'agit d'une fonction pure car elle n'a pas d'effet de bord, elle peut en outre être chaînée avec d'autres fonctions pures ce qui favorise grandement la composition fonctionnelle.

// Vous pouvez utiliser également un raccourci syntaxique si la fonction de rappel peut utiliser directement les arguments. Par exemple :
// const tableau = [1, 2, 3];
// const tableau2 = tableau.map(Math.pow);
// console.log(tableau2); // [1, 2, 9]

// Cela équivaut exactement à :

// const tableau = [1, 2, 3];
// const tableau2 = tableau.map((el, i) => Math.pow(el,i));
// console.log(tableau2); // [1, 2, 9]

// La fonction filter()
// La méthode filter() crée et retourne un nouveau tableau contenant les éléments qui passent le test de la fonction de rappel.

// La fonction de rappel reçoit les mêmes arguments que pour celle de map().
// const tableau = [
//     { prix: 42 },
//     { prix: 2 },
//     { prix: 12 },
//     { prix: 50 },
//     { },
//     { prix: undefined },
//     { prix: NaN },
//     { prix: null }
//   ];
//   const tableau2 = tableau.filter(el => el.prix > 10);
//   console.log(tableau2); // [{prix: 42}, {prix: 12}, {prix: 50}]

//   Ce qui est extrêmement courant et puissant est la combinaison de fonctions pures :

// const tableau = ["12", "111", "4", "56", "42"];
// const tableau2 = tableau.map(Number).filter(el => el > 20);
// console.log(tableau2); // [111, 56, 42]

// ==================================d'autres méthodes de programmation fonctionnelle  ===============

// La méthode reduce()
// La méthode reduce() est utilisée le plus souvent pour réduire une liste à une seule valeur.

// En fait, elle va parcourir chacun des éléments d'un tableau avec une fonction de rappel, et effectuer un calcul avec la valeur de chaque élément et un total intermédiaire, jusqu'à aboutir à un résultat final.

// const panier = [
//   {
//     quantity: 1,
//     name: "CHAUSSURES",
//     price: 50,
//   },
//   {
//     quantity: 1,
//     name: "CHEMISES",
//     price: 20,
//   },
//   {
//     quantity: 2,
//     name: "PANTALONS",
//     price: 70,
//   },
// ];

// const total = panier.reduce(
//   (acc, curr) => (acc += curr.price * curr.quantity),
//   0
// );

// console.log(total);

// a méthode reduce() prend deux arguments : une fonction de rappel et une valeur initiale.
// La fonction de rappel peut utiliser au minimum deux arguments et au maximum quatre.
// Le premier argument passé à la fonction de rappel est l'accumulateur, c'est-à-dire le résultat intermédiaire. Par convention on utilise souvent acc pour accumulateur.
// Le second argument passé à la fonction de rappel est l'élément en cours d'itération. Par convention on utilise souvent curr pour current value ou valeur courante.
// Le troisième argument passé à la fonction de rappel est l'index de l'itération en cours.
// Le quatrième argument passé à la fonction de rappel est le tableau sur lequel est utilisé reduce().
// Si aucune valeur initiale n'est passée en deuxième argument de reduce(), le premier élément du tableau est utilisé comme valeur initiale.

// Prenons un second exemple, celui du panier :
// const tableau = [{prix: 20, quantite: 2}, {prix: 42, quantite: 1}, {prix: 15, quantite: 3}];
// const total = tableau.reduce((acc, curr) => acc += curr.quantite * curr.prix, 0);
// console.log(total); // 127

// Nous passons en deuxième argument de reduce() la valeur 0 comme valeur initiale.

// Donc lors de la première exécution, nous avons :
// acc = 0 + 2 * 20;

// Pour la seconde itération nous avons :
// acc = 40 + 1 * 42;

// Pour la troisième itération nous avons :

// acc = 82 + 3 * 15;

// Comme il s'agit de la dernière itération, cette valeur est retournée. Nous obtenons le total de 127.

// La méthode flat()
// La méthode flat() permet de créer et de retourner un nouveau tableau contenant tous les éléments des tableaux imbriqués.

// Comme son nom l'indique, cette méthode permet d'aplatir un tableau.
// En fait, elle effectue une récursion sur les tableaux imbriqués et les concatène jusqu'au niveau passé en argument.

// Prenons par exemple un tableau avec des éléments imbriqués sur plusieurs niveaux dans des tableaux :
// const tableau = [1, 2, [3, 4], [[5], [6,7]]];
// const tableau2 = tableau.flat();
// const tableau3 = tableau.flat(2);

// console.log(tableau2); // [1, 2, 3, 4, [5], [6, 7]]
// console.log(tableau3); // [1, 2, 3, 4, 5, 6, 7]

// La méthode flatMap()
// La méthode flatMap() permet de combiner la méthode map() et la méthode flat(1) de manière optimisée pour la performance.
// const test = [1, 3, 5].flatMap(el => [el, el + 1]);
// console.log(test); // [1, 2, 3, 4, 5, 6]

// ***********************************************************************************************************************************************************
// // ======================================================== introduction aux modules ======================================================================
// ***********************************************************************************************************************************************************
// Lorsque notre application devient plus importante, nous voulons séparer notre application en plusieurs fichiers qui sont appelés des modules.

// Jusqu'à ES6, JavaScript n'avait pas de système de modularisation dans le langage.

// Il fallait donc utiliser les librairies AMD, CommonJS ou UMD.
// On pouvait également utiliser des IIFE pour isoler le code de chaque fichier comme nous l'avions vu.

// Aujourd'hui, nous utilisons uniquement du JavaScript pour l'utilisation de modules dans les navigateurs.

// ======================================================== EXPORTER ======================================================================
// Exporter signifie que vous rendez disponible la fonction ou la variable pour être importée dans un ou plusieurs modules (donc fichiers).
// Avec les modules JavaScript vous pouvez exporter des fonctions, des variables ou des classes
// Pour exporter il suffit de placer le mot clé export devant la déclaration :

// export const tableau = [1, 2, 3];

// export function Compter() {}

// export class User {}

// **************************Déclarer un objet d'export
// Vous pouvez également déclarer un objet contenant les identifiants à exporter :
// const tableau = [1, 2, 3];

// function Compter() {}

// class User {}

// export { tableau, Compter, User }

// **************************Modifier le nom d'un identifiant pour l'export
// Vous pouvez renommer les identifiants lors de l'export pour que ce soit ces noms qui soient utilisés dans les modules qui les importeront const tableau = [1, 2, 3];

// function Compter() {}

// class User {}

// export { tableau as tableauNombres, Compter as CompterUsers, User }

// ****************************Export par défaut
// L'export par défaut permet de déclarer un unique export qui sera utilisé lorsque nous ne précisons pas ce que nous souhaitons importer dans les modules de destination.

// Il suffit d'utiliser export default devant la déclaration.
// export default function Compter() {}

// ======================================================== IMPORTER ======================================================================

// *********************************************Importer des identifiants exportés explicitement
// Pour importer des identifiants qui ont été exportés explicitement, il suffit de faire :
// import { export1, export2, ... } from "chemin-vers-module";

// Si nous avons par exemple dans un premier module :
// export const tableau = [1, 2, 3];

// export function Compter() {}

// export class User {}

// Il suffit de faire dans le module qui importe :
// import { tableau , Compter, User } from "chemin-vers-module";

// Il suffit d'utiliser des accolades puis d'utiliser tous les identifiants que vous souhaitez voir importés. Ensuite il faut utiliser le mot clé from et indiquer le chemin vers le module qui exporte.

// *********************************************Importer l'intégralité d'un module
// Vous pouvez également utiliser import * as et un identifiant pour importer l'intégralité des exports d'un module :

// import * as monModule from 'chemin-vers-module';

// // Accès aux exports
// monModule.tableau;
// monModule.Compter;
// monModule.User;

// *********************************************Importer en utilisant un alias
// Comme pour les exports, vous pouvez renommer un identifiant importé lors de l'import, pour utiliser un nom différent dans le module.

// Il suffit d'utiliser as puis le nom du nouvel identifiant pour le module.
// import { tableau as tableauNombre, Compter, User } from "chemin-vers-module";

// *********************************************Importer l'export par défaut
// Pour importer ce qui est exporté par défaut et qui n'a donc pas de nom, il suffit d'utiliser un identifiant sans accolade qui contiendra l'export par défaut :

// import unIdentifiant from 'chemin-vers-module';

// // *********************************************Recommandations sur les exports et les imports
// Nous recommandons de ne jamais utiliser les exports par défaut.

// Nous recommandons également de ne pas utiliser les imports de tout un module avec *.

// Premièrement, parce qu'en faisant de la sorte vous perdez l'autocomplétion automatique de l'IDE.
// Deuxièmement, parce que vous perdez en consistance dans votre application. Les exports / imports explicites obligent à utiliser toujours les mêmes noms dans votre application ce qui est une bonne chose. Si plusieurs développeurs utilisent des noms différents lors des imports cela devient vite illisible et difficilement maintenable.
// Troisièmement, car en important explicitement des fichiers, Webpack pourra effectuer des optimisations : notamment du tree-shaking en ne mettant dans le bundle que le code qui est vraiment utilisé. Tout ce qui n'est pas explicitement importé sera écarté
// Mettons que vous avez une grosse librairie comme lodash et que vous l'importez avec * as lodash. Tout le contenu de la librairie sera mis dans votre bundle et non pas les 2 ou 3 fonctions que vous utiliserez.

// ===============================================================Réexporter et les imports dynamiques==================================================================

// ********************************************Réexporter des modules
// Il est possible d'importer et d'immédiatement réexporter des identifiants.

// Pour ce faire, il faut utiliser la syntaxe export … from :

// export { monExport } from 'chemin-du-module';

// C'est utile lorsque votre application commence à devenir très importante et que vous avez un grand nombre de modules.

// Mettons que vous avez une fonctionnalité d'authentification dans votre application et que vous ayez quatre ou cinq modules pour l'ensemble du code nécessaire à authentifier vos utilisateurs.
// Dans ce cas, il est courant de créer un fichier index.js qui va réexporter tous les modules de la fonctionnalité.

// Vous aurez ainsi un fichier index.js qui contiendra :

// // 📁 authentification/index.js
// export { signup } from 'chemin-module-inscription';
// export { login, logout } from 'chemin-module-connexion';
// export { delete } from 'chemin-module-suppression';

// Dans votre application vous pourrez ainsi très simplement importer tous les identifiants nécessaires à la fonctionnalité.

// Par exemple :
// // 📁 authentification/connexion/formulaire.js
// import { login } from '/projet/app/src/authentification';

// Par défaut, lorsque vous utilisez un dossier dans le chemin, l'interpréteur va rechercher le fichier index.js dans ce dossier et l'utiliser.

// // ********************************************Les imports dynamiques avec import()
// Jusqu'à maintenant nous avons vu les imports statiques.

// Les imports dynamiques permettent d'importer des modules sous certaines conditions.

// Ils permettent également de générer dynamiquement les chemins des imports et de passer des paramètres.

// Il est aujourd'hui possible d'utiliser des imports dynamiques en JavaScript, en utilisant la syntaxe suivante :

// import('chemin-module')
//   .then(obj => console.log(obj))
//   .catch(err => console.error(err))

// Les imports dynamiques sont assez avancés et nécessitent des connaissances sur la gestion de l'asynchrone et notamment des promesses.

// Nous allons bien sûr tout voir dans des chapitres ultérieurs et verrons des cas d'utilisation des imports dynamiques.
