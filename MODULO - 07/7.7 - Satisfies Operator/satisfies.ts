// Exemplo 1 - Satisfies Operator

export {}

type Cidade = NomeCidade | CidadeCoordenadas

type NomeCidade = "São Paulo" | "Rio de Janeiro" | "Salvador" | "Belo Horizonte";

type CidadeCoordenadas = {
    x: number
    y: number
}

type Pessoa = {
    localNascimento: Cidade
    residenciaAtual: Cidade
}

const pessoa = {
    localNascimento: `São Paulo`,
    residenciaAtual: {x: 10, y: 80}
} satisfies Pessoa
console.log(pessoa.localNascimento.toUpperCase())

// Exemplo 2 - Satisfies Operator

type Connection = {}

declare function createConnection(
    host: string,
    port: string,
    reconnect: boolean,
    poolsize: number
): Connection;

type Configuration = {
    host: string
    port: string | number
    tryReconnect: boolean |(()=> boolean)
    poolSize?: number
}

const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
} satisfies Configuration;

function connect() {
    let { host, port, tryReconnect } = config;

    createConnection(host, `${port}`, tryReconnect(), 10);
}
