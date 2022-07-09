const deadpool = {
  nombre: "Winston",
  apellido: "Wade",
  poder: "Regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

/*Creamos los objetos pero con la desestructuración podemos asignar variables a sus campos.
En esta asignación podemos asignar valores a los campos*/

const { nombre, apellido, poder, edad = 18 } = deadpool;

//Podemos desestructurar objetos en las funciones si conocemos los campos
function imprimeHeroe({ nombre, apellido, poder }) {
  console.log(nombre, apellido, poder);
}

imprimeHeroe(deadpool);

//Desestructuración de arrays, asignamos mútiples variables en una línea
const heroes = ["Deadpool", "Superman", "Batman"];
const [h1, h2, h3] = heroes;

//Si sólo queremos asignar alguno usamos comas
const [, , heroe] = heroes;

console.log(heroe);
