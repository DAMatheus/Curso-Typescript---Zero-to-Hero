export = {}

// Exemplo - Intersection Type

interface DadosBancarios {
    conta: number
    agencia: number
    banco: string
}

interface Cliente {
    nome: string
    email: string
}

interface DadosPessoaFisica {
    cpf: number
}

interface DadosPessoaJuridica {
    cnpj: number
}

type DadosCliente = DadosBancarios & DadosPessoaFisica & Cliente

const dadosClientes: DadosCliente = {
    conta: 1234,
    agencia: 1010,
    banco: `Banrisul`,
    nome: `Matheus Antunes`,
    email: `matheus@email.com`,
    cpf: 123456789
}

console.log(dadosClientes)