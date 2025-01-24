export { }
// Exemplo 1 - Optional Parameter
function informarDadosPessoas(idPessoa: number, nome: string, email?: string) {
    if (email != undefined) {
        console.log(`ID Funcionario: ${idPessoa}, Nome: ${nome}, email: ${email}`)
    }else {
        console.log(`ID Funcionario: ${idPessoa}, Nome: ${nome}, email: Email não informado`)
    }
}
informarDadosPessoas(10, 'Matheus Antunes', 'email@email.com')
// Exemplo 2
function mensagemLog(mensagem: string, usuarioID?: number) {
    const horaLog = new Date().toLocaleTimeString()
    console.log(horaLog, mensagem, usuarioID || `Usuario não conectado`)
}
mensagemLog('Atualizar Pagina')
mensagemLog('Usuario conectado com sucesso', 2145)
// Exemplo 3

type Pessoa = {
    idFuncionario: number,
    nome: string,
    idade?: number,
    email?: string
}

let pessoa: Pessoa

pessoa = {
    idFuncionario: 555,
    nome: `Matheus`,
    idade: 22

}
console.log(pessoa)
