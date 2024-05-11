<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Número Aleatório</title>
</head>
<body>
    <h1>Número Aleatório</h1>
    <p>O número aleatório é: <span id="numeroAleatorio"></span></p>

    <script>
        function gerarNumeroAleatorio() {
            // Gera um número aleatório entre 1 e 10
            return Math.floor(Math.random() * 10) + 1;
        }

        // Obtém o elemento HTML onde o número será exibido
        var numeroAleatorioElement = document.getElementById("numeroAleatorio");

        // Gera o número aleatório e o exibe na página
        var numeroAleatorio = gerarNumeroAleatorio();
        numeroAleatorioElement.textContent = numeroAleatorio;
    </script>
</body>
</html>
