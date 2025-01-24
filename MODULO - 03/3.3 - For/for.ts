// Exemplo 1 - loop for

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Exemplo 2 - for ...of

const arrayNumeros = [10, 20, 30, 40, 50]

for (const i of arrayNumeros) {
    console.log(i)
}

// Exemplo 3 - for ...in

const arrayNumeros01 = [50, 40, 30, 20, 10]

for (const i in arrayNumeros01) {
    console.log(i)
}

// sort()
const ordemNumerica: number[] = arrayNumeros01.sort()
console.log(ordemNumerica)