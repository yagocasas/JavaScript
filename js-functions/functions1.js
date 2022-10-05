// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

function getBiggestNumber(num1 , num2) {
    if(num1>num2) {
      console.log('El mayor número es ', num1);
    } else if (num2 > num1) {
      console.log('El mayor número es: ', num2);
    } else {
      console.log('Los números son iguales');
    }
  }

getBiggestNumber(10, 9);