<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $uso = $_POST['uso'];

    $to = "novaaliancamogi@gmail.com";
    $subject = "Novo Orçamento Solicitado";
    $message = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nTipo de Serviço: $uso";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
}
?>
