function somar(evento) {
    if (event.keyCode == 13 && event.ctrlKey == true) {
        let texto = document.getElementById("campo").value;
        console.log(texto)
    }
}

// * .keyCode == codigo pega a tecla que o usuario apertou
// * .ctrlKey == bool verifica se ele esta pressionou o ctrl junto

function red(){
    clear();
    document.getElementById("title").classList.add('red'); //! classList.add adiciona uma classe ao elemento html
}
function green(){
    clear();
    document.getElementById("title").classList.add('green');
}

function blue(){
    clear();
    document.getElementById("title").classList.add('blue');
}

function clear() {
    document.getElementById("title").classList.remove("red");
    document.getElementById("title").classList.remove("green");
    document.getElementById("title").classList.remove("blue");
}

//.style.qualquer propriedade do CSS sem "-"

function showPhone(element) {
    element.style.display="none";
    document.getElementById("telefone").style.display = "block";
}

/*
    ?const nome = "luan" -> o valor de nome pode ser alterado mas a sua estrutura não
    ?const pessoa = { 
    ?    nome : "Luan",
    ?    sobrenome : "Teixeira"
    ?}
    *pessoa.nome = "otavio" // True
    !pessoa = {
    !    apelido : "doido",
    !    idade : 20
    !} // False
*/

/* Evento de teclado 
    *onkeyup="funcao(event)"// evento acontece quando o usuário solta a tecla
    *onkeydown="funcao(event)"// evento acontece quando o usuário abaixa a tecla 
    *onkeypress="funcao(event)"// evento acontece quando o usuario preciona a tecla
*/

//Arrays

let carros = [
    'Palio',
    'Corsa',
    'Opala',
    'Maverick',
    ( nome ) => {carros = [
        ...carros,
        nome
    ]}
]

carros[4]("Onix")
carros[4]("Cruze")
carros[4]("Celta")
carros[4]("Fusca")
console.log(carros)

//! Fazer os exemplos da aula de Switch