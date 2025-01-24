export {}

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto)
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string

console.log(descontoFinal)

// Exemplo 2

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
  };

const humano = {
    idade: 36,
    idioma: `Portugues`
}

const humano02 = humano as Humano

console.log(humano02.nome.toUpperCase())