
function irParaSecao(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

const overlay_1 = document.getElementById("overlay_1");
const overlay_2 = document.getElementById("overlay_2");
const overlay_3 = document.getElementById("overlay_3");
const overlay_4 = document.getElementById("overlay_4");
const overlay_5 = document.getElementById("overlay_5");


function abrirPopup_1() {
    overlay_1.classList.add("ativo");
    document.body.classList.add("no-scroll");
}
function abrirPopup_2() {
    overlay_2.classList.add("ativo");
    document.body.classList.add("no-scroll");
}
function abrirPopup_3() {
    overlay_3.classList.add("ativo");
    document.body.classList.add("no-scroll");
}
function abrirPopup_4() {
    overlay_4.classList.add("ativo");
    document.body.classList.add("no-scroll");
}
function abrirPopup_5() {
    overlay_5.classList.add("ativo");
    document.body.classList.add("no-scroll");
}


function fecharPopup_1() {
    overlay_1.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
}
function fecharPopup_2() {
    overlay_2.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
}
function fecharPopup_3() {
    overlay_3.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
}
function fecharPopup_4() {
    overlay_4.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
}
function fecharPopup_5() {
    overlay_5.classList.remove("ativo");
    document.body.classList.remove("no-scroll");
}