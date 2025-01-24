type Pessoa = {
    nome: string,
    idade: number
    endereco: string
}

type Empresa = {
    nome: string
    cnpj: number
}

type EnderecoPessoa = {
    enderecoSecundario: string
    cidade: string
    pais: string
}

type EnderecoEmpresa = {
    localizacao: `rua` | `Avenida` | `praça`
}

type EnderecoFinal<T> = T extends {endereco: string}? EnderecoPessoa : EnderecoEmpresa

const EnderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: `Rua 2`,
    cidade: `São Paulo`,
    pais: `Brasil`
}

const EnderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: `rua`
}

console.log(EnderecoPessoa)
console.log(EnderecoEmpresa)


// Exemplo 2

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | `mp3` | `mp4`;

type FormatoArquivoMedia<T> = T extends `mp3` | `mp4` ? T: never

type ArquivoAudio = FormatoArquivoMedia<FormatoArquivos>

const arquivoAudio: ArquivoAudio = `mp4`

console.log(arquivoAudio)