//? DOM == Document Object Model
//? Referencia de cada elemento que esta aparecendo na tela.
//? faz alterações nos objetos que estão no script do html.


//* ---------- 4 Funções para selecionar elementos ----------


//?document.getElementById("idDoElemento") // uma forma de selecionar o objeto atraves do ID dele
const name = document.getElementById('name')

//? innerHTML consegue modificar o codigo html que esta aparecendo no momento
name.innerHTML = 'clique no botão <button> mais informações</button>' 

//? seleciona os objetos que possuam o class com o nome escolhido
const lists = document.getElementsByClassName('list')

//! o getElementByClassName retorna sempre um array com os objetos
lists[0].innerHTML = "item alterado"

//? seleciona os obejtos pelo nome da tag e retorna todos em um array
const buttuns = document.getElementsByTagName('button')
buttuns[1].textContent = "alterado com o getElementByTagName"

//? seleciona todos os objetos que tiver o atributo name e retorna em um array
const inputs = document.getElementsByName('nome')


//* --------------------------------------------------------------------------------


//* Selecionar elemento com o querySelector

document.querySelector('#ID') //! seleciona pelo ID
document.querySelector('.div') //! seleciona o primeiro elemento que ele encontra com o className passado
document.querySelector("button") //! seleciona o primeiro elemento com a tagName passada

//? Para poder selecionar todos os elementos que tenham ou a tagName ou a className usamos:
document.querySelectorAll(".div")
document.querySelectorAll("button")

//? Para pegar um elemento pelo nameTag ou qualquer atributo esoecifico
document.querySelector(`button[name="enviar"]`).textContent = "deu certo a seleçãõ por atributos"



//* --------------------------------------------------------------------------------

//* Manipulação de classes do elemento

const divColor = document.querySelector('.buttons')
function red () {
    divColor.classList.remove('green')
    divColor.classList.remove('blue')
    divColor.classList.add('red')
}
function green () {
    divColor.classList.remove('red')
    divColor.classList.remove('blue')
    divColor.classList.add('green')
}
function blue () {
    divColor.classList.remove('green')
    divColor.classList.remove('red')
    divColor.classList.add('blue')
}

const btn = document.querySelector(`button[name="trocar"]`)

const troca = () => {
    if(btn.classList.contains('vermelho')){
        btn.classList.remove('vermelho')
        btn.classList.add('verde')
        btn.textContent = 'ON'
    } else {
        btn.classList.add('vermelho')
        btn.classList.remove('verde')
        btn.textContent = 'OFF'
    }
}
//* --------------------------------------------------------------------------------

//* Manipulando Atributos

const img = document.querySelector('.image')
function trocarImg(file, name) {
    img.setAttribute('src', `./assets/images/${file}`)
    img.setAttribute('data-animal', name)
}


//* --------------------------------------------------------------------------------