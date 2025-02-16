// Selecionando elementos
const overlay_1 = document.getElementById("overlay_1");
const overlay_2 = document.getElementById("overlay_2");
const overlay_3 = document.getElementById("overlay_3");
const overlay_4 = document.getElementById("overlay_4");

// Função para abrir o pop-up
function abrirPopup_1() {
    overlay_1.classList.add("ativo");
}
function abrirPopup_2() {
    overlay_2.classList.add("ativo");
}
function abrirPopup_3() {
    overlay_3.classList.add("ativo");
}
function abrirPopup_4() {
    overlay_4.classList.add("ativo");
}

// Função para fechar o pop-up
function fecharPopup_1() {
    overlay_1.classList.remove("ativo");
}
function fecharPopup_2() {
    overlay_2.classList.remove("ativo");
}
function fecharPopup_3() {
    overlay_3.classList.remove("ativo");
}
function fecharPopup_4() {
    overlay_4.classList.remove("ativo");
}