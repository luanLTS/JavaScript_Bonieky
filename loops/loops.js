// ! Switch

// let dia = 7
// let diaNome = ''
// let diaTipo = ''
// switch (dia) {
//     case 1:
//         diaNome = 'Segunda-Feira'
//         break
//     case 2:
//         diaNome = 'Terça-Feira'
//         break
//     case 3:
//         diaNome = 'Quarta-Feira'
//         break
//     case 4:
//         diaNome = 'Quinta-Feira'
//         break
//     case 5:
//         diaNome = 'Sexta-Feira'
//         break
//     case 6:
//         diaNome = 'Sábado'
//         break
//     case 7:
//         diaNome = 'Domingo'
// }

// switch (dia){
//     case 6:
//     case 7:
//         diaTipo = 'Final de semana'
//         break
//     default:
//         diaTipo = 'Dia de Semana'
//         break
// }

// document.getElementById("dia").innerHTML = `O dia é ${diaNome} e ele é um ${diaTipo}` 

//! Loop For

let soma = 0
for (let i = 0; i <= 100; i++) {
    if(i%2 == 1 ) soma += i
}
console.log(soma)