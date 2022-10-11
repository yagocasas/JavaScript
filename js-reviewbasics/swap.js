// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
// Retorna el array resultante.

const fakePlayers = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

 function swap (array, index1, index2) {
    //intercambiar posiciones dentro del array
    let player1 = array[index1];
    let player2 = array[index2];

    array.splice(index1, 1, player2) //el 2º parámetro siempre es 1 porque solamente elimina esa posición, siempre 
    array.splice(index2, 1, player1)
    
    return (array);
 }
 
 console.log(swap(fakePlayers, 0, 1));

//crea un nuevo array

/* 
//Neftalí
function swap (arr, index1, index2) {

    let tmpWord = words[index1]; // Guardamos la palabra del primer indice
    arr[index1] = arr[index2]; // Modificamos el valor del primer indice por la del segundo
    arr[index2] = tmpWord; // Modificamos el valor del segundo indice por la palabra guardada como tmpWord
  
  } //es la solución más sencilla. Arriba hemos utilizado el método .splice para ver su funcionamiento
  
  const swap = (arr, i1, i2) => arr[i1] = arr.splice(i2, 1, arr[i1])[0] //Se puede hacer en una línea */

  