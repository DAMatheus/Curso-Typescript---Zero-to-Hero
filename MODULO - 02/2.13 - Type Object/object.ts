// Exemplo 1 - Exemplo basico do Type Object
export { }; 
const pessoa = {
    nome: `Matheus`,
    sobrenome: `Antunes`,
    idade: 22,
    funcao: `Desempregado`,
}
console.log(pessoa)
// Exemplo 2 - Object como parâmetros de função

function onBoarding01(funcionario: {nome: string}) {
    return `Seja bem vinda ${funcionario.nome}`
}
console.log(onBoarding01( {nome: `Matheus Antunes`} ))
// Exemplo 3 - object nomeados

interface Pessoa {
    nome: string,
    funcao: string
}

function onBoarding02(pessoa: Pessoa) {
    return `Seja bem vindo ${pessoa.nome}, sua função aqui na empresa será: ${pessoa.funcao}`
}

console.log(onBoarding02({nome: `Matheus Antunes`, funcao: `Desempregado`}))

// Exemplo 4 - object com Type alias

type Pessoa03 = {
    nome: string,
    funcao: string,
    linguagem: string
}

function onBoarding03(pessoa: Pessoa03) {
    return `Seja bem vindo ${pessoa.nome}, sua função aqui na empresa será: ${pessoa.funcao}, voce irá trabalhar com a linguagem: ${pessoa.linguagem}`
}

console.log(onBoarding03({nome: `Matheus Antunes`, funcao: `Desempregado`, linguagem: `Typescript`}))
// Exemplo 5 - usando optional no object

interface Pessoa04 {
    nome: string,
    funcao: string
    linguagem: string,
    email?: string
}

function onBoarding04(pessoa: Pessoa04) {
    return `Seja bem vindo ${pessoa.nome}, sua função aqui na empresa será: ${pessoa.funcao}, voce irá trabalhar com a linguagem: ${pessoa.linguagem}`
}

console.log(onBoarding04({nome: `Matheus Antunes`, funcao: `Desempregado`, linguagem: `Typescript`}))

// Exemplo 6 - propriedade readonly
interface Pessoa05 {
    nome: string,
    funcao: string
    linguagem: string,
    readonly email: string
}

function onBoarding05(pessoa: Pessoa05) {
    return `Seja bem vindo ${pessoa.nome}, sua função aqui na empresa será: ${pessoa.funcao}, voce irá trabalhar com a linguagem: ${pessoa.linguagem}, seu email: ${pessoa.email}`
}

console.log(onBoarding05({nome: `Matheus Antunes`, funcao: `Desempregado`, linguagem: `Typescript`, email: `matheus@email.com`}))

// Exemplo 7 - tipos de exensoes
interface Mae {
    nome: string
}

interface Pai {
    sobrenome: string
}

interface Filha extends Pai, Mae {
    idade: number
}
const filha: Filha = {
    nome: `Eduarda`,
    sobrenome: `Quadros`,
    idade: 25
}
console.log(filha)
// Exemplo 8 - Tipos de interseções

interface Cachorro {
    tipo: string
}

interface Gato {
    tipo: string
}
type animal = Cachorro & Gato
// Exemplo 9 - Generic Objects
type Usuario = {
    nome: string,
    email: string
}
type Admin = {
    nome: string,
    email: string
    admin: true
}
const usuario: Usuario = {
    nome: `Eduarda`,
    email: `algumacoisa@email`
}

const admin: Admin = {
    nome: `Eduarda`,
    email: `algumacoisa@email`,
    admin: true
}
function acessarSistema<T>(usuario: T): T {
    return usuario
}
console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))
/*function acessarSistema(usuario: Usuario): Usuario {
    return usuario
}*/
//console.log(acessarSistema(usuario))