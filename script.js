//* ARRAY STRING 001

const arrayString = ['b' , 'c' , 'a']

console.log(arrayString.length)  // <--- 3 elementos

console.log(arrayString[3]) // <--- undefined, pois não existe índice 3.

//* ARRAY NUMBER 002

const arrayNumber = [2 , 1 , 3]

//* ARRAY STRING , NUMBER , BOOLEAN 003

const arrayMix = ['string' , 1 , 3>2]

console.log(arrayMix.includes('STRING')) // <--- RETORNA FALSE POIS O VALOR NÃO É O MESMO

console.log(arrayMix.includes(1)) // <--- RETORNA TRUE POIS EXISTE O VALOR 1 NO ARRAY

console.log(arrayMix.includes(true)) // <--- RETORNA TRUE POIS EXISTE UM VALOR TRUE NO ARRAY

//* ARRAY NUMBER

const arraySolo = [1]

console.log(arraySolo) // <--- IMPRIME A ARRAY NORMALMENTE

console.log(arraySolo[0]) // <--- IMPRIME SOMENTE O VALOR QUE ESTÁ NO ÍNDICE [0]

//* ARRAY SEM VALOR

const arrayVazio = []

//* EXERCÍCIOS PARTE 2

const copyArray = arrayString.slice() // <--- PARA COPIAR UMA ARRAY, PRIMEIRO DECLARAMOS UMA NOVA VARIÁVEL COM VALOR DA ARRAY ORIGINAL COM O MÉTODO .slice() PARA CORTAR VÍNCULOS COM A CÓPIA

console.log(copyArray , arrayString) // <--- CÓPIA SEM ALTERAÇÃO, SERÃO IDÊNTICAS

copyArray.push('d') // <--- O MÉTODO .push(elemento) IRÁ INCLUIR NA CÓPIA O ITEM 'd'

console.log(copyArray , arrayString) // <--- COMO O MÉTODO .slice() FOI APLICADO NO VALOR DA VARIÁVEL ORIGINAL, A ARRAY ORIGINAL SE MANTEVE

copyArray.splice(1,2) // <--- O MÉTODO .splice(i = ponto de partida da remoção , n = número de itens a serem removidos)

console.log(copyArray) // <--- SERÁ IMPRESSO NO CONSOLE A , D POIS PEDI PARA COMEÇAR A REMOVER DO B, REMOVENDO 2 ITENS OU SEJA B , C

console.log(arrayString.sort()) // <--- O MÉTODO .sort() É CASE SENSITIVE, OU SEJA, ELE LÊ CARACTERE POR CARACTERE (UNICODE)

console.log(arrayNumber.sort()) // <--- O MÉTODO .sort() É CASE SENSITIVE, OU SEJA, ELE LÊ CARACTERE POR CARACTERE (UNICODE)

//* EXERCÍCIO DE FIXAÇÃO

//* 1. Crie um novo array. Ele deve possuir apenas números, e estes 
//* números não devem seguir nenhuma ordem específica. 

let arrayFix = [28, 32, 17, 44, 65]

//* Imprima no console o array original

console.log(arrayFix)

//* Imprima-o ordenado em ordem crescente. 

console.log(arrayFix.sort())

//* Imprima-o em ordem reversa.

console.log(arrayFix.reverse())

//* Remova o último item do array

arrayFix.pop()

//* Adicione o número 6

arrayFix.push(6)

//* Remova o número que está no índice 2 do array

arrayFix.splice(2,1)

console.log(arrayFix)