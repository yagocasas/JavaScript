// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings
//  tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord (array) {
    let longestWord = array[0];
for (let i = 1; i < array.length; i++) { 
    //empieza a comprobar en posición 1 porque ya comparamos antes con la posición 0,
    //al asignar longestWord = array[0].
    // console.log(array[i]);
    const element = array[i];
    if (longestWord.length < element.length) {
        longestWord = element;
    }
} 
return longestWord;
}

console.log(findLongestWord(avengers));
