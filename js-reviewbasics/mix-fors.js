// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de 
// todos los sonidos favoritos que tienen los usuarios.

const users = [ //array de objetos con 2 propiedades (name y favoriteSounds). Dentro de la propiedad de favoriteSounds
                // hay otro objeto con 3 propiedades y en cada propiedad, otro objeto de 2 propiedades, entre las
                // que se incluye volume. Hay que acceder ahí
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let sum = 0;
let cont = 0;

for (const user of users) {
    // console.log(user);
    // console.log(user.favoritesSounds);
    for (const key in user.favoritesSounds) {
        // console.log(user.favoritesSounds[key]);
        // console.log(user.favoritesSounds[key].volume);
        let element = user.favoritesSounds[key].volume;
        sum += element
        // console.log(sum)
        cont++;
        // console.log(cont);
    }
}
console.log('El valor medio del volumen total es: ' + (sum / cont));








// let suma = 0;
// let cont = 0; //creamos variable para contarme cuantos volumen tengo

// for (const user of users) {
//     console.log(user); //estamos en el primer nivel 
//     for (const key in user.favoritesSounds) {
//         console.log(key);
//         console.log(user.favoritesSounds[key].volume);
//         suma += user.favoritesSounds[key].volume;
//         cont++; //suma de 1 en 1 cada vez que encuentra un 'volumen'
//     }
// }
// console.log(cont);
// console.log(suma);
// console.log(suma / cont);

/* //otra solución, muy lógica y buena práctica
let suma = 0;
let cont = 0;
/
for (const user of users) {
  for (const key in user.favoritesSounds) {
    const sound = user.favoritesSounds[key];
    suma += sound.volume;
    cont++;
  }
}

console.log (suma / cont); */