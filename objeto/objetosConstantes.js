//pessoa -> local de memoria -> {...}
const pessoa = {nome: 'joao'}

//pessoa -> novo local de memoria -> {...}
//const pessoa = {nome: 'ana'}

Object.freeze(pessoa)
pessoa.nome = 'ana'
pessoa.end = 'rua 123'
console.log(pessoa)

const pessoa2 = Object.freeze({nome: 'pedro'} )
pessoa.nome = 'ana'
pessoa.end = 'rua 123'
console.log(pessoa2)