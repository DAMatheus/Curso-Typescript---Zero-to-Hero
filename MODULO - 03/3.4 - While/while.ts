// Exemplo 1 - while
let contador= 0
while (contador <= 5) {
    console.log(contador)
    contador++
}
// Exemplo 2 - 
let numero = 1
while (numero <=20) {
    if (numero % 5 == 0) {
        console.log(`o primeiro numero multiplo entre 5 e 1 a 20 é: ${numero}`)
        break
    }
    numero++
}
// Exemplo 3 - exemplo mais pratico
let contadorUsuario = 0

const usuario: string[] = [`Matheus`, `Eduarda`, `Camila`]

while(usuario[contadorUsuario]) {
    console.log(`Usuarios...`, usuario[contadorUsuario])
    contadorUsuario++
}
// Exemplo 4 - do...while

let contador01 = 0

do {
    console.log(contador01)
    contador01++
} while (contador01 < 5);