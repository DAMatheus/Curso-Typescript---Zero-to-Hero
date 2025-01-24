export { }

// Exemplo 1 - Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
};

type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
}

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
}

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]
}

const usuarioMapped: UsuarioMappedType = {
    nome: `Matheus`,
    endereco: `Rua 2`
}

console.log(usuarioMapped)

// Outros exemplos usando o readonly

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
    autor: 'Boris Cherny',
    numeroPaginas: 324,
    preco: 19.99,
    titulo: 'Programming TypeScript: Making Your JavaScript Applications Scale'
};

console.log(livro)