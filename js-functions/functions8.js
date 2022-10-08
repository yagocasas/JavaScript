// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
//  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(array) {
  let result = {}; //creamos una variable objeto vacío. Otros compañeros le han llamado counter. Perfecto!;
  for (let i = 0; i < array.length; i++) {
    const element = array[i]; //variable element a la que le asigo el valor de cada elemento del array en su posición;
    if (element in result) {  //tenemos un ¡in!. Genial!!! (recuerda: element = array[i]);
      result[element]++; //si la encuentra le suma 1. Es lo mismo que: result[element] = result[element] + 1;
    } else {
      result[element] = 1; //en caso contrario, el valor es 1 pq aparece una vez en el array y de aquí parten todos los items;
    }
  }
  return result; //se retorna dentro de la función, fuera del bucle ;)
}
console.log(repeatCounter(counterWords));

// Podemos utilizar también para la comprobación counter.hasOwnProperty(param[i])