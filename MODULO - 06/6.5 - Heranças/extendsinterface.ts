// Exemplo 1 - interface com extends

import { isInterfaceDeclaration } from "typescript";

interface Animal01 {
    nome: string
    idade: number
    porte: string
}

interface Cachorro01 extends Animal01 {
    raca: string
}

const cachorro: Cachorro01 = {
    nome: 'Prince',
    idade: 2,
    porte: 'Médio',
    raca: 'Spiz Alemao'
};

console.log(cachorro)

// Exemplo 2 - Extensão de Multiplas Interfaces

interface Cachorro {
    nome: string
}

interface Gato {
    nome: string
}

interface Animal extends Cachorro, Gato {
    idade: number
}

const animal: Animal = {
    nome: 'Farofa',
    idade: 5,
  };

console.log(animal)

// Exeplo 3 - Uso de Omit

interface Funcionario {
    id: number
    nome: string
    salario: number
}

interface Desenvolvedor extends Omit<Funcionario, `id`> {
    id: string
    linguagemProgramacao: string
}

const desenvolvedor: Desenvolvedor = {
    id: `0-254`,
    nome: `Matheus Antunes`,
    salario: 10000,
    linguagemProgramacao: `Typescript`
}

console.log(desenvolvedor)