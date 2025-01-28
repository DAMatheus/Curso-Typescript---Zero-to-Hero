// Exemplo 1

class Estudante<T, U> {
    private nome: U
    private id: T

    setValor(id: T, nome: U): void {
        this.id = id
        this.nome = nome
    }

    retornarValor(): void {
        console.log(`${this.id}: ${this.nome}`)
    }
}

const estudante = new Estudante<number, string>()
const estudanteSecundario = new Estudante<string, string>()

estudante.setValor(1, `Matheus Antunes`)
estudante.retornarValor()

estudanteSecundario.setValor(`01`, `Matheus Antunes`)
estudanteSecundario.retornarValor()
