// Exemplo 1 - Funções

function logError(errorMessage: string) {
    console.log(errorMessage)
    // return errorMessage;
}
logError(`Required field - Name`)

// Exemplo 2 - Funções
const logErrorExemple2 = (errorMessage: string): void => {
    console.log(errorMessage)
}

logErrorExemple2(`Required field - Surname`)

// Exemplo 3 - Variaveis
let variavelExemploVoid: void
// variavelExemploVoid = 1
variavelExemploVoid = null
variavelExemploVoid = undefined
console.log(variavelExemploVoid)