// **Iteración #3: Mix Fors**

// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido
//  agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como
// favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como
// favorito en cada usuario.

// (lo que pide el ejercicio es que contemos cuantas veces se repite un sonido favorito, por ejemplo, waves lo
//     han agregado 3 usuarios, por lo tanto queremos que el código nos diga que waves se repite 3 veces)

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const accumulator = {};

for (const user of users) {
  // console.log(user); //comprobar a cada paso lo que voy haciendo para detectar mejor el error y no avanzar
  //hasta que tenga esta parte solucionada.
  //Ahora hay que acceder a la propiedad favoritesSounds.
//   console.log(user.favoritesSounds);

  for (const sound in user.favoritesSounds) {
    // console.log("sound", sound);
    // Averiguar si sound ya existe en el objeto accumulator.
    // Si el sonido coincide, le sumo 1.
    // Si no coincidem lo creo.
    if (accumulator.hasOwnProperty(sound)) {
      accumulator[sound] += 1;
    } else {
      accumulator[sound] = 1;
    }
  }
}
console.log(accumulator);

//ordena de mayor a menor los resultados

// let accumulatorArray = [];

// for (const key in accumulator) {
//     let temporal = [key, accumulator[key]];
//     accumulatorArray.push(temporal)
// };
// console.log(accumulatorArray);
// const sorted = accumulatorArray.sort(function(a, b) {
//     return a[1], b[1];
// });
// sorted.reverse;
// console.log(sorted);
// console.log(Object.fromEntries(sorted));


