/* =====================================================
AGRINHO 2026 - script.js
Tema: Agro forte, futuro sustentável
===================================================== */

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

// ==========================
// Mensagem de boas-vindas
// ==========================
console.log("Bem-vindo ao AGRINHO 2026!");

// ==========================
// Botão Voltar ao Topo
// ==========================
const botaoTopo = document.getElementById("btnTopo");

if (botaoTopo) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
// Validação de Formulário
// ==========================
const formulario = document.getElementById("contatoForm");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (nome === "" || email === "") {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}

// ==========================
// Animação ao rolar a página
// ==========================
const elementos = document.querySelectorAll(".animar");

const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});

elementos.forEach((elemento) => {
    observar.observe(elemento);
});const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    document.getElementById("img1").classList.toggle("destaque");
    document.getElementById("img2").classList.toggle("destaque");
});

});
