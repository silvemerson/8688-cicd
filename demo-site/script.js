document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Simula uma verificação de login
    if (username === "admin" && password === "senha123") {
        messageDiv.style.color = "green";
        messageDiv.textContent = "Login bem-sucedido!";
    } else {
        messageDiv.textContent = "Usuário ou senha incorretos.";
    }
});
