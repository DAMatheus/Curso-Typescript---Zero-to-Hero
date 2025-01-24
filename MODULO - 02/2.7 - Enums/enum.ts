// Exemplo 1 - Numeric Enums
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}
console.log(Idioma)

// Exemplo 2 - String Enums
enum Dia {
    Segunda = `SEG`,
    Terca = `TER`,
    Quarta = `QUA`,
    Quinta = `QUI`,
    Sexta = `SEX`,
    Sabado = `SAB`,
    Domingo = `DOM`
}
console.log(Dia)

// Exemplo 3 - Acessando um valor de um enum com uma chave
const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco'
}

function comida(c:Comida) {
    return `Comidas muito apetitosas!`
}
console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))