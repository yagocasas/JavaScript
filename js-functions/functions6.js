// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
//  Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          array.splice(j, 1); //la j va a ser la posición del elemento duplicado
          j--; //contrarrestamos la posición de j porque al eliminar un elemento, la matriz ha cambiado
        }
      }
    }
    return array; 
  }
  console.log(removeDuplicates(duplicates));

  