function sumar(a, b = 10){
    return a + b;
}

//Las funciones de flecha tienen la ventaja de poder ser constantes y de reducir código
const sumarFlecha = (a, b = 10) => a + b;
const saludar = () => 'Hello World';

console.log(sumarFlecha(2, 6));