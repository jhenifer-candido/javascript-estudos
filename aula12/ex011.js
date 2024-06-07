/*/ var idade = 10
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Você pode votar, mas não é obrigado por lei')
} else {
    console.log('Voto obrigatório')
} 
 
/*/

var nome = 'isabella'
console.log(`O seu nome é ${nome}.`)
if (nome === 'jhenifer' || 'isabella') {
    console.log('O seu nome é lindo')
} else if(nome !== 'jhenifer') {
    console.log('O seu nome é feio.')
}