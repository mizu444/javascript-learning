function vypisCislo(argument1, argument2) {
  console.log("Argument1: ", argument1);
  console.log("Argument2: ", argument2);

  if (argument1.hasOwnProperty("vek")) {
    console.log(argument1["vek"]);
  } else {
    console.log("argument 1 nema property vek");
  }
}

const objekt = {
  meno: "Miska",
  vek: 25,
  pohlavie: "zena",
  vydata: false,
  zadana: true,
};

console.log(objekt.vek);
console.log(objekt["vek"]);

const objekt2 = {
  meno: "Miro",
  vek: 26,
  pohlavie: "muz",
  zenaty: false,
  zadany: true,
  praca: "povalac",
};

vypisCislo(objekt.vek, 1);

vypisCislo(2, objekt2);

vypisCislo(objekt, "serus");

vypisCislo(objekt2, "serus");

console.log(objekt.hasOwnProperty("praca"));
