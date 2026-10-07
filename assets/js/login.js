const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email && senhaInformada === senha) {
        alert("Credenciais verificadas com sucesso!");
        if(SenhaInformada === senha) {
            alerta("Senha correta!");
            window.location = "home.html";
        } else 
            alert("E-mail incorreto!");
    } else 
        alert("Senha incorreta!");
}