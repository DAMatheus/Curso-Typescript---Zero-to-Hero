"use strict";
// Exemplo 1 - Uso de colchetes:
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// Exemplo 2 - Array Object
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);
// Exemplo 3 - Adicionando mais strings com PUSH
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push(`Mandarim`);
console.log(idiomas);
// Exemplo 4 - identificar tamanho do array - metodo length
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// Exemplo 5 - Exemplo de array com spread operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Exemplo 6 - Exemplo de array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcoesLinguagens(linguagens) {
    for (let i = 0; i < linguagensArray.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcoesLinguagens(linguagensArray);
