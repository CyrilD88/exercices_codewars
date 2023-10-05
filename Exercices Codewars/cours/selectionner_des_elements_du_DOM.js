// ************************************Sélectionner des éléments du DOM **************************************************'

// ******************************** Utiliser les méthodes getElement(s)

// Il y a deux grandes catégories de méthode pour rechercher des éléments du DOM.

// La première est d'utiliser les méthodes commençant par getElements :

// document.getElementById() permet de récupérer l'élément ayant l'id passé en argument. Vous pouvez également sélectionner l'élément directement en utilisant son id qui est une propriété globale sur l'objet window (voir dans l'exemple). A noter que cette dernière méthode est déconseillée, notamment à cause des risques de collision de noms.

// document.getElementsByName() permet de récupérer une NodeList des éléments qui ont le nom passé en argument.

// element.getElementsByClassName() permet de récupérer une HTMLCollection des éléments descendants ayant la classe passée en argument.

// element.getElementsByTagName() permet de récupérer une HTMLCollection des éléments descendants correspondants à la balise passé en argument.

// Remarquez que si les deux premières méthodes s'utilisent uniquement sur le document, les deux autres peuvent s'utiliser sur tout élément du DOM.

// Les HTMLCollection sont des collections itérables d'éléments. Ce ne sont pas des tableaux, mais des objets itérables.

// Les NodeList sont des collections itérables de noeuds. Ils peuvent donc contenir autre chose que des éléments.

// ************************ Utiliser les méthodes querySelector

// Les méthodes que nous allons voir utilise les sélecteurs CSS que vous commencez à connaître maintenant ! Si ce n'est pas le cas, revoyez les dans le cours HTML & CSS.

// Ces méthodes peuvent s'utiliser sur tout élément du DOM.

// element.querySelector() retourne le premier élément sélectionné par le sélecteur.

// element.querySelectorAll() retourne tous les éléments sélectionnés par le sélecteur passé en argument. Elle retourne une NodeList.

// Ces méthodes sont recommandées par rapport aux méthodes getElementsBy car elles sont plus concises et plus puissantes grâce aux sélecteurs CSS.

// *************************** La méthode closest()

// La méthode closest() s'utilise sur un élément et prend en argument un sélecteur CSS. Elle permet de sélectionner l'ancêtre le plus proche correspondant au sélecteur.

// Elle peut donc sélectionner un parent ou un grand-parent, ou un ancêtre encore plus lointain

// <div class="employes">
//   <ul class="liste-employes">
//     <li class="employe">Paul</li>
//     <li class="employe">Jean</li>
//   </ul>
// </div>

// <script>
//   // Sélection du premier élément avec la classe employe :
//   const paul = document.querySelector(".employe");

//   paul.closest(".liste-employes"); // ul
//   paul.closest(".employes"); // div
// </script>

// *********************************** Collections statiques et collections live

// Les méthodes querySelector retournent des collections statiques et les méthodes getElementsBy des collections live.

// Prenons un exemple :
// <div>Je suis la première div</div>

// <script>
//   const divsLive = document.getElementsByTagName("div");
//   const divsStatiques = document.querySelectorAll("div");
// </script>

// <div>Je suis la deuxième div</div>

// La première div est déclarée, ensuite nous exécutons le script et enfin la deuxième div est déclarée.

// divsLive contiendra une div puis deux. Alors que divsStatiques contiendra toujours une seule div.

// La différence est que les collections live se mettent à jour automatiquement lorsqu'il y a des changements dans le document, alors que les collections statiques non.

// Il faut le savoir, même si dans la grande majorité des cas vous n'aurez besoin que de collections statiques pour effectuer vos manipulations. Nous verrons de nombreux exemples dans le cours.

// pause pour le moment
