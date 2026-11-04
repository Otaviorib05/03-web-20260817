import {dados_das_noticias} from "./bd.js";

let vetor_das_mensagens = [];
const container_das_mensagens = document.getElementById("mensagens");
const opcao_mensagens = document.getElementById("opcao_mensagens");

opcao_mensagens.addEventListener("click", () => {
    alternarApresentacaoDasMensagens();
});

function alternarApresentacaoDasMensagens() {
    if(vetor_das_mensagens.length === 0) {
        vetor_das_mensagens = [...dados_das_noticias];
    }

}

const carregarMensagens = async () => {
    vetor_das_mensagens = dados_das_noticias;
};

function apresentarMensagens() {
    vetor_das_mensagens.forEach((mensagem) => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";
    
        cartao.innerHTML = `
            <img src="${mensagem.imagem}" alt="${mensagem.titulo}" class = "imagem-do-cartao">
            <section class = "corpo-do-cartao">
            <h1 class = "titulo-do-cartao">${mensagem.titulo}</h1>
            <p class = "classificacao">
            <span class = "categoria-da-noticia">${mensagem.categoria}</span>
            <span class = "data-da-noticia">${mensagem.data}</span>
            </p>
            <p class = "descricao-do-cartao">${mensagem.descricao}</p>
            <p class = "autor-da-noticia">Autor: ${mensagem.autor}</p>
            </section>
        <a class = "botao-do-cartao" href = "./detalhe.html?id=${mensagem.id}">Leia mais</a>
        `;
        container_das_mensagens.appendChild(cartao);


    }
}
