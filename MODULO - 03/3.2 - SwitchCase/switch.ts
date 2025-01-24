// Exemplo 1 - uso de Switch case

let flor: string = `Tulipa`

switch (flor) {
    case `rosa`:
        console.log(`Nao e sua flor`)
        break;
    case `Girassol`:
        console.log(`Nao e sua flor`)
    break;
    case `Tulipa`:
        console.log(`sua flor é tulipa`)
    break;
    default:
        console.log('Selecione outra flor')
        break;
}
// Exemplo 2 - Uso de Switch Case

let diaUtilSemana = 5
switch (diaUtilSemana) {
    case 0:
        console.log(`Segunda feira`)
        break;
    case 1:
        console.log(`Terça feira`)
    break;
    case 2:
        console.log(`Quarta Feira`)
    break;
    case 3:
        console.log(`Quinta Feira`)
    break;
    case 4:
        console.log(`Sexta Feira`)
    break;
    case 5:
        console.log(`Sabado`)
    break;
    case 6:
        console.log(`Domingo`)
    break;
    default:
        console.log('Selecione outra flor')
        break;
}