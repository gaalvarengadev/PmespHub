/*evento do botao da pagina TAF*/
const verMais = document.getElementById("verMais");
const sexoDialog = document.getElementById("sexoDialog");

const btnMasculino = document.getElementById("btnMasculino");
const btnFeminino = document.getElementById("btnFeminino");
const btnCancelar = document.getElementById("btnCancelar");

// 1) Quando clicar no "Ver Mais", NÃO vai abrir a página direto.
// Vai abrir o popup.
verMais.addEventListener("click", (e) => {
    e.preventDefault(); // impede ir para taf.html automaticamente
    sexoDialog.showModal(); // abre o popup
});

// 2) Se clicar em Homem, redireciona para uma página
btnMasculino.addEventListener("click", () => {
    window.location.href = "taf-m.html";
});

// 3) Se clicar em Mulher, redireciona para outra página
btnFeminino.addEventListener("click", () => {
    window.location.href = "taf-f.html";
});

// 4) Cancelar fecha o popup
btnCancelar.addEventListener("click", () => {
    sexoDialog.close();
});
/* fim do script de escolha*/