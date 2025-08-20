import { produtos } from "./objetos.js";

console.log();
console.log('Nossa tabela de produtos');
console.log();

console.table(produtos);
console.log();

// retornar um array apenas com os nomes dos produtos
// usaremos o Map() para fazer a busca e a geração do novo array
// ELE NÃO ALTERA O ARRAY ORIGINAL
console.log('------------------exemplos de map---------------------------');
console.log();

 // Precos
console.log('precos');
console.log();

const precos = produtos.map(produto => produto.preco);
console.table(precos);

console.log('categoria');
console.log();

const categoriaProdutos = produtos.map(produto => produto.categoria);
console.table(categoriaProdutos);

// Criando um novo array com o nome e a categoria
// Estou usando map, pois ele percorre todo o array e retorna TODOS VALORES ENCONTRADOS
// MAP SEMPRE RETORNA UM ARRAY COM O MESMO TAMANHO DO ORIGINAL

console.log('nome e preco');
console.log();

const nomeCategoria = produtos.map(({ nome, preco}) => {nome, preco})
// console.table(nomeCategoria);

// filter() = retorno de um novo array conforme a condição que foi definida. ele mantem o
// array original intacto

console.log('------------------- Exemplos de filter --------------------');
console.log();

// Buscar todos o produtos com categorial = Celular

console.log('Todos os produtos com categoria = Celular');
console.log();


const celulares = produtos.filter(produto => produto.categoria === 'Celular')
console.table(celulares)
console.log();

// produtos com preco entre 1000 e 5000
console.log('Produtos com preco entre 1000 e 5000');
console.log();



const faixaPreco = produtos.filter(produto => produto.preco >= 1000 && produto.preco <= 5000 ); 
console.table(faixaPreco)
console.log();

// Produtos com estoque maior que 9
console.log('Produtos com estoque maior que 9');
console.log();


const estoque = produtos.filter(produto => produto.estoque > 9);
console.table(estoque)
console.log();

console.log('----------------------Exemplos de find----------------------');
console.log();

// find() retorna APENAS O PRIMEIRO elemento que encontrar
// Verificiar se existe Iphone nos objetos
console.log('Busca de um produto com nome "iphone"');
console.log();

const buscaIphone = produtos.find(produto => produto.nome.toLowerCase().includes('IPHONE'.toLowerCase()));
console.table(buscaIphone)
console.log();

// para achar algo começa com um caracter especifico
//startsWith()
console.log('começando com T');
console.log();

const stringT = produtos.find(produto => produto.nome.toLowerCase().startsWith('t'.toLowerCase()))
console.table(stringT);

console.log('----------------------Exemplos gerais---------------------');
console.log();

console.log('para achar tudo que possui em categorias que começam com T');
console.log();


const categoriaT = produtos.filter(produto => produto.categoria.toLowerCase().startsWith('t'.toLowerCase()))
console.table(categoriaT);
console.log();

console.log('para achar tudo que possui nomes que terminam com O');
console.log();

//endsWith()

const produtoTerminaO = produtos.filter(produto => produto.nome.toLowerCase().endsWith('O'.toLowerCase()))
console.table(produtoTerminaO);
console.log();

// includes() - buscar uma string em qq parte do objeto

console.log('qualquer produto que possua PO no nome');
console.log();

const possuiPO = produtos.filter(produto => produto.nome.toLowerCase().includes('PO'.toLowerCase()))
console.table(possuiPO)
console.log();

// para facilitar
console.log('Busca com "AI"');
console.log();

const busca = 'ai'
const possuiAI = produtos.filter(produto => produto.nome.toLowerCase().includes(busca.toLowerCase()))
console.table(possuiAI)

// Criando uma função para buscar qualquer produto

function buscarProduto(busca) {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(busca.toLowerCase()))
}

console.table(buscarProduto('sm'))