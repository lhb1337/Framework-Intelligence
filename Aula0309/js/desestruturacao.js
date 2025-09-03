// Desestruturação
// Forma reduzida de coletar dados de um Array(Indice)
// ou de objetos, pegando as propriedades

const numeros = [10, 20, 30]
const a = numeros[0]
const b = numeros[1]
const c = numeros[2]
 
console.log(a,b,c);

// usando desestruturação

const [x, y, z] = numeros;
console.log(x,y,z)

// pulando um valor

const [primeiroValor, ,terceiroValor] = numeros
console.log(primeiroValor, terceiroValor);

// desestruturação de objetos

import { produtos } from "./objetos.js"

// sem desestruturacao

const {nome: produto1, preco: precoProduto} = produtos[2]

console.log(produto1, precoProduto);








