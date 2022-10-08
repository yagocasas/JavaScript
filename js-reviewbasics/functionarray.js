// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y 
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

const bugs = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
   for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element === text) {
        return i;
    }
   }
}
console.log(findArrayIndex(bugs, 'Salamandra'));

const carBrands = ['Ford', 'BMW', 'Land Rover', 'Seat', 'Toyota'];
console.log(findArrayIndex(carBrands, 'BMW'));