export {}
// Exemplo 1
function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
    return {
      ...objeto1,
      ...objeto2,
    }
  }

  const pessoa = juntarObjetos(
    { nome: 'Matheus', },
    { idade: 22, }
  );

  console.log(pessoa);

  const pessoa2 = juntarObjetos(
    { nome: 'Matheus' },
    22
  );

  console.log(pessoa2);

  function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
    return {
      ...objeto1,
      ...objeto2,
    }
  }

  const pessoa3 = juntarObjetos2(
    { nome: 'Matheus' },
    { idade: 22 }
  );

// Exemplo 2

// function prop<T, K>(objeto: T, chave: K) {
//     return objeto[chave]
// }

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
    return objeto[chave]
}

const pessoa4 = prop2(
    {nome: `Matheus`}, `nome`
)

console.log(pessoa4)

