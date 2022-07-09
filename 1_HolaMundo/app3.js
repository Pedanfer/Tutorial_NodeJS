/*A pesar de pasarles 0 segundos de timeout estas funciones de callback asíncronas
 son asignadas a una cola de espera de callbacks por orden, 
 de manera que las síncronas se ejecutan siempre antes en la pila de procesos */

console.log("Inicio de programa"); //1

setTimeout(() => {
  console.log("Primer Timeout"); //5
}, 3000);

setTimeout(() => {
  console.log("Segundo Timeout"); //3
}, 0);

setTimeout(() => {
  console.log("Tercer Timeout"); //4
}, 0);

console.log("Fin de programa"); //2
