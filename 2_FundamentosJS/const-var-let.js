let person;
var nombre;
//Siempre que se pueda usamos constantes porque son más ligeras que el resto
const fixed = 'hey';

if (true) {
  //var crea las variables de forma global siempre, es mejor usar let
  var nombre = "Magneto";
}

//let crea una variable local que no se usa en el console.log() global
if (true) {
  let nombre = "Magneto";
  person = 'Magneto';
}

console.log(nombre);
