// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement('ul');
for (const country of countries) {
    let li$$ = document.createElement('li');
    console.log(li$$)
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeElement$$ = document.querySelector('.fn-remove-me');
console.log(removeElement$$);
removeElement$$.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul1$$ = document.createElement('ul');
for (const car of cars) {
    let li1$$ = document.createElement('li');
    li1$$.textContent = car;
    ul1$$.appendChild(li1$$);
}
const divHtml$$ = document.querySelector('[data-function="printHere"]');
divHtml$$.appendChild(ul1$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const lista$$ = document.createElement('ul');

for (const country2 of countries2) {
    let countryDiv$$ = document.createElement('div');

    let h4$$ = document.createElement('h4');
    h4$$.textContent = country2.title;

    let img$$ = document.createElement('img');
    img$$.src = country2.imgUrl;

    countryDiv$$.appendChild(h4$$);
    countryDiv$$.appendChild(img$$);

    document.body.appendChild(countryDiv$$);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

let button$$ = document.createElement('button');

button$$.style.padding = '15px';
button$$.textContent = 'Remove!';

button$$.addEventListener('click', function() {
    let allDivs$$ = document.querySelectorAll('div');
    if(allDivs$$.length === 6)allDivs$$[allDivs$$.length - 1].remove();
    
})
document.body.appendChild(button$$);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

const divs$$ = document.querySelectorAll('div')
let firstDiv = divs$$[0];

 for (const div of divs$$) {
    let button2$$ = document.createElement('button');
    button2$$.textContent = 'Elimíname!';
    button2$$.style.padding = '15px';

    if(div !== firstDiv) div.appendChild(button2$$);
    button2$$.addEventListener('click', () => {
        div.remove();
    })
 }
