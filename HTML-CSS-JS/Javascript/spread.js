// let n1=[10,20,30]
// let n2=[11,21,33,44,55]
// let n3=[...n1,...n2]
const jogador1={nome:"bruno",energia:100,vidas:3}
const jogador2={nome:"carlos",energia:100,vidas:5}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)

//console.log("n1: " + n1)
//console.log("n2: " + n2)
// console.log("n3: " + n3)
// console.log("tipo do n3: " + typeof(n3))