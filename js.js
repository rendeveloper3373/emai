// Efeito digitação
document.addEventListener("DOMContentLoaded", function () {
  const text = "Registro Neon";
  const typewriter = document.getElementById("typewriter");
  typewriter.textContent = text;
});

// Fade-in ao rolar
window.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Formulário - simulação de envio
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  const mensagem = document.getElementById("mensagem-sucesso");
  mensagem.textContent = `Conta criada com sucesso, ${nome}! 🚀`;
});

// Efeito digitação
document.addEventListener("DOMContentLoaded", function () {
  const text = "Emotional Care";
  const typewriter = document.getElementById("typewriter");
  typewriter.textContent = text;
});

// Simula envio de formulário
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem-sucesso");
  mensagem.textContent = `Conta criada com sucesso, ${nome}! 🌟`;
});

function registrar() {
    const nome = document.getElementById("nome").value;
    localStorage.setItem("nomeUsuario", nome); // guarda o nome no navegador
    window.location.href = "produto.html";
}

let nomeUsuario = localStorage.getItem("nomeUsuario") || "amigo";
