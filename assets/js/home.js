import {dados_das_noticias} from "./bd.js";

let vetor_das_noticias = [];
const container_das_noticias = document.getElementById("noticias");
const opcao_noticias = document.getElementById("opcao_noticias");

opcao_noticias.addEventListener("click", () => {
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias() {
    if (vetor_das_noticias.length === 0) {
      carregarNoticias();
      apresentarNoticias();
    } else {
        container_das_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregarNoticias = async () => {
    vetor_das_noticias = dados_das_noticias;
};

