// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=yago") //si loguardo en una variable, devuleve una promesa, por la asincronía.
  .then((data) => data.json()) //le llegan datos=>los llamamos data
  .then((data) => console.log(data)); //los enviamos a imprimir

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io/?name=";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const search = () => {
  fetch(baseUrl + input$$.value)
    .then((name) => name.json())
    .then((name) => console.log(name));
};

button$$.addEventListener("click", search);

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

// const text = () => {
//   fetch(baseUrl + input$$.value)
//     .then((data) => data.json())
//     .then((person) => {
//       const p$$ = document.createElement("p");
//       p$$.textContent = `El nombre ${input$$.value}`;

//       for (const country of person.country) {
//         p$$.textContent += ` tiene un ${Math.floor(
//           country.probability * 100
//         )} por ciento de probabilidades de ser de ${country.country_id}`;
//       }
//       document.body.appendChild(p$$);
//     });
// };
// button$$.addEventListener("click", () => text());

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

const removeP = (elements) => {
  for (const element of elements) {
    element.remove();
  }
}

const text = () => {

  fetch(baseUrl + input$$.value)
    .then((data) => data.json())
    .then((person) => {

      const p$$ = document.createElement("p");
      const eliminar$$ = document.createElement('button');

      eliminar$$.textContent = 'x';

      p$$.textContent = `El nombre ${input$$.value}`;

      for (const country of person.country) {
        p$$.textContent += ` tiene un ${Math.floor(
          country.probability * 100
        )} por ciento de probabilidades de ser de ${country.country_id}`;
      }

      eliminar$$.addEventListener('click', () => removeP([p$$, eliminar$$]));

      document.body.appendChild(p$$);
      document.body.appendChild(eliminar$$);
    });
};

button$$.addEventListener("click", () => text());