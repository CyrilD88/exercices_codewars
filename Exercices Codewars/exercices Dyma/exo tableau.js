// ************************* le plus grand *************
// Énoncé
// Créez une fonction qui prend un nombre indéfini d'arguments et retourne le plus grand nombre.

// Utilisez l'opérateur rest (...) et une boucle pour itérer sur les arguments.

// N'utilisez pas Math.max().

// Liste des objectifs à remplir
// Créez et exportez une fonction plusGrandNombre() qui prend un nombre indéfini d'arguments
// Utilisez une structure de contrôle et une boucle pour retourner le plus grand nombre
// Exemple d'entrée:
// (1, 2, 3, 4, 5, 7)
// (120, 1, 140)
// Exemple de sortie
// 7
// 140

// Correction
// export function plusGrandNombre(...nombres) {
//     let plusGrand;
//     for (let i = 0; i < nombres.length; i++) {
//       if (i === 0) {
//         plusGrand = nombres[i];
//       } else if (nombres[i] > plusGrand) {
//         plusGrand = nombres[i];
//       }
//     }
//     return plusGrand;
//   }

// ************************************Trier un tableau d'objets ************************************************************
// Énoncé
// Créez une fonction trierTableau() qui reçoit en argument un tableau d'objets et le retourne trié selon deux clés.

// Le tableau doit être trié d'abord par prix et ensuite par quantité.

// Cela signifie que si deux objets ont la même valeur pour la propriété prix, ils sont ensuite triés par quantité.

// Liste des objectifs à remplir
// Créez une fonction trierTableaux() qui reçoit un tableau d'objets en argument
// La fonction doit retourner le tableau trié par prix de manière décroissante
// La fonction doit trier les objets par quantité de manière décroissante si plusieurs objets ont le même prix

// Exemple d'entrée
// ({ prix: 20, quantite: 10 }, { prix: 20, quantite: 2 }, { prix: 50, quantite: 1 })
// Exemple de sortie
// ({ prix: 50 quantite: 1 }, { prix: 20, quantite: 10 }, { prix: 20, quantite: 2 })

// Correction

// export function trierTableaux(tableau) {
//     return tableau.sort((a, b) => {
//       return b.prix - a.prix ? b.prix - a.prix : b.quantite - a.quantite;
//     });
//   }

// ********************************************************* MAP et Filter ***************************************************************

// Map et filter
// Énoncé
// Créez une fonction filtreFemmesEtAjouteNomComplet() qui reçoit un tableau de personnes célèbres en argument.

// Les objets sont de la forme :
//   { prenom: 'Albert', nom: 'Einstein', genre: 'masculin' }

// La fonction doit d'abord filtrer les personnes célèbres de genre féminin.

// Elle doit ensuite ajouter à chaque objet du tableau le nom complet à partir du prénom et du nom.

// Liste des objectifs à remplir
// Créez et exportez une fonction filtreFemmesEtAjouteNomComplet() qui reçoit un tableau en argument
// Filtrez les objets du tableau pour que seuls les éléments avec une clé genre ayant pour valeur "féminin" soient inclus
// Ajoutez sur tous les objets du tableau une propriété nomComplet qui comporte le prénom suivi d'un espace puis le nom

// Correction

// export function filtreFemmesEtAjouteNomComplet(tableau) {
//     return tableau
//       .filter((el) => el.genre === "féminin")
//       .map((el) => ({
//         nomComplet: `${el.prenom} ${el.nom}`,
//         ...el,
//       }));
//   }
