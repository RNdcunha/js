document.addEventListener("DOMContentLoaded", function() {
    // Gera um número aleatório entre 1 e 10
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Exibe o número aleatório na página
    document.getElementById("numeroAleatorio").textContent = "O número aleatório é: " + numeroAleatorio;
});