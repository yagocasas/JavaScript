// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const button$$ = document.querySelector('#btnToClick').addEventListener('click', (event) => console.log(event));

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus$$ = document.querySelector('.focus');
focus$$.addEventListener('focus', () => console.log(focus$$.value));

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input$$ = document.querySelector('.value');
input$$.addEventListener('input', () => console.log(input$$.value));