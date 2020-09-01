function somar(evento) {
    if (event.keyCode == 13 && event.ctrlKey == true) {
        let texto = document.getElementById("campo").value;
        console.log(texto)
    }
}

function red(){
    clear();
    document.getElementById("title").classList.add('red');
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

//.style.qualquer propriedade do CSS

function showPhone(element) {
    element.style.display="none";
    document.getElementById("telefone").style.display = "block";
}