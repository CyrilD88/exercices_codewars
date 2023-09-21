function howMuchILoveYou(nbPetals) {
  let ar = [];

  for (let i = 0; i < nbPetals; i++) {
    if (ar[ar.length - 1] === "I love you") {
      ar.push("a little");
    } else if (ar[ar.length - 1] === "a little") {
      ar.push("a lot");
    } else if (ar[ar.length - 1] === "a lot") {
      ar.push("passionately");
    } else if (ar[ar.length - 1] === "passionately") {
      ar.push("madly");
    } else if (ar[ar.length - 1] === "madly") {
      ar.push("not at all");
    } else {
      ar.push("I love you");
    }
  }
  console.log(ar[ar.length - 1]);
  return ar[ar.length - 1];
}

howMuchILoveYou(8);
