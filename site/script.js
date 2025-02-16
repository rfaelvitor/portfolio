// Selecionando elementos
const overlay = document.getElementById("overlay");

// Função para abrir o pop-up
function abrirPopup() {
    overlay.classList.add("ativo");
}

// Função para fechar o pop-up
function fecharPopup() {
    overlay.classList.remove("ativo");
}